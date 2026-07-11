# MexiGo Web

Supplemental marketing/informational website for the [MexiGo](https://github.com/mexigoapp/mexigo)
iOS app, evolving into a full platform with client/partner registration, a
communication portal, and business advertising opportunities.

See the planning doc in the main app repo for full scope: `mexigo/docs/WEBSITE_PROJECT.md`.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config in `src/app/globals.css`)
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. Edit
`src/app/page.tsx` — it hot-reloads.

## Project Structure

```
src/app/
  layout.tsx     ← root layout, fonts, metadata
  page.tsx        ← home page
  globals.css     ← Tailwind import + MexiGo brand tokens (@theme)
public/           ← static assets (logo, app screenshots, etc.)
```

## Brand Tokens

Colors and typography mirror the iOS app (`MexiGo/Core/UI/Styles/AppColors`):

| Token | Hex |
|---|---|
| `fire-brick` | `#B0302F` |
| `steel-blue` | `#3575A2` |
| `pumpkin` | `#CF6A00` |
| `princeton-orange` | `#EB8F2C` |
| `forest-green` | `#276124` |
| `mulberry` | `#B0367F` |

Font: Montserrat (loaded via `next/font/google` in `layout.tsx`).

Use as Tailwind utilities, e.g. `bg-fire-brick`, `text-steel-blue`.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # run production build locally
npm run lint     # eslint
```

## Deployment

Connect this repo to a Vercel project; every push to `main` deploys to
production, PRs get preview deployments.
