# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same `translationKey`, use their configured locale prefix, and must appear in canonical, hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/launch-pages.ts` (home) | Landing | Serious Sam Shatterverse | 2026 co-op roguelite FPS launch hub | Release / System requirements / Crossplay | Hub | Launch hub for the 2026 game by Behaviour Interactive Inc. |
| `/release` | `launch-pages.ts` (release-platforms) | Status | Serious Sam Shatterverse release date | Confirm Aug 31, 2026 launch and Windows 10/11 x64 | System requirements / Crossplay | Status | Confirms Steam AppID 2067210. |
| `/system-requirements` | `launch-pages.ts` (system-requirements) | Reference | Serious Sam Shatterverse system requirements | Match PC to min/recommended spec | Release / Price & editions | Reference | Windows 10/11 x64 only. |
| `/price-editions` | `launch-pages.ts` (price-editions) | Reference | Serious Sam Shatterverse price | Decide standalone vs bundle | Release / Crossplay | Reference | $19.99 USD list / $17.99 launch-week. |
| `/crossplay-coop` | `launch-pages.ts` (crossplay-coop) | Status | Serious Sam Shatterverse crossplay | Confirm 1-5 player co-op status | Run tips / Community | Status | Console crossplay parity not announced. |
| `/steam-deck` | `launch-pages.ts` (steam-deck) | Status | Serious Sam Shatterverse Steam Deck | Plan handheld play | Release / Run tips | Status | Verification label not yet published. |
| `/sam-variants` | `launch-pages.ts` (sam-variants-characters) | Reference | Serious Sam Shatterverse Sam variants | Five-variant roster with per-variant ultimates | Weapons & boons / Run tips | Reference | Retro Sam + Cartoon Sam first-party; Alien / Orphan / Broken Sam second-party. |
| `/lieutenants-bosses` | `launch-pages.ts` (lieutenants-bosses) | Reference | Serious Sam Shatterverse bosses | Five named lieutenants + Shard of Mental final boss | Weapons & boons / Run tips | Reference | Lava Golem, Inverse Sam, Kleer God, Rogue Netricsa, Reptiloid Highlander named via Steam achievements; 2026-09-17 Rogue Netricsa + Elite HP rebalance covered. |
| `/weapons-boons` | `launch-pages.ts` (weapons-boons) | Reference | Serious Sam Shatterverse weapons | Launch weapons, Intel categories, Boons, modifiers | Sam variants / Run tips | Reference | SOP38 Pistol, M1A2 Thompson, SBC Cannon, Sniper Rifle default unlock; Flying Razors / Luring Intel; 2026-09-17 weapon economy rebalance. |
| `/run-tips` | `launch-pages.ts` (roguelite-run-tips) | Guide | Serious Sam Shatterverse tips | Difficulty tiers (Normal / Serious Mode / Mental Mode) and run survival | Crossplay & co-op / Community | Guide | Tier names anchored to Steam achievements; 2026-09-17 Mental / Serious / 2-player scaling rebalance. |
| `/playtest` | `launch-pages.ts` (playtest-history) | Reference | Serious Sam Shatterverse playtest | Playtest history and launch impact | Release / Reviews | Reference | Steam closed playtest feedback framing. |
| `/language-support` | `launch-pages.ts` (language-support) | Reference | Serious Sam Shatterverse languages | Supported interface/subtitle languages | Release / System requirements | Reference | 12 supported languages listed on Steam. |
| `/reviews` | `launch-pages.ts` (reviews-launch-impressions) | List | Serious Sam Shatterverse review | Launch-window review snapshot | Playtest / Updates | List | Date-stamped to launch window. |
| `/updates` | `launch-pages.ts` (updates-patch-notes) | Status | Serious Sam Shatterverse update | Patch notes and post-launch roadmap | Reviews / Community | Status | Updates tracked from Steam Community + X. |
| `/community` | `launch-pages.ts` (community-discord) | Hub | Serious Sam Shatterverse Discord | Official community channels | Updates / Reviews | Hub | Discord, X, Bluesky, Facebook. |
| `/vs-classic-serious-sam` | `launch-pages.ts` (vs-classic-serious-sam) | Comparison | Serious Sam Shatterverse vs Serious Sam 4 | Disambiguate Shatterverse from earlier games | Price & editions / Run tips | Comparison | Croteam's role clarified. |
| `/about` | `site-pages.ts` | Utility | about Serious Sam Shatterverse Guide | Trust and editorial policy | Contact | Trust | Unofficial status, source rule. |
| `/contact` | `site-pages.ts` | Utility | contact Serious Sam Shatterverse Guide | Corrections and source updates | About | Trust | support@serioussamshatterverse.pro. |
| `/privacy-policy` | `site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured; empty ads. |
| `/terms` | `site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Unofficial fan site disclaimer. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/launch-pages.ts` (16) and `src/data/pages/site-pages.ts` (4) with explicit locale and final URL.
- Entity Hubs and details: no entity families declared in the current Site Plan (`entity_families: []`).
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.
