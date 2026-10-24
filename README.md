# TechySolutions — website

Next.js 15 (App Router, TypeScript) marketing site for TechySolutions: home, services, case studies, about and contact.
Design: Modernist system (Archivo, 0 radius, 2px rules) with the accent set to the logo blue `#1d64f2`.

## Run it

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 18.18+ (Node 20 LTS recommended).

## Structure

```
app/
  layout.tsx            Root layout, Archivo font, nav + footer, metadata
  globals.css           Design tokens, component classes, page layout (all styling lives here)
  page.tsx              Home
  services/page.tsx     Services overview (anchors: #erp-customisation, #erpnext-implementation, #nextjs-development, #support, #hire)
  case-studies/page.tsx Case studies (filterable grid)
  about/page.tsx        About + team
  contact/page.tsx      Contact / get a quote
  api/contact/route.ts  Form endpoint → creates an ERPNext Lead (optional)
  sitemap.ts, robots.ts, not-found.tsx
components/
  SiteNav.tsx           Sticky header, mobile menu
  SiteFooter.tsx
  HeroVisual.tsx        Illustrative ERP dashboard / portal in HTML+CSS
  ContactForm.tsx       Full + compact enquiry form
  CaseStudyGrid.tsx     Category filters + cards
  Photo.tsx             Grayscale image frame / placeholder
lib/content.ts          ALL copy and data — edit this first
public/logo-mark.png    Logo mark (also used as favicon via app/icon.png)
```

## Before launch — replace placeholders

Everything in `[brackets]` in `lib/content.ts` and the about/case-study pages is a placeholder:
stats (`[00]+` implementations, years in business), client logos, testimonials, case studies, team names/roles,
phone and address.

Images: drop files into `public/images/` and pass `src` to `<Photo />` (or add `image` to a case study in `lib/content.ts`).
Photos render in black and white by design.

## Contact form → ERPNext

Set in `.env.local` (or your host's env):

```
FRAPPE_URL=https://erp.yourdomain.com
FRAPPE_API_KEY=...
FRAPPE_API_SECRET=...
```

Each enquiry creates a **Lead** (name, email, company, phone) and attaches the needs / timeline / message as a
**Comment** on it. Use an integration user that can create Leads and Comments. Without these variables the
route just logs the enquiry and returns success — handy for local dev.

## Deploy

Works on Vercel out of the box, or self-host with `npm run build && npm start` behind Nginx (port 3000).
Set `NEXT_PUBLIC_SITE_URL` so metadata and the sitemap use the right domain.
