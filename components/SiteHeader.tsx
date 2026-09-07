"use client";

import { useState } from "react";
import Image from "next/image";
import type { SiteShellConfig } from "@/types/site";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

export default function SiteHeader({ config }: { config: SiteShellConfig }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#home" className="group inline-flex items-center gap-2.5 text-slate-900 dark:text-white" aria-label={`${config.theme.logoText} home`}>
          <Image src={config.theme.logoImage} alt="" width={40} height={40} className="brand-logo" priority />
          <span className="brand-name">{config.theme.logoText}</span>
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {config.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {t("nav." + item.label, item.label)}
              </a>
            ))}
          </nav>
          <ThemeToggle label={t("common.themeToggle", config.labels.themeToggleLabel)} />
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-100"
            aria-label={isMenuOpen ? t("common.closeMenu", config.labels.closeMenuLabel) : t("common.openMenu", config.labels.menuLabel)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="text-xl" aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav id="mobile-navigation" className="border-t border-slate-200 px-5 py-3 md:hidden dark:border-slate-800" aria-label="Mobile navigation">
          {config.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md px-3 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {t("nav." + item.label, item.label)}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
