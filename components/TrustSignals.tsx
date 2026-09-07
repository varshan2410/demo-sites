import type { ClinicConfig } from "@/types/site";

export default function TrustSignals({ config }: { config: ClinicConfig }) {
  return (
    <section className="border-b border-gray-100 px-6 py-10">
      <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 text-center">
        {config.trustSignals.map((signal) => (
          <div key={signal.label}>
            <div className="text-2xl font-semibold md:text-3xl" style={{ color: config.theme.primary }}>
              {signal.value}
            </div>
            <div className="mt-1 text-xs text-gray-500 md:text-sm">{signal.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
