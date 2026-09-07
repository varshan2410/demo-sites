import Image from "next/image";
import Link from "next/link";
import { siteConfigs } from "@/lib/getSiteConfig";

const descriptions: Record<keyof typeof siteConfigs, string> = {
  clinic: "A reassuring appointment experience with doctor selection, WhatsApp confirmation, print-ready details and a touch-friendly smile comparison.",
  hotel: "A premium direct-booking villa experience with multi-currency room rates, availability enquiry and a printable stay voucher.",
  restaurant: "A food-led digital menu with live category filtering, cart-to-WhatsApp ordering, catering packages and table reservations.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.2),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(249,115,22,0.16),_transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-300">CYDO Demo Sites</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Three businesses. One reusable system.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Mobile-first, configurable customer demos built for the first two minutes that decide whether a prospect becomes a client.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-slate-700 px-4 py-2">Shared component system</span>
            <span className="rounded-full border border-slate-700 px-4 py-2">Config-driven brands</span>
            <span className="rounded-full border border-slate-700 px-4 py-2">Mobile-first customer flows</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-950 dark:bg-slate-950 dark:text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(siteConfigs).map(([slug, config]) => {
              const siteSlug = slug as keyof typeof siteConfigs;
              return (
                <Link key={slug} href={"/" + slug} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={config.hero.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white">{config.tagline}</p>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold dark:text-white">{config.siteName}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{descriptions[siteSlug]}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold" style={{ color: config.theme.primary }}>Open demo →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div><p className="text-sm font-semibold text-white">The architecture</p><p className="mt-2 text-sm leading-6 text-slate-400">Configuration supplies business data and brand tokens. Shared primitives supply navigation, themes, forms and WhatsApp actions.</p></div>
          <div><p className="text-sm font-semibold text-white">The product judgement</p><p className="mt-2 text-sm leading-6 text-slate-400">Core visitor journeys work end-to-end. Expensive production systems are intentionally represented at demo scope.</p></div>
          <div><p className="text-sm font-semibold text-white">The handoff</p><p className="mt-2 text-sm leading-6 text-slate-400">The docs explain architecture, completed features, tradeoffs, and how another branded customer demo can be created.</p></div>
        </div>
      </section>
    </main>
  );
}
