import type { ClinicConfig } from "@/types/site";
import Image from "next/image";

export default function Hero({ config }: { config: ClinicConfig }) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 text-white md:py-36">
      <Image src={config.hero.image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">
            {config.siteName} <span aria-hidden="true">•</span> {config.tagline}
          </p>
          <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {config.hero.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-200 md:text-lg">{config.hero.subtitle}</p>
          <a href="#booking" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950">
            {config.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
