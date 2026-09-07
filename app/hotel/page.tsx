import HotelExperience from "@/components/HotelExperience";
import SiteShell from "@/components/SiteShell";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getSiteConfig } from "@/lib/getSiteConfig";

export default function HotelPage() {
  const config = getSiteConfig("hotel");

  return (
    <SiteShell config={config}>
      <main>
        <HotelExperience config={config} />
        <WhatsAppFloat config={config} />
      </main>
    </SiteShell>
  );
}
