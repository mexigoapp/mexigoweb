@AGENTS.md

# MexiGo Web — Claude Code Context

Companion website for the [MexiGo](https://github.com/mexigoapp/mexigo) iOS app.
Phase 1 (current): informational marketing site driving App Store downloads.
Later phases add client/partner registration, a communication portal, and
business advertising. Full plan: `mexigo/docs/WEBSITE_PROJECT.md` (main app repo).

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS v4 (CSS-first config, no
  `tailwind.config.ts` — theme tokens live in `src/app/globals.css` under
  `@theme inline`)
- Deployed on Vercel

## Structure

```
src/app/
  layout.tsx     ← root layout, Montserrat font, page metadata
  page.tsx        ← home page
  globals.css     ← Tailwind import + MexiGo brand color tokens
public/           ← static assets
```

## Brand

Reuse the iOS app's palette and type — do not introduce new colors/fonts
without checking `MexiGo/Core/UI/Styles/AppColors` in the main repo first.

- Colors (Tailwind utilities): `fire-brick` `#B0302F`, `steel-blue` `#3575A2`,
  `pumpkin` `#CF6A00`, `princeton-orange` `#EB8F2C`, `forest-green` `#276124`,
  `mulberry` `#B0367F`
- Font: Montserrat via `next/font/google`
- Accent: Fire Brick

## Conventions

- App Router only — no `pages/` directory
- Server Components by default; add `"use client"` only where interactivity
  requires it
- Keep marketing copy and feature lists in sync with the app's actual feature
  modules (Destinations, Activities, Attractions, Events, Golf, Restaurants,
  Weddings, Experiences)
