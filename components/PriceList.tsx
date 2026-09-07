import type { SiteConfig } from "@/lib/getSiteConfig";

export default function PriceList({ config }: { config: SiteConfig }) {
  return (
    <section className="px-6 py-14 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <div className="divide-y divide-gray-100">
        {config.services.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4">
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-500">{item.duration}</div>
            </div>
            <div className="font-semibold whitespace-nowrap">
              LKR {item.priceLKR.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
