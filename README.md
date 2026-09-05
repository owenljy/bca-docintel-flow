# BCA Financial Report Extraction — Flow Designer (WFA) version

Fluent SDK source for the "extract financial report fields from an attached
document via DocIntel GenAI" automation on `x_bca_reg_contractor_reg`
(app scope `x_snc_findoc`), implemented as a Flow Designer / Workflow
Automation flow instead of a Business Rule.

## Status

Deployed and verified end to end on the BCA instance
(`bcaaifdemo.service-now.com`). Attaching a financial report PDF to an
existing Contractor Registration record populates all 16 `fin_*` fields
and sets `financial_report_extracted`.

## What's here

- `src/fluent/flows/extract-financial-report-flow.now.ts` — triggers on
  **attachment creation** (`sys_attachment`, filtered to
  `table_name=x_bca_reg_contractor_reg`), submits the extraction, then
  polls in a `doTheFollowing` / `until` loop, 15s apart, until the
  DocIntel task completes.
- `src/fluent/actions/submit-financial-extraction.now.ts` +
  `src/server/actions/submit-financial-extraction.js` — Custom Action
  wrapping an `actionStep.script` that resolves the host record from the
  attachment, skips records already extracted, and calls
  `sn_docintel_gen_ai.DocIntelGenAIAPI().extractFields(...)`.
- `src/fluent/actions/poll-and-apply-financial-extraction.now.ts` +
  `src/server/actions/poll-and-apply-financial-extraction.js` — Custom
  Action that calls `getFieldsResult(taskId)` and, once `COMPLETE`,
  parses the JSON result and writes the `fin_*` fields back onto the
  record.
- `docs/now-sdk-defect-column-type-union.md` +
  `docs/scan-column-types.mjs` — a Fluent SDK type-generation defect
  found while building this, written up for the now-sdk team.

## Design notes

### Why the trigger is on the attachment, not the record

The original design triggered on `x_bca_reg_contractor_reg` record
creation. That never worked, because in ServiceNow the record is saved
first and the attachment is uploaded second. Measured on BCA:

| Time | Event |
|---|---|
| 16:45:28 | record created |
| 16:45:31 | DocIntel called → `No attachments found` |
| 16:45:38 | attachment actually landed |

DocIntel ran 7 seconds before the file existed. The table had zero
attachments and zero successful runs in its entire history — this path
had never completed end to end. The attachment row is the event that
actually means "there is now a document to extract".

A consequence: the `financial_report_extracted=false` guard could no
longer live in the trigger condition, because `sys_attachment` has no
view of the registration record's fields. It now lives in the submit
script. Without it, a second upload re-extracts and overwrites.

### Why polling instead of the callback

Live testing showed the DocIntel GenAI `callback` mechanism is unreliable
on this instance/API version — it fired once, prematurely (while the task
was still `IN_PROGRESS`, with an empty result), and never fired again once
the task actually completed. Polling from the flow avoids depending on it.

The loop uses `doTheFollowing` + `until`, the documented retry/polling
primitive. An earlier `forEach` over a literal array does not work:
`forEach` requires an array-typed data pill, a JS literal never
serializes into the mandatory `Items` field, and the flow then installs
as draft and silently never runs.

The poll action treats any non-terminal DocIntel status as "still
working" rather than only `IN_PROGRESS`, exits immediately on an empty
`taskId` (which is what submit leaves behind when it skips), and gives up
after `MAX_POLL_SECONDS` (120s) since `doTheFollowing` has no iteration
cap of its own.

### DocIntel schema quirks

`type: 'date'` and `type: 'integer'` in the `extractFields` schema both
make the LLM response fail to parse on this API version. Use
`type: 'string'` with a format hint in the description for dates, and
`type: 'number'` for figures.

## Instance prerequisites

Two things this repo cannot express, both required for the flow to work:

### 1. Scope prefix

The app scope must match the target instance's vendor prefix
(`glide.appcreator.company.code`). A third-party app zip whose prefix does
not match is rejected with a generic, non-diagnostic error:

```
[now-sdk] ERROR: Unable to install third party application 'x_bca_findoc'
```

Both instances tested carry vendor code `snc`, hence the rename from
`x_bca_findoc` to `x_snc_findoc`. Verified with empty-scaffold control
installs: `x_scaf_probe` failed, `x_snc_probe` succeeded, same SDK,
network and credentials.

Note that `x_bca_ext` and `x_bca_reg` exist on BCA despite the `snc`
vendor code — those were created on-instance rather than installed from a
zip, so they bypass this check.

### 2. `update_access` on the target table ⚠️

`x_bca_reg_contractor_reg` belongs to scope `x_bca_reg` and shipped with:

```
read_access   = 1
update_access = 0   ← blocks cross-scope writes
```

The flow runs in `x_snc_findoc`, so its write-back was refused. This is
currently fixed by setting `update_access = true` directly on the BCA
instance — **that change is not captured in this repo, and reinstalling
`x_bca_reg` will silently undo it.**

This failure mode is very hard to diagnose, so it is worth knowing the
signature:

- `GlideRecord.update()` returns `null` — no exception, no error
- the action's own `gs.error` goes to `syslog_app_scope`, not `syslog`,
  so it looks like the script never executed at all
- `canWrite()` returns `true` from a background script, because those run
  in `global` scope, not in `x_snc_findoc`

A `sys_scope_privilege` record scoped to `x_snc_findoc` would be safer
than the current table-wide setting, which lets any scope write the table.

## Known limitations

- **Multiple attachments re-trigger the flow.** Uploading three files
  starts three executions; the second and third are stopped by the
  already-extracted guard, but they still run.
- **No document-type filtering.** Any attachment on the table is sent to
  DocIntel as if it were a financial report.
