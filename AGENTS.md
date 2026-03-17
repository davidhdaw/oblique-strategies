# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project snapshot
- React 18 app bootstrapped with Create React App.
- Purpose: a daily-writing app that combines Oblique Strategies prompts with a long-form writing workflow.
- Routing/auth/data are client-driven; Firebase handles auth + Firestore persistence.

## Core development commands
- Install deps: `npm install`
- Start dev server (CRA): `npm start`
- Production build: `npm run build`
- Unit/integration tests (Jest via react-scripts): `npm test`
- Run tests once in CI/non-watch mode: `CI=true npm test -- --watch=false`
- Run a single Jest test file: `npm test -- src/App/App.test.js`
- E2E runner (interactive): `npx cypress open`
- E2E headless: `npx cypress run`
- Single Cypress spec: `npx cypress run --spec cypress/e2e/writing.cy.js`
- Linting:
  - There is no dedicated `npm run lint` script.
  - ESLint config is in `package.json` (`react-app` + `react-app/jest`).
  - Run lint directly with: `npx eslint src --ext .js,.jsx`

## Architecture and code structure (big picture)
### Application shell and routing
- `src/index.js` wraps the app in `BrowserRouter`.
- `src/App/App.js` is the stateful shell and primary orchestrator:
  - Owns top-level state: `isAuth`, `logEntries`.
  - Defines route tree (`/`, `/writing`, `/about`, `/logs`, `/:id`) using React Router v5 (`Switch`, `Route`, `useHistory`).
  - Guards behavior in render branches (especially `/logs`) based on auth state and whether entries exist.

### Auth and user session model
- Firebase setup is centralized in `src/firebase-config.js` (Auth + Firestore exports).
- Login currently uses Google popup auth in `src/Login/login.js`.
- Session continuity is derived from `localStorage.userID`:
  - `App` bootstraps `isAuth` from localStorage on mount.
  - `signUserOut` clears localStorage and redirects to `/`.
- Several components (`Login`, `WritingArea`, `Logs`) redirect with `useHistory` when auth conditions are unmet.

### Writing flow and persistence
- `src/WritingArea/WritingArea.js` manages the authoring workflow:
  - Strategy rotation state (`currentStrat`, `usedStrats`) and countdown timer.
  - Submission gate based on word-count threshold (>750 words).
  - On submit, creates a log object (`id`, `writing`, `usedStrats`, timestamp, author metadata), then calls `addLog`.
- `addLog` lives in `App` and writes to Firestore (`entries` collection), then appends local state.
- On authenticated load, `App` queries Firestore for current user entries (`authorID == localStorage.userID`) and hydrates `logEntries`.
- `src/Logs/Logs.js` renders a reverse-chronological view of entries and links to entry details.
- `src/SingleEntry/SingleEntry.js` resolves entries by `id` from in-memory `logEntries`.

### Strategy source
- Strategies are currently local/static in `src/apiCalls.js` (`returnStrategy()` picks from an in-file array).
- The app no longer depends on a remote strategy API at runtime for prompt retrieval.

### UI module boundaries
- Feature folders under `src/` map closely to route/page responsibilities:
  - `Login/` auth entrypoint.
  - `WritingArea/` editor + card/timer + submit controls.
  - `Logs/` entry list.
  - `SingleEntry/` per-entry detail.
  - `StrategyCard/` prompt/timer presentation.
  - `About/` static informational page.

## Testing notes relevant to future changes
- Cypress is configured in `cypress.config.js` with `baseUrl: http://localhost:3000`.
- `cypress-firebase` is wired in support files (`cypress/support/e2e.js`, `commands.js`).
- Some Cypress specs and `src/App/App.test.js` appear to reflect older UI/data behavior (for example, email/password login fields, textarea assumptions, legacy strategy API intercepts). Treat tests as needing reconciliation when changing auth/editor behavior.

## Known repository guidance sources
- `README.md` exists and is the primary human-facing project description.
- No `WARP.md`, `CLAUDE.md`, `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md` were found at time of writing.
