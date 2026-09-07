import type { CSSProperties, ReactNode } from "react";
import type { SiteShellConfig } from "@/types/site";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { LanguageProvider } from "@/components/LanguageProvider";
import RouteTransition from "@/components/RouteTransition";

export default function SiteShell({
  config,
  children,
}: {
  config: SiteShellConfig;
  children: ReactNode;
}) {
  const brandStyles = {
    "--color-primary": config.theme.primary,
    "--color-primary-dark": config.theme.primaryDark,
    "--font-site": config.theme.font,
  } as CSSProperties;

  return (
    <div style={brandStyles} className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <LanguageProvider>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader config={config} />
        <RouteTransition>{children}</RouteTransition>
        <SiteFooter config={config} />
      </LanguageProvider>
    </div>
  );
}
