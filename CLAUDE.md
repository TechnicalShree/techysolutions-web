# TechySolutions web

Marketing site for an ERPNext / Frappe / Next.js consultancy.

## Stack
- Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, lucide-react icons.
- Commands: `npm run dev`, `npm run build`, `npm run typecheck`. No linter configured (`next lint` was removed in Next 16).
- Run `npm run typecheck && npm run build` after changes.

## Structure (atomic design)
```
app/                    routes only
components/atoms/       smallest pieces (Photo, Tag)
components/molecules/   small groups of atoms (Metrics, PageHead, ServiceVisual)
components/organisms/   page sections and complex UI (Hero, SiteNav, ContactForm, ...)
components/templates/   one per page, composes organisms (HomeTemplate, AboutTemplate, ...)
lib/content.ts          all copy and data; components read from here
```
- `page.tsx` contains only `metadata` (if any) and renders its single template, e.g. `return <HomeTemplate />;`. No markup in pages.
- New page → add `components/templates/XTemplate.tsx` + thin `app/x/page.tsx`.
- New section → organism. Put a component in the lowest tier that fits; reuse existing ones before creating new ones.
- Import with the `@/` alias, e.g. `@/components/organisms/Hero`. No barrel `index.ts` files.
- Text/data goes in `lib/content.ts`, not hardcoded in components.

## Styling (Tailwind v4)
- Config lives in `app/globals.css` (`@theme`); there is no `tailwind.config.js`. PostCSS via `postcss.config.mjs`.
- Use utility classes inline. Don't add new page-specific CSS to `globals.css`.
- Custom breakpoints (mobile-first, defaults removed): `sm` 560px, `md` 860px, `lg` 960px, `xl` 1024px. `md:` is NOT 768px.
- Colours: `paper` (background), `surface`, `ink` (text), `divider`, `accent` + `accent-100..900`, `neutral-*`. Use opacity modifiers for muted text: `text-ink/70`, `text-ink/78`, `text-ink/80`.
- Type scale tokens: `text-display`, `text-section`, `text-block`, `text-lead`.
- Shared classes in `@layer components`: `btn` + `btn-primary | btn-secondary | btn-ghost | btn-lg`, `input`, `tag` + `tag-accent | tag-neutral | tag-outline`, `seg`/`seg-opt`, `wrap` (page container), `section` (vertical padding), `kicker`, `caps`.
- Horizontal page gutter: `px-(--edge)`.
- Design is flat/modernist: rounded corners (pill buttons/tags, `rounded-xl` inputs, `rounded-2xl` cards; full-bleed bands stay square), 2px divider rules, Archivo font (weight 800 for headings).
- Don't put two font-size utilities on one element (e.g. `text-display` plus `text-[...]`); write the full size/leading/tracking instead.

## Conventions
- Server components by default; add `"use client"` only when state or effects are needed (SiteNav, ContactForm, CaseStudyGrid).
- Contact form posts to `app/api/contact/route.ts`.
- Keep accessibility: aria labels, `aria-current` on nav, focus-visible outlines, skip link in `layout.tsx`.
