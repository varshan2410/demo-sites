import type { SiteConfig } from "@/lib/getSiteConfig";

export default function WhatsAppFloat({ config }: { config: SiteConfig }) {
  const url = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(
    config.whatsapp.defaultMessage
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white text-2xl"
      style={{ backgroundColor: "#25D366" }}
    >
      ●
    </a>
  );
}
