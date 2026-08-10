# Peekaboo Website

The public marketing site for Peekaboo — the nursery operating system.
Built with [Astro](https://astro.build) and [Sanity](https://sanity.io),
brand-matched to the live [Peekaboo portal](https://peek.peek-a-boo.app) and
mobile app.

Intended home: `github.com/<org>/peekaboo-website`.

## Tech stack

- **Astro** (static-first, server output only for the contact API route)
- **Sanity** — headless CMS for all editorial content (see `studio/`)
- **Tailwind CSS v4** — design tokens in `src/styles/global.css`
- **TypeScript**, **Zod** (contact form validation)
- Deploys to **Vercel** (`@astrojs/vercel` adapter)

## Project structure

```
├── src/
│   ├── pages/            # routes (home, product, pricing, about, blog, contact, legal, 404, api/contact)
│   ├── layouts/           # BaseLayout (head/SEO), PageLayout (header+footer shell)
│   ├── components/
│   │   ├── ui/             # brand primitives — Button, Badge, Card, Logo, icons, frames
│   │   ├── nav/             # Header, Footer
│   │   ├── sections/         # Hero, FeatureGrid, ProductShowcase, Testimonials, Faq, CtaBanner, ...
│   │   └── blog/              # PostCard
│   ├── lib/
│   │   ├── sanity/          # client, image URL builder, GROQ queries
│   │   ├── content/         # shared types + fallback placeholder content
│   │   ├── validations/     # Zod schemas
│   │   └── seo.ts            # per-page SEO resolution
│   └── styles/global.css     # design tokens (colors, type, radius) — pulled from the live portal
├── studio/                # standalone Sanity Studio (schemas, desk structure)
└── public/                 # favicon/logo, robots.txt, default OG image
```

## Local setup

```sh
npm install
cp .env.example .env
npm run dev
```

The site runs and looks fully populated **without any Sanity project
configured** — every query falls back to realistic placeholder content in
`src/lib/content/fallback.ts` when `SANITY_PROJECT_ID` is unset or a query
returns nothing. This means you can develop the site's design/layout before
content is ready, and it degrades gracefully if a Sanity query ever fails in
production instead of showing a broken page.

### Environment variables

See `.env.example`. None are required to run the site locally.

| Variable | Purpose |
| --- | --- |
| `SANITY_PROJECT_ID` / `SANITY_DATASET` / `SANITY_API_VERSION` | Connect to a real Sanity project. Leave unset to use placeholder content. |
| `RESEND_API_KEY` / `CONTACT_TO_EMAIL` | Enable email delivery for the `/contact` form. Without these, submissions still succeed and are logged to the server console — useful for local dev. |

## Sanity Studio

The Studio lives in `studio/` as its own small app (kept separate from the
Astro app's dependencies).

```sh
cd studio
npm install
cp .env.example .env   # fill in SANITY_STUDIO_PROJECT_ID after creating a project
npm run dev             # Studio at http://localhost:3333
```

To create a new Sanity project: `npx sanity@latest init` (from anywhere with
the Sanity CLI), or via [sanity.io/manage](https://www.sanity.io/manage). Use
a **new, dedicated project** for this website rather than reusing the one
behind the portal app, to keep the two decoupled.

Content model: `siteSettings` and `homePage` are singletons (edit them
directly from the Studio's pinned top links); `page`, `feature`,
`testimonial`, `faq`, and `post` are regular documents. Page-level content is
composed from a small set of reusable "section" types (feature grid, product
showcase, testimonials, FAQ, CTA banner, rich text) — see
`studio/schemaTypes/`.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Type-check (`astro check`) then build to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro check` | Type-check only |

## Deployment

Configured for Vercel via `@astrojs/vercel`. Set the environment variables
above in the Vercel project settings, then deploy as normal — most pages are
statically prerendered; only `/api/contact` runs on-demand.

## Brand source of truth

Design tokens in `src/styles/global.css` (colors, font pairing, radius scale)
were taken directly from the live portal's own `src/index.css`, not
reinterpreted, so this site and the product it's advertising visually agree.
If exact logo/OG assets are ever refreshed, replace `public/peekaboo-mark.png`
and `public/og-default.svg` — nothing else references brand assets directly.
