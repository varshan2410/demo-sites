import type { SiteConfig } from "@/lib/getSiteConfig";

export default function Hero({ config }: { config: SiteConfig }) {
  return (
    <section
      className="px-6 py-20 md:py-28 text-white"
      style={{ backgroundColor: config.theme.primary }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wide opacity-80 mb-3">
          {config.siteName} · {config.tagline}
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
          {config.hero.title}
        </h1>
        <p className="text-base md:text-lg opacity-90 mb-8">
          {config.hero.subtitle}
        </p>
        <a
          href="#booking"
          className="inline-block bg-white font-medium px-6 py-3 rounded-lg"
          style={{ color: config.theme.primary }}
        >
          {config.hero.cta}
        </a>
      </div>
    </section>
  );
}
