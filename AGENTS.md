# AGENTS.md

## Project Snapshot

`serioussamshatterverse.pro` is a generated game guide site for Serious Sam: Shatterverse, the 2026 co-op roguelite FPS by Behaviour Interactive Inc. (Devolver Digital). After launch, treat the generated project as a live content property, not as the central workflow repo or a template.

The site uses Next.js App Router, TypeScript, data-driven content in `src/data`, generated metadata, JSON-LD, sitemap, robots, and Next.js static export deployed through Cloudflare Workers Static Assets. Production guide sites must not route ordinary page requests through an OpenNext or other Worker JS runtime.

## Mandatory Agent Workflow

For every growth-relevant edit:

1. Read this file before making changes.
2. Check `CONTENT_INDEX.md` to identify affected pages.
3. Inspect only the files relevant to the requested change.
4. Make the smallest change that solves the task.
5. Run narrow verification proportional to the change.
6. Update `GROWTH_LOG.md`.
7. Update `CONTENT_INDEX.md` if any URL, route, page type, keyword, CTA, title, H1, canonical, schema, or internal-link role changes.

A growth-relevant task is not complete until `GROWTH_LOG.md` is updated.

## Site Structure Rules

- Content source of truth is `src/data/pages/launch-pages.ts` (16 launch pages), `src/data/pages/site-pages.ts` (4 trust pages), `src/data/faq.ts`, `src/data/site.ts`, and `src/data/navigation.ts`.
- Page shell selection is stored in each page's `presentation.shell`; shell components live in `src/components/pages/`, and shared guide modules are defined in `src/types/modules.ts` and rendered by `src/components/content/ModuleRenderer.tsx`.
- Make visual-theme changes in `src/data/theme.ts`, not in route-specific CSS.
- Keep visual assets local under `public/` and register every used asset with complete traceability in `src/data/assets.ts`.
- Do not use official game logos. Brand presentation uses permitted local assets or the text brand mark only.
- The one-click builder must leave `src/data/ads.ts` with all six Adsterra unit values empty. Empty ad values must not make network requests. Only `adsterra-integrator` may populate the fixed Native Banner, 728x90, 468x60, 320x50, 160x600, and Smartlink values after launch. Real Adsterra code must run in the page DOM container and must not be wrapped in a sandboxed `srcDoc` iframe.
- AdSense ownership is preinstalled through all three public carriers: `public/ads.txt`, the `google-adsense-account` meta tag, and the account script in the root layout. Builder preserves the exact publisher values; do not modify them.
- Hard current-game facts must point back to one of: the Steam store page for AppID 2067210, the official serioussam.com hub, the verified X handle x.com/SeriousSamIAm, the Steam Community hub, or the Devolver Digital press release dated 2026-08-31. Anything outside those sources must be labelled with its research date.
- Trust pages (About, Contact, Privacy Policy, Terms) are configured for the actual site identity; keep them in sync if the operator email, publisher attribution, or analytics setup changes.
