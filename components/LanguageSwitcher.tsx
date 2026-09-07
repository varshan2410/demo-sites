"use client";

import { languageNames, type Language } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <label className="inline-flex h-9 items-center gap-1 rounded-full border border-slate-200 bg-white px-1.5 text-xs font-semibold text-slate-700 sm:h-10 sm:gap-1.5 sm:px-2.5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <span aria-hidden="true" className="text-sm">文</span>
      <span className="hidden sm:inline">Language</span>
      <select aria-label="Select language" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="h-7 max-w-[4.25rem] cursor-pointer border-0 bg-transparent p-0 text-[11px] font-semibold text-slate-700 outline-none sm:h-8 sm:max-w-none sm:text-xs dark:bg-slate-900 dark:text-slate-100">
        {Object.entries(languageNames).map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
    </label>
  );
}
