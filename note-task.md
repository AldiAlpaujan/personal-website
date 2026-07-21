# Portfolio Revamp Tasks

- [ ] 1. Admin Web (Firebase Auth + Firestore CRUD for projects/careers/educations)
  - [x] 1.1 npm dependencies + `.env.example` (Firebase console project setup is still manual — see below)
  - [x] 1.2 `src/lib/firebase/` modules (client, admin, auth-server, repositories, schemas)
  - [x] 1.3 Type updates (`Project`/`Career`/`Education` split into Input/record, nullable `endDate`)
  - [x] 1.4 Consumer fix: `getDurationLabel` + `CareerCard` handle nullable `endDate` ("Present")
  - [x] 1.5 `middleware.ts` route protection (cookie-presence gate)
  - [x] 1.6 Admin API routes: `/api/admin/session` (login/logout) + CRUD for projects/careers/educations
  - [x] 1.7 One-time `scripts/seed-firestore.ts` migration script written (not yet run — needs a real Firestore project)
  - [x] 1.8 Routing restructure: `(site)` route group + `/admin` layout (verified all public routes still 200 OK)
  - [x] 1.9 New shadcn components: dialog, alert-dialog, table, label, select, checkbox, badge
  - [x] 1.10 Admin UI: login page, dashboard, `AdminShell`, CRUD pages + dialogs/forms for projects/careers/educations
  - [x] 1.11 Firebase project `personal-website-f8ccf` connected: Firestore + Email/Password Auth enabled, `.env.local` filled (client config + Admin SDK service account + ADMIN_UID), `npm run seed` run (14 projects / 3 careers / 2 educations). Auth + Firestore connection verified via Admin SDK. Firebase CLI installed as devDep + `firebase.json`/`.firebaserc`/`firestore.rules` (deny-all) scaffolded.
    - Remaining manual check: log in at `/admin/login` and do a CRUD walkthrough. Firestore still in **test mode** (open rules, expires ~30 days) — deploy the deny-all rules with `npx firebase login && npx firebase deploy --only firestore:rules` before going to prod.
- [ ] 2. UI fixes (scope TBD — gather specifics from user when starting this task)
- [x] 3. Public site: SSR data fetching from Firestore
  - [x] 3.1 Grouped public modules under `src/modules/Site/` (mirrors `Admin/`); app `(site)` pages import from `@/modules/Site/*`
  - [x] 3.2 Module indexes are now async server components fetching via repositories (`getVisibleProjects`/`getCareers`/`getEducations`), passing data down as props (Home→LatestProject, Projects→ProjectList, About→TabsView→Career/Education)
  - [x] 3.3 `/`, `/about`, `/projects` marked `dynamic = 'force-dynamic'` for fresh reads; `techIcons` kept static in `variable.ts`
  - Note: `projects`/`careers`/`educations` arrays kept in `variable.ts` (still used by `scripts/seed-firestore.ts`); no longer imported by site components. Retire fully only if the seed script is retired too.
- [ ] 4. UI polish

Code for Task 1 is complete (typecheck + lint clean, public routes smoke-tested). What's left is manual: set up the Firebase project in the console (Firestore native mode, Authentication email/password provider, one admin user, a web app for client config, a service account key for the Admin SDK), fill `.env.local`, run `npm run seed` once, then log in at `/admin/login` and try creating/editing/deleting a project, career, and education.

Plan detail for Task 1 lives at: `~/.claude/plans/oke-so-jadi-ceritanya-lively-hollerith.md`
