"use client";

import type { ClinicConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function PriceList({ config }: { config: ClinicConfig }) {
  const { t } = useLanguage();
  return (
    <section id="services" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h2 className="mb-6 text-3xl font-semibold tracking-tight dark:text-white">{t("clinic.labels.servicesTitle", config.labels.servicesTitle)}</h2>
      <div className="divide-y divide-gray-200 dark:divide-slate-800">
        {config.services.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-4">
            <div>
              <div className="font-medium dark:text-white">{t("clinic.service." + item.id, item.name)}</div>
              <div className="text-sm text-gray-500 dark:text-slate-400">{item.duration}</div>
            </div>
            <div className="whitespace-nowrap font-semibold dark:text-white">LKR {item.priceLKR.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
