"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { DailySpecial, ThemeConfig } from "@/types/site";

export default function RestaurantDailySpecials({ specials, deliveryRadius, theme, labels }: { specials: DailySpecial[]; deliveryRadius: string; theme: ThemeConfig; labels: { specialsEyebrow: string; specialsTitle: string; deliveryLabel: string } }) {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="daily-specials-heading" className="bg-stone-100 px-6 py-10 dark:bg-slate-900">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.65fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.primary }}>{labels.specialsEyebrow}</p>
          <h2 id="daily-specials-heading" className="mt-3 text-3xl font-semibold tracking-tight dark:text-white">{labels.specialsTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {specials.map((special) => <article key={special.id} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-950"><h3 className="font-semibold dark:text-white">{t(`restaurant.special.${special.id}.name`, special.name)}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{t(`restaurant.special.${special.id}.description`, special.description)}</p><p className="mt-4 font-semibold" style={{ color: theme.primary }}>LKR {special.priceLKR.toLocaleString()}</p></article>)}
          </div>
        </div>
        <aside className="rounded-3xl p-7 text-white" style={{ backgroundColor: theme.primary }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">{labels.deliveryLabel}</p>
          <p className="mt-4 text-lg font-semibold leading-8">{deliveryRadius}</p>
          <a href="#menu" className="ui-button mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">Order from the menu</a>
        </aside>
      </div>
    </section>
  );
}
