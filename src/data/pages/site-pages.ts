import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      `About ${site.name}: an unofficial fan hub for Serious Sam: Shatterverse release info, co-op details, system requirements, weapons, run tips, and patch notes.`,
    summary:
      "A trust page explaining the site's unofficial status, sourcing rules, and guide scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the site covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan guide for Serious Sam: Shatterverse, the 2026 co-op roguelite FPS by Behaviour Interactive Inc. (Devolver Digital). It is not affiliated with the publisher, developer, or franchise creator.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
      { label: "Editorial rule", value: "Verified facts only, with date stamps" },
      { label: "Scope", value: "Release info, system requirements, co-op, Sam variants, weapons, run tips, community, updates" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information about Serious Sam: Shatterverse without inventing details that the official Steam store, serioussam.com, the verified X handle, or the Devolver Digital press release do not confirm.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Hard current-game facts are limited to the Steam store page (AppID 2067210), the official serioussam.com hub, the verified X handle x.com/SeriousSamIAm, the Steam Community hub, and the Devolver Digital press release dated 2026-08-31. Anything outside those sources is labelled 'Not announced as of 2026-09-05'.",
      },
      {
        id: "scope",
        type: "prose",
        heading: "What this site covers",
        body:
          "Release date and platforms, PC system requirements, launch price and the IT'S TIME TO GET SERIOUS BUNDLE, crossplay and co-op status, Steam Deck status, Sam Stone variants, Mental lieutenants, weapons and boons, run tips, the Steam playtest, supported languages, launch reviews, the latest patch notes, and the official community channels.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact Serious Sam: Shatterverse Guide for corrections, source updates, and feedback. Use official source links when reporting a change.",
    summary:
      "A trust page for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      `Email ${site.name} at support@serioussamshatterverse.pro for corrections, source links, or feedback.`,
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Email", value: "support@serioussamshatterverse.pro" },
      { label: "Response time", value: "Best effort, no SLA" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Email",
        body:
          "Send corrections or feedback to support@serioussamshatterverse.pro. The Cloudflare Email Routing rule for this address forwards to the verified owner mailbox; do not request a different inbox on this page.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "When reporting a correction, include a link to the official source (Steam store, serioussam.com, the verified X handle, Steam Community hub, or the Devolver Digital press release) and the page or section that needs updating. Do not send game account credentials or personal account information.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      `${site.name} privacy policy: lightweight analytics only (GA4 when configured), no accounts, no comments, no payments, and ad units are empty by default.`,
    summary:
      "A starter privacy policy page for analytics, logs, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can reach the operator.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This site does not include accounts, comments, or payments. When configured, GA4 collects aggregate usage; ad units are empty by default.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Empty Adsterra units; AdSense ownership metadata only" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. When a GA4 measurement ID is configured, Google Analytics may collect aggregate usage information according to its own settings. The fixed Adsterra-ready units are empty in the production build and the AdSense publisher values are preinstalled but the account has not been submitted for review. No third-party advertising request is made by default.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "Messages sent to support@serioussamshatterverse.pro include the email content the visitor chooses to send. Do not include sensitive personal information; account credentials are never requested.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behaviour changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      `Terms of use for ${site.name}: unofficial fan site, informational only, no warranty, and reliance on official sources for final purchase and platform decisions.`,
    summary:
      "A starter terms page for an unofficial guide site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This is an unofficial fan site. Information may change; rely on the official Steam store, serioussam.com, the verified X handle, and the Devolver Digital press release for final decisions.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Review", value: "Updated for launch" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          `${site.name} is not affiliated with Devolver Digital, Behaviour Interactive Inc., Croteam, Valve, or any platform holder. References to Serious Sam: Shatterverse and the broader Serious Sam franchise are for informational purposes only.`,
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use the official Steam store, serioussam.com, the verified X handle x.com/SeriousSamIAm, and the Devolver Digital press release dated 2026-08-31 for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through the contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-05",
  },
];
