# Defect report: generated table types widen non-numeric columns to `string | number`

**Component:** `@servicenow/sdk` / `@servicenow/sdk-core` (generated table type definitions)
**Version:** `@servicenow/sdk` 4.11.2, `now-sdk` CLI 4.9.0
**Severity:** blocks otherwise-valid Fluent source; no in-language workaround
**Found while:** authoring a Flow triggered on `sys_attachment` creation

## Summary

The generated table type definitions declare a column's value type as
`string | number` whenever the column carries an explicit `columnType`
annotation, regardless of whether that `columnType` is numeric. This
includes `char`, `GUID`, `script_plain`, `color`, `url`, `password`,
`css`, `html`, and `ip_addr` — none of which can hold a number.

Because `StringColumn` action inputs accept only `string`, passing such a
column through `wfa.dataPill` fails to compile, and Fluent files disallow
the type-assertion syntax that would normally resolve it.

## Reproduction

Any Flow that triggers on `sys_attachment` and forwards the host record id
to a custom Action:

```typescript
// src/fluent/actions/my-action.now.ts
export const myAction = Action(
    {
        $id: Now.ID['my-action'],
        name: 'My Action',
        inputs: {
            recordId: StringColumn({ label: 'Host record sys_id', mandatory: true }),
        },
        outputs: { /* ... */ },
    },
    (params) => { /* ... */ }
)
```

```typescript
// src/fluent/flows/my-flow.now.ts
wfa.trigger(
    trigger.record.created,
    { $id: Now.ID['my-trigger'] },
    { table: 'sys_attachment', condition: 'table_name=my_table' }
),
(params) => {
    wfa.action(
        myAction,
        { $id: Now.ID['my-step'] },
        { recordId: wfa.dataPill(params.trigger.current.table_sys_id, 'string') }
    )
}
```

`now-sdk build` fails:

```
error TS2769: No overload matches this call.
  Overload 1 of 2 ... Type 'number' is not assignable to type 'string'.
  Overload 2 of 2 ... Argument of type 'Action<FlowIOType<{ recordId:
  Typed<string, ...> }>, ...>' is not assignable to parameter of type 'string'.
```

## Root cause

From `node_modules/@servicenow/sdk-core/dist/fluent/tables/sys_attachment.now.d.ts`:

```typescript
readonly sys_id: import("../../db").Typed<string, {
    readonly label: [{ readonly label: "Sys ID"; /* ... */ }];
}>;

readonly table_sys_id: import("../../db").Typed<string | number, {
    readonly columnType: "char";      // <-- character column
    readonly label: "Table sys ID";
    readonly maxLength: 32;           // <-- 32-char sys_id
}>;
```

Both fields hold a 32-character sys_id. `sys_id` is typed `string`;
`table_sys_id` is typed `string | number`. The only difference between
them is that `table_sys_id` carries an explicit `columnType` annotation.

The declaration is internally inconsistent: a column declared
`columnType: "char"` with `maxLength: 32` cannot hold a `number`.

## Scope

This is systematic, not a one-off. A scanner is included at
[`docs/scan-column-types.mjs`](./scan-column-types.mjs) — run
`node docs/scan-column-types.mjs` after `npm install`.

Excluding genuinely numeric `columnType`s (`longint`, `int`, `decimal`,
`float`, `percent_complete`, `order_index`, `repeat_count`,
`month_of_year`), it reports:

```
Non-numeric columns typed `string | number`: 267

By columnType (top entries):
    74  (none)
    33  script_plain
    21  currency
    20  user_image
    14  GUID
     9  translated_html
     8  email_script
     ...
     3  url
     1  css
     1  html
     1  char
     1  password
```

The 14 `GUID` columns are the clearest case — each is a table's own
`sys_id`, which is always a 32-character hexadecimal string:

```
email_access_restriction.sys_id     sp_header_footer.sys_id
m2m_sp_theme_css_include.sys_id     sp_js_include.sys_id
m2m_sp_theme_js_include.sys_id      sp_theme.sys_id
sc_category.sys_id                  sys_email_layout.sys_id
sp_css_include.sys_id               sys_script_email.sys_id
sys_ui_formatter.sys_id             sys_ui_list_control.sys_id
sys_ui_related_list.sys_id          sys_ui_related_list_entry.sys_id
```

Note these coexist with tables whose `sys_id` is correctly typed
`string` — the same logical column gets two different types depending on
whether the generator emitted a `columnType` annotation.

## Why there is no workaround

Each of the four natural fixes is rejected:

| Attempt | Result |
|---|---|
| `wfa.dataPill(String(x.table_sys_id), 'string')` | `TS213: wfa.dataPill: first argument must be a property access expression` |
| `wfa.dataPill(x.table_sys_id as unknown as string, 'string')` | `TS159: Node kind "UnknownKeyword" is not allowed in Fluent files` |
| `StringColumn<string \| number>({ ... })` | The generic parameter is the choice type (`SuggestionOrChoiceType`), not the value type |
| Widen the Action input to another column type | No `*Column` helper accepts `string \| number` |

`wfa.dataPill` requires a bare property access, which rules out wrapping
the value in a call; Fluent files reject `as` assertions, which rules out
casting it. Together these close off every in-language escape hatch.

The only remaining option is an architectural change. In this project the
Action input was redefined to take the **attachment** sys_id (a plain
`string`), and the host record is now resolved server-side:

```javascript
// src/server/actions/submit-financial-extraction.js
var att = new GlideRecord('sys_attachment');
if (!att.get(inputs.attachmentId)) { /* ... */ }
var recordId = att.getValue('table_sys_id');
outputs.recordId = recordId;
```

That costs an extra GlideRecord read on every execution and moves a value
the flow engine already had into script, purely to route around the type
system.

## Expected behaviour

`columnType` should map to the actual value type rather than
unconditionally appending `| number`:

- `char`, `GUID`, `script_plain`, `color`, `url`, `password`, `css`,
  `html`, `ip_addr`, `xml`, `wiki_text`, … → `string`
- `longint`, `int`, `decimal`, `float`, … → `number`

The `currency` and `price` entries (27 combined) are worth a second look:
those are stored as strings but read as amounts, so a union may be
deliberate there. The character and GUID columns are not defensible either
way.

## Secondary suggestion

Independent of the type mapping: consider whether Fluent files should
permit some controlled escape hatch for cases where a generated type is
wrong. Today `as`, `as unknown as`, and wrapping in a call are all
rejected, so a single incorrect generated type leaves the author with no
recourse inside the language.

## Environment

```
@servicenow/sdk       4.11.2
@servicenow/glide     27.0.5
now-sdk CLI           4.9.0
node                  (see .nvmrc / local install)
target instance       Zurich-era demo instance
```
