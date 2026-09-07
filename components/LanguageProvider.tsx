"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translate, type Language } from "@/lib/i18n";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (key: string, fallback: string) => string } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("cydo-language");
    if (saved === "en" || saved === "si" || saved === "ta") setLanguage(saved);
  }, []);

  function changeLanguage(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("cydo-language", next);
    document.documentElement.lang = next;
  }

  const value = useMemo(() => ({ language, setLanguage: changeLanguage, t: (key: string, fallback: string) => translate(language, key, fallback) }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
