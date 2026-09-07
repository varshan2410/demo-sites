"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ label }: { label: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("cydo-theme");
    const shouldUseDark =
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("cydo-theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] sm:h-10 sm:w-10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5">
        {isDark ? (
          <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.55-.45-1-1-1a7 7 0 0 1-7-7c0-.55-.45-1-1-1Z" />
        ) : (
          <path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm0 13.5a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0V18.5a.75.75 0 0 1 .75-.75ZM4.25 12a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm13.5 0a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5H18.5a.75.75 0 0 1-.75-.75ZM6.52 6.52a.75.75 0 0 1 1.06 0l.88.88A.75.75 0 0 1 7.4 8.46l-.88-.88a.75.75 0 0 1 0-1.06Zm9.02 9.02a.75.75 0 0 1 1.06 0l.88.88a.75.75 0 1 1-1.06 1.06l-.88-.88a.75.75 0 0 1 0-1.06ZM17.48 6.52a.75.75 0 0 1 0 1.06l-.88.88a.75.75 0 1 1-1.06-1.06l.88-.88a.75.75 0 0 1 1.06 0ZM8.46 15.54a.75.75 0 0 1 0 1.06l-.88.88a.75.75 0 1 1-1.06-1.06l.88-.88a.75.75 0 0 1 1.06 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
        )}
      </svg>
    </button>
  );
}
