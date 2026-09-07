import type { ClinicConfig } from "@/types/site";

export default function Hero({ config }: { config: ClinicConfig }) {
  return (
    <section
      id="home"
      className="px-6 py-20 text-white md:py-28"
      style={{ backgroundColor: config.theme.primary }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-wide opacity-80">
          {config.siteName} <span aria-hidden="true">•</span> {config.tagline}
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-5xl">
          {config.hero.title}
        </h1>
        <p className="mb-8 text-base opacity-90 md:text-lg">{config.hero.subtitle}</p>
        <a
          href="#booking"
          className="inline-block rounded-lg bg-white px-6 py-3 font-medium"
          style={{ color: config.theme.primary }}
        >
          {config.hero.cta}
        </a>
      </div>
    </section>
  );
}
