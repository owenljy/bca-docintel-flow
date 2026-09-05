#!/usr/bin/env node
// Scans the installed @servicenow/sdk-core generated table types for
// non-numeric columns that were given a `string | number` value type.
//
//   node docs/scan-column-types.mjs
//
// Requires `npm install` to have been run (reads from node_modules).

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const DIR = 'node_modules/@servicenow/sdk-core/dist/fluent/tables'

if (!existsSync(DIR)) {
    console.error(`Not found: ${DIR}\nRun \`npm install\` first.`)
    process.exit(1)
}

// columnTypes that legitimately hold a number.
const NUMERIC = new Set(['longint', 'int', 'integer', 'decimal', 'float', 'percent_complete', 'order_index', 'repeat_count', 'month_of_year'])

const COLUMN_RE = /readonly (\w+): import\("[^"]+"\)\.Typed<([^,]+), \{(.*?)\}>;/gs

const suspects = []
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.now.d.ts'))) {
    const src = readFileSync(join(DIR, file), 'utf8')
    for (const m of src.matchAll(COLUMN_RE)) {
        const [, field, type, body] = m
        if (type.trim() !== 'string | number') continue
        const columnType = body.match(/columnType: "([^"]+)"/)?.[1] ?? '(none)'
        if (NUMERIC.has(columnType)) continue
        suspects.push({ table: file.replace('.now.d.ts', ''), field, columnType })
    }
}

const byType = suspects.reduce((acc, s) => ((acc[s.columnType] = (acc[s.columnType] ?? 0) + 1), acc), {})

console.log(`Non-numeric columns typed \`string | number\`: ${suspects.length}\n`)
console.log('By columnType:')
for (const [t, n] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(4)}  ${t}`)
}

const guids = suspects.filter((s) => s.columnType === 'GUID')
console.log(`\nGUID (sys_id) columns — a sys_id is always a 32-char string: ${guids.length}`)
for (const g of guids) console.log(`  ${g.table}.${g.field}`)

const attachment = suspects.filter((s) => s.table === 'sys_attachment')
console.log(`\nsys_attachment (the table in the repro):`)
for (const a of attachment) console.log(`  ${a.field} — columnType=${a.columnType}`)
