# AGENTS.md

## Build & Test

```bash
pnpm install
pnpm build           # webpack build + tsc declarations
pnpm test            # jest
pnpm typecheck       # tsc --noEmit
pnpm dev             # tsx watch src/dev.ts
```

## Tech Stack

- **Build**: webpack + babel-loader
- **Test**: jest + babel-jest
- **Format**: biome
- **Package manager**: pnpm (monorepo)

## Rules

- Prefer webpack for build, jest for test. Do not introduce vite or vitest.
- Every package must have a README with install, API, and examples.
- Pure logic lives in `@nested-grid/core` — zero dependencies, framework-agnostic.
- Source code uses no comments unless explaining a non-obvious WHY. Do not delete existing useful comments — reference them.
- Do not introduce unnecessary abstractions. Do not touch unrelated code.
- When a debugging obstacle requires an unusual workaround, stop and ask. Do not silently commit to a hack.
- After changes, run `pnpm test` and `pnpm typecheck` to confirm nothing is broken.
- Use `pnpm build` to verify all packages compile. Use `pnpm typecheck` to run `tsc --noEmit` on all packages.
- No meaningless abbreviations in identifiers (e.g. `p` for `props`, `s` for `style`). Names must be readable on their own.
- `...rest` must be spread last on the target element so the user can override any internal defaults.
- Do not destructure and pass through a prop unchanged — let `...rest` carry it. Only destructure what is actually used, transformed, or intercepted.
- Do not extract single-use helper functions. If a piece of logic is not reused, write it inline where it belongs.
- When accessing a chain where a value could be `undefined` (e.g. `data?.xxx` when `data` is optional), use optional chaining (`data?.xxx`). Do not use `as` type assertions to bypass TypeScript's strict checks.
