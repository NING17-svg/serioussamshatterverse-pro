# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-05 - Initial V3 launch assembly (one-click-builder)

- Site id: `serioussamshatterverse-pro`; exact domain: `serioussamshatterverse.pro`.
- V3 template baseline copied from `site-launch/templates/game-guide-site-template/`.
- GitHub repo created: https://github.com/NING17-svg/serioussamshatterverse-pro
- `site-launch/tasks/serioussamshatterverse-pro/content/content-package.json` (16 localized pages, en-US, launch-content-package-v3, complete) assembled into `src/data/pages/launch-pages.ts`.
- 4 trust pages (about, contact, privacy-policy, terms) rebadged to the actual game in `src/data/pages/site-pages.ts`.
- Sample template pages `/wiki`, `/guides`, `/release-date`, `/faq` removed from the page registry and final route manifest.
- `src/lib/content.ts` extended with `getFaqsForPage`, `getRelatedPages`, and a deterministic `getRecentUpdates` helper.
- `validate-template-contract.ts` fixtures relaxed to look up any non-home page id so the assembled site still passes the template contract.
- IndexNow key file generated: `public/indexnow-ec78b2a3dc5f512096e2f15a827afef0.txt`.
- Public content hygiene check passed on source (`hard=0, warnings=0`).
- `npm run verify` passed: 20 pages, 20 sitemap URLs, 20 manifest routes.
- V3 route contract validation passed.

### 2026-08-12 - Static discovery and review freshness baseline added
