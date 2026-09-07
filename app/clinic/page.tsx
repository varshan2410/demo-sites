import { getSiteConfig } from "@/lib/getSiteConfig";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import PriceList from "@/components/PriceList";
import BookingForm from "@/components/BookingForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SiteShell from "@/components/SiteShell";
import DoctorsSection from "@/components/DoctorsSection";
import ContactSection from "@/components/ContactSection";

export default function ClinicPage() {
  const config = getSiteConfig("clinic");

  return (
    <SiteShell config={config}>
      <main>
        <Hero config={config} />
        <TrustSignals config={config} />
        <PriceList config={config} />
        <DoctorsSection config={config} />
        <BookingForm config={config} />
        <ContactSection config={config} />
        <WhatsAppFloat config={config} />
      </main>
    </SiteShell>
  );
}
