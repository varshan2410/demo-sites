import HotelExperience from "@/components/HotelExperience";
import SiteShell from "@/components/SiteShell";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSiteConfig } from "@/lib/getSiteConfig";

export const metadata: Metadata = {
  title: "Kahanda Cove Villa",
  description: "A boutique villa demo with room discovery, multi-currency rates, and availability enquiries.",
};

export default function HotelPage() {
  const config = getSiteConfig("hotel");

  return (
    <SiteShell config={config}>
      <main id="main-content" tabIndex={-1}>
        <HotelExperience config={config} />
        <WhatsAppFloat config={config} />
      </main>
    </SiteShell>
  );
}
import type { Metadata } from "next";
