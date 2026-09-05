import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Serious Sam: Shatterverse Guide",
  brandMark: "SS",
  gameName: "Serious Sam: Shatterverse",
  domain: "serioussamshatterverse.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://serioussamshatterverse.pro").replace(/\/$/, ""),
  description:
    "An unofficial fan hub for Serious Sam: Shatterverse release info, system requirements, co-op, Sam variants, weapons, run tips, and patch notes.",
  tagline: "Release status, co-op details, weapons, and run tips for Serious Sam: Shatterverse in one place.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Serious Sam: Shatterverse Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page",
      href: "https://store.steampowered.com/app/2067210/Serious_Sam_Shatterverse/",
      description: "Official store page with pricing, system requirements, and supported languages.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. All hard current-game facts are sourced from the official Steam store page, serioussam.com, the verified X handle, and the Steam Community hub dated 2026-09-05.",
};
