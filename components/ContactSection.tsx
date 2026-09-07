import type { ClinicConfig } from "@/types/site";

export default function ContactSection({ config }: { config: ClinicConfig }) {
  return (
    <section id="contact" className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>
            {config.labels.contactEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{config.labels.contactTitle}</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-semibold text-slate-950 dark:text-white">{config.labels.addressLabel}</dt>
              <dd className="mt-1 whitespace-pre-line leading-7 text-slate-600 dark:text-slate-300">{config.contact.address}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-950 dark:text-white">{config.labels.hoursLabel}</dt>
              <dd className="mt-1 leading-7 text-slate-600 dark:text-slate-300">{config.contact.hours}</dd>
            </div>
          </dl>
          <a href={"https://wa.me/" + config.whatsapp.number + "?text=" + encodeURIComponent(config.whatsapp.defaultMessage)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{ backgroundColor: config.theme.primary }}>
            {config.labels.contactWhatsAppLabel}
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-800">
          <iframe title={config.labels.mapTitle} src={config.contact.mapEmbedUrl} loading="lazy" className="h-[360px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}
