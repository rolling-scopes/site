# AGENTS.md

## Cursor Cloud specific instructions

### Project overview
RS School website (`rs-site`) — a statically-exported Next.js 15 site (App Router, Turbopack dev) for the RS School community education platform. Single-package repo using Feature-Sliced Design architecture.

### Key commands
See `package.json` `scripts` for the full list. The most commonly used:

| Task | Command |
|---|---|
| Dev server | `npm run dev` (Turbopack, port 3000) |
| Lint (ESLint) | `npm run lint` |
| Lint (Stylelint) | `npm run stylelint` |
| Unit tests | `npm run test` (Vitest) |
| Build | `npm run build` (runs `tsc` then `next build`) |

### Environment variables
Copy `.env.example` to `.env` before running. The default values in `.env.example` point to the public RS School CDN and work out of the box for development. No secrets are required for dev/test workflows.

### Git hooks caveat
Husky hooks enforce a strict branch naming convention (`feat|fix|refactor|docs|chore|test/<number>-<description>`) and run `npm run test` on pre-push plus `npm run build` on prepare-commit-msg. Cloud agent branches (e.g. `cursor/*`) will not match the pattern. Disable hooks before committing:
```
git config core.hooksPath /dev/null
```

### Testing notes
- **Vitest** unit tests cover 51 test files / 258 tests; no external services needed.
- **Playwright** E2E tests (`npm run test:playwright`) require Chromium; install with `npx playwright install chromium` if needed.
- **Percy** visual tests (`npm run test:visual`) require a `PERCY_TOKEN` and are optional.
