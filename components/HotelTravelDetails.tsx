import type { ContactConfig, ThemeConfig } from "@/types/site";

export default function HotelTravelDetails({ contact, theme, title, description, directionsLabel }: { contact: ContactConfig; theme: ThemeConfig; title: string; description: string; directionsLabel: string }) {
  return (
    <section className="bg-stone-100 px-6 py-16 dark:bg-slate-900 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-200 dark:bg-slate-950 dark:ring-slate-800 md:flex-row md:items-center md:justify-between md:p-10">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: theme.primary }}>Travel made easy</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white">{title}</h2>
          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        {contact.directionsUrl ? <a href={contact.directionsUrl} target="_blank" rel="noopener noreferrer" className="ui-button shrink-0 rounded-full px-5 py-3 text-center text-sm font-semibold text-white" style={{ backgroundColor: theme.primary }}>{directionsLabel}</a> : null}
      </div>
    </section>
  );
}
