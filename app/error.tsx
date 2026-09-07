"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6 text-center dark:bg-slate-950">
      <div className="max-w-md rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">CYDO Demo Sites</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">This page needs another try</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">The page could not be loaded. Your information has not been submitted again.</p>
        <button type="button" onClick={reset} className="ui-button mt-6 rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800">Try again</button>
      </div>
    </main>
  );
}
