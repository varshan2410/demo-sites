"use client";

import type { ContactConfig, ThemeConfig, WhatsAppConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function BusinessContactSection({ id = "contact", eyebrow, title, eyebrowKey, titleKey, mapTitle, contact, whatsapp, theme, actionLabel, actionKey }: { id?: string; eyebrow: string; title: string; eyebrowKey: string; titleKey: string; mapTitle: string; contact: ContactConfig; whatsapp: WhatsAppConfig; theme: ThemeConfig; actionLabel: string; actionKey: string }) {
  const { t } = useLanguage();
  return (
    <section id={id} className="bg-slate-50 px-6 py-16 dark:bg-slate-900 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.primary }}>{t(eyebrowKey, eyebrow)}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{t(titleKey, title)}</h2>
          <p className="mt-7 text-sm font-semibold text-slate-950 dark:text-white">{t("common.visitUs", "Visit us")}</p><p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{contact.address}</p>
          <p className="mt-5 text-sm font-semibold text-slate-950 dark:text-white">{t("common.hoursLabel", "Opening hours")}</p><p className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{contact.hours}</p>
          <a href={`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.defaultMessage)}`} target="_blank" rel="noopener noreferrer" className="ui-button mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: theme.primary }}>{t(actionKey, actionLabel)}</a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"><iframe title={mapTitle} src={contact.mapEmbedUrl} loading="lazy" className="h-[360px] w-full border-0" /></div>
      </div>
    </section>
  );
}
