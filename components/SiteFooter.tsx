import type { SiteShellConfig } from "@/types/site";

export default function SiteFooter({ config }: { config: SiteShellConfig }) {
  return (
    <footer className="bg-slate-950 px-6 py-12 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{config.theme.logoText}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{config.labels.footerDescription}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">{config.labels.addressLabel}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">{config.contact.address}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">{config.labels.hoursLabel}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">{config.contact.hours}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} {config.labels.copyright}
      </div>
    </footer>
  );
}
