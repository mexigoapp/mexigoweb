# MexiGo Website — Project Plan

Supplemental marketing/informational website for the MexiGo iOS app, evolving into a
full platform with client/partner registration, a communication portal, and
advertising/business opportunities.

**Status**: Phase 1 in progress — site deployed and reachable, content still to be built out.
**Repo**: [mexigoapp/mexigoweb](https://github.com/mexigoapp/mexigoweb) (public)
**Tech stack**: Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.
**Domain**: `mexigoapp.com`, registered on Porkbun, nameservers delegated to Vercel
(`ns1.vercel-dns.com` / `ns2.vercel-dns.com`). `www.mexigoapp.com` is live over HTTPS;
the bare apex (`mexigoapp.com`) still needs to be added as a domain in the Vercel
project (currently returns `DEPLOYMENT_NOT_FOUND`) and a redirect direction chosen
(apex → www, or www → apex).

---

## Vision & Goals

| Phase | Goal | Trigger to start |
|---|---|---|
| **Phase 1 — Informational** | Marketing site: explain what MexiGo is, who it's for, drive App Store downloads | Now |
| **Phase 2 — Accounts & Communication** | Client + partner registration/login, a communication portal (messaging/support) | After Phase 1 ships and app has active users/partners to onboard |
| **Phase 3 — Business & Advertising** | Self-serve or sales-assisted flow for local businesses to advertise inside the app | After Phase 2 portal proves out registration/auth flow |

Each phase should ship independently — Phase 1 must stand alone as a complete,
useful site even if Phases 2–3 never start.

---

## Tech Stack Options

Decision deferred. Comparison to revisit before Phase 1 kickoff:

| Option | Pros | Cons | Best if |
|---|---|---|---|
| **Next.js / Astro + Vercel** | Full control, git-versioned, easy path to custom auth/portal/DB later, free/cheap hosting tier, great SEO | Requires writing code for every page/form | You (or Claude Code) will build Phases 2–3 in-house and want one continuously-evolving codebase |
| **Webflow / Squarespace** | Fastest to launch, visual editing, no hosting/CI to manage | Hits a wall once auth/portal/DB features are needed — likely rebuild for Phase 2 | Phase 1 only matters right now and Phase 2/3 timing is uncertain/far off |
| **WordPress** | Mature plugin ecosystem (forms, membership, SEO), familiar CMS | Ongoing maintenance (hosting, plugin/security updates), heavier than needed for a simple info site | You want a CMS a non-developer can update without touching code |

**Recommendation**: Next.js (or Astro) on Vercel is the best fit given Phases 2–3
require auth, forms, and a portal — building on a static-first framework from day
one avoids a rebuild. Revisit this table once ready to commit.

**Decision needed by**: before Phase 1 "Build" tasks begin.

---

## Requirements

### Phase 1 — Informational Site

**Functional**
- Home page: what MexiGo is, who it's for (travelers to [region — confirm: Puerto
  Vallarta / broader Mexico destinations]), core value proposition
