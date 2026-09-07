import RestaurantExperience from "@/components/RestaurantExperience";
import SiteShell from "@/components/SiteShell";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSiteConfig } from "@/lib/getSiteConfig";

export const metadata: Metadata = {
  title: "Cinnamon & Lime",
  description: "A restaurant demo with a visual menu, WhatsApp ordering, catering, and table reservations.",
};

export default function RestaurantPage() {
  const config = getSiteConfig("restaurant");
  return <SiteShell config={config}><main id="main-content" tabIndex={-1}><RestaurantExperience config={config} /><WhatsAppFloat config={config} /></main></SiteShell>;
}
import type { Metadata } from "next";
