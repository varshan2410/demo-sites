"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { RestaurantConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function RestaurantExperience({ config }: { config: RestaurantConfig }) {
  const { t } = useLanguage();
  const [category, setCategory] = useState("ALL");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [reservation, setReservation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const categories = ["ALL", ...Array.from(new Set(config.menu.map((item) => item.category)))];
  const visibleMenu = category === "ALL" ? config.menu : config.menu.filter((item) => item.category === category);
  const cartItems = useMemo(() => config.menu.filter((item) => cart[item.id]), [cart, config.menu]);
  const total = cartItems.reduce((sum, item) => sum + item.priceLKR * cart[item.id], 0);

  function updateCart(id: string, amount: number) {
    setCart((current) => {
      const next = Math.max(0, (current[id] ?? 0) + amount);
      return { ...current, [id]: next };
    });
  }

  async function submitReservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setIsSubmitting(true); setError("");
    try {
      const response = await fetch("/api/restaurant/reservations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(data)) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please check your details and try again.");
      await new Promise((resolve) => setTimeout(resolve, 280));
      setReservation(result.reference);
    } catch (submitError) { setError(submitError instanceof Error ? submitError.message : "Unable to submit reservation."); }
    finally { setIsSubmitting(false); }
  }

  const orderMessage = cartItems.length
    ? "Hello Cinnamon & Lime, I would like to order:%0A%0A" + cartItems.map((item) => cart[item.id] + " × " + item.name + " — LKR " + (cart[item.id] * item.priceLKR).toLocaleString()).join("%0A") + "%0A%0ATotal: LKR " + total.toLocaleString()
    : config.whatsapp.defaultMessage;

  return (
    <>
      <section id="home" className="relative isolate min-h-[620px] overflow-hidden px-6 py-24 text-white md:py-36">
        <Image src={config.hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/20" />
        <div className="relative mx-auto flex min-h-[400px] max-w-6xl items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-200">{config.tagline}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{t("restaurant.hero.title", config.hero.title)}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-200">{t("restaurant.hero.subtitle", config.hero.subtitle)}</p>
            <a href="#menu" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-stone-950">{t("restaurant.hero.cta", config.hero.cta)}</a>
          </div>
        </div>
      </section>

      <section id="menu" className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{t("restaurant.labels.menuEyebrow", config.labels.menuEyebrow)}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{t("restaurant.labels.menuTitle", config.labels.menuTitle)}</h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className="rounded-full px-4 py-2 text-sm font-semibold" style={category === item ? { backgroundColor: config.theme.primary, color: "white" } : { backgroundColor: "#f1f5f9", color: "#334155" }}>{item === "ALL" ? t("restaurant.labels.menuAllLabel", config.labels.menuAllLabel) : item}</button>)}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {visibleMenu.map((item) => (
                <article key={item.id} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
                  <div className="flex items-start justify-between gap-4"><h3 className="font-semibold dark:text-white">{t("restaurant.menu." + item.id, item.name)}</h3><span className="whitespace-nowrap font-semibold dark:text-white">LKR {item.priceLKR.toLocaleString()}</span></div>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3"><div className="flex flex-wrap gap-1">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-800 dark:bg-orange-950 dark:text-orange-200">{tag}</span>)}</div><button type="button" onClick={() => updateCart(item.id, 1)} className="rounded-full px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>Add</button></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-stone-100 p-6 dark:bg-slate-900 lg:sticky lg:top-24">
            <h2 className="text-xl font-semibold dark:text-white">{t("restaurant.labels.orderTitle", config.labels.orderTitle)}</h2>
            {cartItems.length ? <div className="mt-5 space-y-4">{cartItems.map((item) => <div key={item.id} className="flex items-center justify-between gap-3 text-sm"><div><p className="font-medium dark:text-white">{t("restaurant.menu." + item.id, item.name)}</p><p className="text-slate-500">LKR {(item.priceLKR * cart[item.id]).toLocaleString()}</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => updateCart(item.id, -1)} className="h-7 w-7 rounded-full border dark:border-slate-700">-</button><span>{cart[item.id]}</span><button type="button" onClick={() => updateCart(item.id, 1)} className="h-7 w-7 rounded-full border dark:border-slate-700">+</button></div></div>)}</div> : <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{t("restaurant.labels.orderEmptyLabel", config.labels.orderEmptyLabel)}</p>}
            <div className="mt-6 border-t border-stone-300 pt-4 dark:border-slate-700"><div className="flex justify-between font-semibold dark:text-white"><span>{t("restaurant.labels.orderTotalLabel", config.labels.orderTotalLabel)}</span><span>LKR {total.toLocaleString()}</span></div><a href={"https://wa.me/" + config.whatsapp.number + "?text=" + orderMessage} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-full px-4 py-3 text-center text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>{t("restaurant.labels.orderWhatsAppLabel", config.labels.orderWhatsAppLabel)}</a></div>
          </aside>
        </div>
      </section>

      <section id="catering" className="bg-orange-50 px-6 py-16 dark:bg-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{config.labels.cateringEyebrow}</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{config.labels.cateringTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{config.catering.map((item) => <article key={item.name} className="rounded-3xl bg-white p-7 dark:bg-slate-950"><h3 className="text-xl font-semibold dark:text-white">{item.name}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p><p className="mt-6 text-lg font-semibold dark:text-white">LKR {item.pricePerHeadLKR.toLocaleString()} <span className="text-sm font-normal text-slate-500">{config.labels.perHeadLabel}</span></p><p className="mt-1 text-sm text-slate-500">{item.minimumGuests} {config.labels.minimumGuestsLabel}</p></article>)}</div></div>
      </section>

      <section id="reserve" className="px-6 py-16 md:py-24"><div className="mx-auto max-w-xl rounded-3xl bg-stone-100 p-6 dark:bg-slate-900 sm:p-8">{reservation ? <div id="restaurant-reservation" className="text-center"><h2 className="text-2xl font-semibold dark:text-white">{config.labels.reservationConfirmationTitle}</h2><p className="mt-3 text-slate-600 dark:text-slate-300">{config.labels.reservationConfirmationReference.replace("{reference}", reservation)}</p></div> : <><h2 className="text-2xl font-semibold dark:text-white">{config.labels.reservationTitle}</h2><form onSubmit={submitReservation} className="mt-6 grid gap-4 sm:grid-cols-2">{[[config.labels.reservationNameLabel,"name","text"],[config.labels.reservationPhoneLabel,"phone","tel"],[config.labels.reservationDateLabel,"date","date"],[config.labels.reservationTimeLabel,"time","time"]].map(([label,name,type]) => <label key={name} className="text-sm font-medium dark:text-slate-200">{label}<input required name={name} type={type} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>)}<label className="text-sm font-medium dark:text-slate-200">{config.labels.reservationPartyLabel}<input required name="party" type="number" min="1" defaultValue="2" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>{error ? <p role="alert" className="sm:col-span-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}<button disabled={isSubmitting} type="submit" className="ui-button self-end rounded-full px-5 py-3 font-semibold text-white disabled:cursor-wait disabled:opacity-60" style={{ backgroundColor: config.theme.primary }}>{isSubmitting ? <><span aria-hidden="true" className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white align-[-2px]" />Submitting…</> : config.labels.reservationSubmitLabel}</button></form></>}</div></section>
    </>
  );
}
