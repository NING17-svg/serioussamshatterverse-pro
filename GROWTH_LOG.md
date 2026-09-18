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

### 2026-09-05 - Adsterra six-unit integration (adsterra-integrator)

- Site id: `serioussamshatterverse-pro`; exact domain: `serioussamshatterverse.pro`.
- Populated `src/data/ads.ts` with the six fixed Adsterra unit codes: Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink.
- No component, layout, or page-structure changes; no new toggle fields.
- `npm run verify` passed: 20 pages, 20 sitemap URLs, 20 manifest routes.

### 2026-09-19 - Content updater batch (lieutenants + Sam variants + difficulty + weapons)

- Refreshed `/lieutenants-bosses` with the five named Mental lieutenants (Lava Golem, Inverse Sam, Kleer God, Rogue Netricsa, Reptiloid Highlander) plus Shard of Mental final boss, all anchored to the Steam achievements list, and the 2026-09-17 Rogue Netricsa timer / explosion animation extension and Elite HP scaling reduction on Serious difficulty.
- Refreshed `/sam-variants` with the five-variant launch roster, Retro Sam and Cartoon Sam first-party confirmed, Alien / Orphan / Broken Sam flagged as second-party, per-variant ultimates, and the 2026-09-09 Retro Sam decoy + Luring Intel fix.
- Refreshed `/run-tips` with the three difficulty tiers (Normal, Serious Mode, Mental Mode) anchored to Steam achievements and the 2026-09-17 reworked Mental starting difficulty, reduced enemy / Elite / boss HP on Serious, and eased 2-player scaling.
- Refreshed `/weapons-boons` with the four launch weapons (SOP38 Pistol, M1A2 Thompson, SBC Cannon, Sniper Rifle default unlock), the two first-party Intel categories (Flying Razors Intel, Luring Intel), the Trinket / Catalyst Boon / Intel meta-progression layer, and the 2026-09-17 weapon economy rebalance.
- Updated `CONTENT_INDEX.md` rows for `/lieutenants-bosses`, `/sam-variants`, `/run-tips`, `/weapons-boons` to reflect the new content roles and evidence anchors.
