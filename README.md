# BCA Financial Report Extraction — Flow Designer (WFA) version

Fluent SDK source for the "extract financial report fields from an attached
document via DocIntel GenAI" automation on `x_bca_reg_contractor_reg`
(app scope `x_bca_findoc`), implemented as a Flow Designer / Workflow
Automation flow instead of a Business Rule.

## What's here

- `src/fluent/flows/extract-financial-report-flow.now.ts` — trigger on
  record create, submits the extraction, then polls in a bounded retry
  loop (`forEach` over 6 attempts, 15s apart) until the DocIntel task
  completes.
- `src/fluent/actions/submit-financial-extraction.now.ts` +
  `src/server/actions/submit-financial-extraction.js` — Custom Action
  wrapping an `actionStep.script` that calls
  `sn_docintel_gen_ai.DocIntelGenAIAPI().extractFields(...)`.
- `src/fluent/actions/poll-and-apply-financial-extraction.now.ts` +
  `src/server/actions/poll-and-apply-financial-extraction.js` — Custom
  Action that calls `getFieldsResult(taskId)` and, once `COMPLETE`,
  parses the JSON result and writes the `fin_*` fields back onto the
  record.

This design was chosen after live testing showed the DocIntel GenAI
`callback` mechanism is unreliable on this instance/API version — it
fired once, prematurely (while the task was still `IN_PROGRESS`, with
an empty result), and never fired again once the task actually
completed. Polling from the flow avoids depending on that callback.

Two DocIntel API schema quirks were also found and worked around here
(see the script files): `type: 'date'` and `type: 'integer'` in the
`extractFields` schema both make the LLM response fail to parse on this
API version; `type: 'string'` (with a format hint) and `type: 'number'`
work correctly.

## Known issue: this package does not currently install

`now-sdk install` fails for this package with a generic, non-diagnostic
error:

```
[now-sdk] ERROR: Unable to install third party application 'x_bca_findoc'
```

Investigation so far has ruled out:

- The specific Flow/Custom Action content (a trigger-only flow with a
  single built-in `log` action, no custom actions at all, fails
  identically).
- The `x_bca_findoc` scope being corrupted (a brand new scope, `x_bca_finex2`,
  with equivalent Business-Rule-based content fails the same way).
- The target instance (`bcaaifdemo` / BCA) being the problem (installing
  the same package against a second, unrelated instance fails the same
  way).
- The app having any content at all (a completely empty scaffold app,
  fresh scope, fails the same way too).

That combination of results points at something in the local dev
environment or network path (e.g. a proxy/VPN/TLS-inspection change)
rather than anything ServiceNow- or Fluent-SDK-content-specific — but
this has not yet been confirmed or fixed. A sibling project
(`bca-findoc-extraction`, Business Rule + Scheduled Script version, same
underlying extraction logic, no Flow content) hit the exact same install
failure once the environment issue appeared, despite installing cleanly
multiple times earlier in the same session.

## Status

Not currently installed anywhere. This repo is a snapshot of the working
Flow-based implementation for reference / later retry once the install
blocker is resolved.
