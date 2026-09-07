import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-white">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">That page is not part of this demo.</h1>
        <p className="mt-4 leading-7 text-slate-300">Return to the showcase and choose one of the three live customer experiences.</p>
        <Link href="/" className="ui-button mt-7 inline-flex rounded-full bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-teal-300">Back to the showcase</Link>
      </div>
    </main>
  );
}
