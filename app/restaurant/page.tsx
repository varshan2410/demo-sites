import RestaurantExperience from "@/components/RestaurantExperience";
import SiteShell from "@/components/SiteShell";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSiteConfig } from "@/lib/getSiteConfig";

export default function RestaurantPage() {
  const config = getSiteConfig("restaurant");
  return <SiteShell config={config}><main><RestaurantExperience config={config} /><WhatsAppFloat config={config} /></main></SiteShell>;
}
