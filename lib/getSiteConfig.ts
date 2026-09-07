import { clinicConfig } from "@/config/clinic";
import { hotelConfig } from "@/config/hotel";
import { restaurantConfig } from "@/config/restaurant";

// Add each future business here. Components receive a typed configuration,
// so business data never has to be hardcoded inside the UI.
export const siteConfigs = {
  clinic: clinicConfig,
  hotel: hotelConfig,
  restaurant: restaurantConfig,
} as const;

export type SiteSlug = keyof typeof siteConfigs;

export function getSiteConfig<T extends SiteSlug>(slug: T): (typeof siteConfigs)[T] {
  return siteConfigs[slug];
}
