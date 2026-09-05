import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What is this site?",
    answer:
      "This is an unofficial fan guide for Serious Sam: Shatterverse, the 2026 co-op roguelite FPS by Behaviour Interactive Inc. and Devolver Digital. It is not affiliated with the publisher, developer, or franchise creator Croteam.",
    pageIds: ["home", "about", "fixed-release-platforms", "fixed-price-editions", "fixed-crossplay-coop", "fixed-steam-deck", "fixed-language-support"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "release-date",
    question: "When did Serious Sam: Shatterverse launch?",
    answer:
      "The Steam store page lists a release date of August 31, 2026, with AppID 2067210 on Windows 10 x64 and Windows 11 x64.",
    pageIds: ["home", "fixed-release-platforms"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "price-launch",
    question: "How much does Serious Sam: Shatterverse cost at launch?",
    answer:
      "The standalone launch price is $19.99 USD with a launch-week 10% discount to $17.99 USD through approximately September 7, 2026. The IT'S TIME TO GET SERIOUS BUNDLE lists at $33.51 USD with a -75% bundle discount.",
    pageIds: ["home", "fixed-price-editions"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "crossplay",
    question: "Does Serious Sam: Shatterverse support crossplay?",
    answer:
      "The Steam features list online co-op and Cross-Platform Multiplayer for 1-5 players on Windows 10/11 x64. Console crossplay parity is not announced as of 2026-09-05.",
    pageIds: ["home", "fixed-crossplay-coop"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "languages",
    question: "Which languages does Serious Sam: Shatterverse support?",
    answer:
      "The Steam store lists 12 supported interface and subtitle languages: English, French, German, Spanish-Spain, Japanese, Korean, Polish, Portuguese-Brazil, Russian, Simplified Chinese, Traditional Chinese, and Ukrainian.",
    pageIds: ["home", "fixed-language-support"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "deck",
    question: "Is Serious Sam: Shatterverse verified on Steam Deck?",
    answer:
      "A Steam Deck verification label has not been published as of 2026-09-05. Check the Steam store page closer to your purchase date for an updated rating.",
    pageIds: ["home", "fixed-steam-deck"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
