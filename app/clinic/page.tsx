import { getSiteConfig } from "@/lib/getSiteConfig";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import PriceList from "@/components/PriceList";
import BookingForm from "@/components/BookingForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function ClinicPage() {
  const config = getSiteConfig("clinic");

  return (
    <main>
      <Hero config={config} />
      <TrustSignals config={config} />
      <PriceList config={config} />
      <BookingForm config={config} />
      <WhatsAppFloat config={config} />
    </main>
  );
}
