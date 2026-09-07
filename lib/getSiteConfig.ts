import clinic from "@/config/clinic.json";

export type SiteConfig = typeof clinic;

const sites: Record<string, SiteConfig> = {
  clinic,
  // hotel: require("@/config/hotel.json"),
  // restaurant: require("@/config/restaurant.json"),
};

export function getSiteConfig(slug: string): SiteConfig {
  const config = sites[slug];
  if (!config) throw new Error(`No config found for site: ${slug}`);
  return config;
}
