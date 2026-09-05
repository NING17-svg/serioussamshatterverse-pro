import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Release" } },
  { href: "/system-requirements", labels: { "en-US": "System requirements" } },
  { href: "/price-editions", labels: { "en-US": "Price & editions" } },
  { href: "/crossplay-coop", labels: { "en-US": "Crossplay & co-op" } },
  { href: "/run-tips", labels: { "en-US": "Run tips" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/release", labels: { "en-US": "Release" } },
  { href: "/system-requirements", labels: { "en-US": "System requirements" } },
  { href: "/price-editions", labels: { "en-US": "Price & editions" } },
  { href: "/crossplay-coop", labels: { "en-US": "Crossplay & co-op" } },
  { href: "/steam-deck", labels: { "en-US": "Steam Deck" } },
  { href: "/sam-variants", labels: { "en-US": "Sam variants" } },
  { href: "/lieutenants-bosses", labels: { "en-US": "Bosses" } },
  { href: "/weapons-boons", labels: { "en-US": "Weapons & boons" } },
  { href: "/run-tips", labels: { "en-US": "Run tips" } },
  { href: "/playtest", labels: { "en-US": "Playtest" } },
  { href: "/language-support", labels: { "en-US": "Languages" } },
  { href: "/reviews", labels: { "en-US": "Reviews" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/community", labels: { "en-US": "Community" } },
  { href: "/vs-classic-serious-sam", labels: { "en-US": "vs Classic" } },
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
