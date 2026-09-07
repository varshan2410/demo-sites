export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-white px-6 py-20 dark:bg-slate-950" aria-busy="true" aria-label="Loading page">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-14 max-w-2xl rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-5 max-w-xl rounded bg-slate-100 dark:bg-slate-900" />
        <div className="grid gap-5 pt-8 md:grid-cols-3">
          {[0, 1, 2].map((item) => <div key={item} className="h-52 rounded-3xl bg-slate-100 dark:bg-slate-900" />)}
        </div>
      </div>
    </main>
  );
}
