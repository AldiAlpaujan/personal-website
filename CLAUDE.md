# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Turbopack, http://localhost:3000)
- `npm run build` — production build (Turbopack)
- `npm run start` — run production build
- `npm run lint` — ESLint (flat config, extends `next/core-web-vitals` + `next/typescript`)

There is no test suite/framework configured in this repo (no Jest/Vitest/Playwright, no CI workflows).

## Architecture

Next.js 15 App Router + React 19 + TypeScript (strict) + Tailwind CSS v4 + shadcn/ui, with the React Compiler enabled (`next.config.ts`).

**Route pages are thin wrappers.** Every `src/app/<route>/page.tsx` only sets `metadata` and re-exports a default component from `src/modules/<Name>/index.tsx`:
```tsx
import { Metadata } from 'next';
import About from '@/modules/About';

export const metadata: Metadata = { title: 'About | Personal Website', ... };
export default About;
```
The actual page UI/logic always lives in `src/modules/<Name>/index.tsx` (plus that module's own `components/` subfolder), never in `src/app/`. Routes: `/`, `/about`, `/blog`, `/contact`, `/projects`, `/chatroom` (chatroom and possibly blog are placeholder/"not available yet" pages via the `Empty` component).

**Directory roles:**
- `src/app/` — route segments only (page.tsx wrappers + `layout.tsx` + the single API route `api/send-message/route.ts`)
- `src/modules/` — one folder per route, contains the real page implementation
- `src/components/` — shared cross-page components (cards, PageHeader, AppLayout shell, Sidebar, ThemeToggle, etc.)
- `src/lib/shadcn/` — shadcn/ui library code (`ui/*.tsx`, `utils.ts` with the `cn()` helper, `formatter.ts`) **and** `variable.ts` (see Content below — not shadcn-related despite the folder)
- `src/stores/` — React Context providers only (`SidebarContext`, `ThemeContext` wrapping `next-themes`, default theme `dark`); both are composed in `src/components/layouts/AppLayout.tsx`. No Redux/Zustand — Context is the only state management used.
- `src/hooks/`, `src/types/` — shared hooks and shared TS interfaces (`career.ts`, `education.ts`, `project.ts`, `tech-type.ts`)

**API/backend**: one route, `src/app/api/send-message/route.ts` — POST handler for the contact form, sends email via Resend (`RESEND_API_KEY` env var, no `.env.example` in repo so this must be set manually in `.env.local`).

## Content data

There is no CMS, MDX, or JSON content layer. All site content — projects, career history, education, tech icon list — is hardcoded as typed TS arrays in **`src/lib/shadcn/variable.ts`**, typed against `src/types/*`. To add/edit a project, career entry, etc., edit that file directly and drop any accompanying image into `public/projects/`, `public/careers/`, or `public/tech-icons/` as appropriate.

## Conventions

- Path alias: only `@/*` → `./src/*` (defined in `tsconfig.json`). shadcn's `components.json` aliases (`@/components`, `@/lib/shadcn/ui`, `@/lib/shadcn/utils`, `@/lib`, `@/hooks`) all resolve through that same single alias — there is no separate `@lib`/`@docs` alias despite import-sort config referencing paths like that.
- Prettier enforces import order via `@ianvs/prettier-plugin-sort-imports` (see `.prettierrc.mjs`): dayjs → react → next → node builtins → third-party → `@/lib/shadcn/ui/*` → `@/lib/shadcn/utils/*` → `@/lib/shadcn/hooks/*` → `@/*` → relative → CSS. Format on save is configured in `.vscode/settings.json`.
- ESLint has `react-hooks/exhaustive-deps` and `@typescript-eslint/no-explicit-any` turned off — don't assume either is enforced.