- Feature overview page(s): Destinations, Activities, Attractions, Events, Golf,
  Restaurants, Weddings, Experiences (mirror the app's feature modules)
- App Store download CTA (badge/button) — link to live App Store listing once
  published
- About / Our Story page
- Contact page (email or contact form)
- Privacy Policy page (required for App Store listing link-out)
- Terms of Service page
- Basic SEO: meta tags, Open Graph images, sitemap.xml, robots.txt
- Analytics (e.g. Plausible, GA4, or Vercel Analytics)
- Mobile-responsive (majority of traffic will be phone browsers tapping through
  from social/App Store)

**Non-functional**
- Fast load (Lighthouse 90+), since it's the first impression before App Store
- Domain: confirm `mexigo.app` or similar is owned/available
- HTTPS via hosting provider (Vercel/Netlify handle this automatically)
- Reuse MexiGo brand: Fire Brick `#B0302F` accent, Montserrat typography, same
  color palette as the app (see main `CLAUDE.md` Theme & Branding section) so the
  site feels like the same product

**Out of scope for Phase 1**: accounts, login, forms that write to a database
(contact form can use a simple mail-forwarding service like Formspree/Resend).

### Phase 2 — Accounts & Communication Portal

**Functional**
- Client registration/login (email + social sign-in?)
- Partner registration/login — separate role from clients
- Communication portal: messaging or support-ticket style thread between
  clients/partners and MexiGo admin
- Account/profile management (basic settings, password reset)
- Admin view to see registered clients/partners and manage/respond to messages

**Non-functional**
- Auth provider decision: Firebase Auth (matches existing Firebase Storage usage
  in the iOS app — likely simplest to share backend) vs Auth0/Clerk/NextAuth
- Data storage: Firestore (reuse Firebase project) vs a separate DB
- Consider whether iOS app and website should share the same Firebase project so
  a "partner" or "client" record is usable from both

**Decision needed by**: before Phase 2 kickoff — recommend Firebase Auth +
Firestore given the app already uses Firebase, minimizing new infra.

### Phase 3 — Business & Advertising Opportunities

**Functional**
- Public-facing "Advertise with us" landing page: rates, placements, why
  advertise in MexiGo
- Business inquiry/application form (business info, category, contact)
- Optional: self-serve business dashboard (submit listing details, upload
  images, view basic performance stats) — vs. sales-assisted (form → manual
  follow-up) for v1
- Payment integration if self-serve (Stripe) — likely deferred beyond initial
  Phase 3 scope
- Admin review/approval workflow for new business listings feeding into the iOS
  app's data (Restaurants/Activities/Attractions/etc.)

**Non-functional**
- Decide how approved businesses flow into the app's data layer — likely need a
  bridge from website-submitted data → the app's `Services/Data` JSON/Firebase
  content, which may require its own small admin/CMS tool

**Decision needed by**: before Phase 3 — recommend starting with sales-assisted
(inquiry form only) rather than full self-serve dashboard, to validate demand
before building payment/dashboard infrastructure.

---

## Open Questions (need answers before/at each phase's kickoff)

1. Domain name — owned already, or need to register?
2. Target region(s) for the app — confirm copy should say "Puerto Vallarta" or
   broader "Mexico"
3. App Store listing status — live yet, or is the site launching pre-release?
4. Phase 2: share the app's existing Firebase project, or stand up a separate one?
5. Phase 3: self-serve business dashboard, or sales-assisted inquiries only for v1?
6. Who maintains the site content day-to-day — you, or does it need a
   non-developer-friendly CMS?

---

## Tasks & Checklist

### Phase 0 — Setup
- [x] Decide tech stack — Next.js (App Router) + TypeScript + Tailwind v4 on Vercel
- [x] Register/confirm domain name — `mexigoapp.com` registered via Porkbun
- [x] Create new repo — [mexigoapp/mexigoweb](https://github.com/mexigoapp/mexigoweb) (public)
- [x] Set up hosting + CI/CD — Vercel project linked, auto-deploy on push to `main`
- [x] Pull brand assets from MexiGo repo: color tokens + Montserrat wired into
      `src/app/globals.css` / `layout.tsx` (logo/app screenshots still to add)
- [ ] Set up analytics account

### Phase 1 — Informational Site
- [ ] Information architecture: finalize page list and nav structure
- [ ] Wireframe/design home page
- [ ] Wireframe/design feature overview page(s)
- [ ] Write copy: home, about, feature pages
- [ ] Draft Privacy Policy (required for App Store — coordinate with app's own
      privacy policy if one already exists)
- [ ] Draft Terms of Service
- [x] Build: home page (placeholder hero + feature pills + App Store CTA — real
      copy/design still pending)
- [ ] Build: feature pages
- [ ] Build: about page
- [ ] Build: contact page + form (Formspree/Resend or similar, no backend DB
      needed yet)
- [ ] Build: privacy policy + terms pages
- [ ] Add App Store download CTA/badge (placeholder link until app is live)
- [ ] SEO: meta tags, OG images, sitemap.xml, robots.txt
- [ ] Wire up analytics
- [ ] Responsive/cross-browser QA (iOS Safari, Chrome, Android Chrome)
- [ ] Lighthouse pass (performance, accessibility, SEO ≥ 90)
- [x] Deploy to Vercel, connect `mexigoapp.com` — DNS delegated to Vercel,
      `www.mexigoapp.com` live over HTTPS
- [ ] Add apex domain (`mexigoapp.com`) in Vercel project settings and set
      apex/www redirect direction (apex currently 404s — not yet added as a
      domain on the project)
- [ ] Post-launch: submit sitemap to Google Search Console

### Phase 2 — Accounts & Communication Portal
- [ ] Decide auth provider + data store (Firebase Auth/Firestore recommended)
- [ ] Design client registration/login flow
- [ ] Design partner registration/login flow
- [ ] Build auth: sign up, log in, log out, password reset
- [ ] Build client profile/account page
- [ ] Build partner profile/account page
- [ ] Design communication portal (messaging or ticket-style)
- [ ] Build communication portal — client/partner side
- [ ] Build communication portal — admin side
- [ ] Role-based access control (client vs partner vs admin)
- [ ] Email notifications for new messages
- [ ] QA: auth edge cases (password reset, duplicate accounts, session expiry)
- [ ] Security review of auth flow before launch
- [ ] Launch Phase 2

### Phase 3 — Business & Advertising Opportunities
- [ ] Decide self-serve vs sales-assisted v1 scope
- [ ] Write "Advertise with us" landing page copy (rates, placements, benefits)
- [ ] Build "Advertise with us" landing page
- [ ] Build business inquiry/application form
- [ ] Design admin review/approval workflow for inquiries
- [ ] (If self-serve) design business dashboard for listing submission
- [ ] (If self-serve) integrate Stripe for payment
- [ ] Design bridge from approved business data → app's content layer
      (`Services/Data` / Firebase)
- [ ] Build data bridge / lightweight admin CMS tool
- [ ] QA end-to-end: inquiry → approval → appears in app
- [ ] Launch Phase 3

---

## Notes on Brand Consistency

Reuse from the iOS app (see main `CLAUDE.md`):
- Colors: Fire Brick `#B0302F`, Steel Blue `#3575A2`, Pumpkin `#CF6A00`,
  Princeton Orange `#EB8F2C`, Forest Green `#276124`, Mulberry `#B0367F`
- Typography: Montserrat (Bold, SemiBold, Regular, Light)
- Accent: Fire Brick `#B0302F`
