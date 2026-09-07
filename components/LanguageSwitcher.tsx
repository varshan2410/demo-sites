"use client";

import { languageNames, type Language } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <label className="inline-flex h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <span aria-hidden="true" className="text-sm">文</span>
      <span className="hidden sm:inline">Language</span>
      <select aria-label="Select language" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="h-8 cursor-pointer border-0 bg-transparent p-0 text-xs font-semibold text-slate-700 outline-none dark:bg-slate-900 dark:text-slate-100">
        {Object.entries(languageNames).map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
    </label>
  );
}
