import type { SiteConfig } from "@/lib/getSiteConfig";

export default function TrustSignals({ config }: { config: SiteConfig }) {
  return (
    <section className="px-6 py-10 border-b border-gray-100">
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
        {config.trustSignals.map((signal) => (
          <div key={signal.label}>
            <div
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: config.theme.primary }}
            >
              {signal.value}
            </div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">
              {signal.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
