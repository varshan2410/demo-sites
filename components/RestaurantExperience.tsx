"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { RestaurantConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";
import ExperienceGallery from "@/components/ExperienceGallery";
import BusinessContactSection from "@/components/BusinessContactSection";
import RestaurantReservationForm from "@/components/RestaurantReservationForm";
import RestaurantDailySpecials from "@/components/RestaurantDailySpecials";
import CateringQuoteBuilder from "@/components/CateringQuoteBuilder";
import RestaurantReservationReceipt from "@/components/RestaurantReservationReceipt";

type Reservation = { name: string; phone: string; date: string; time: string; party: number };

export default function RestaurantExperience({ config: sourceConfig }: { config: RestaurantConfig }) {
  const { t } = useLanguage();
  const config = {
    ...sourceConfig,
    tagline: t("restaurant.tagline", sourceConfig.tagline),
    deliveryRadius: t("restaurant.deliveryRadius", sourceConfig.deliveryRadius),
    catering: sourceConfig.catering.map((item, index) => ({ ...item, name: t("restaurant.catering." + index + ".name", item.name), description: t("restaurant.catering." + index + ".description", item.description) })),
    labels: new Proxy(sourceConfig.labels, { get(target, key) { const value = Reflect.get(target, key); return typeof key === "string" && typeof value === "string" ? t("restaurant.labels." + key, value) : value; } }),
  };
  const [category, setCategory] = useState("ALL");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [reference, setReference] = useState("");
  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const localizedMenu = config.menu.map((item) => ({ ...item, name: t("restaurant.menu." + item.id, item.name), description: t("restaurant.menuDesc." + item.id, item.description) }));
  const categories = ["ALL", ...Array.from(new Set(localizedMenu.map((item) => item.category)))];
  const visibleMenu = category === "ALL" ? localizedMenu : localizedMenu.filter((item) => item.category === category);
  const cartItems = useMemo(() => localizedMenu.filter((item) => cart[item.id]), [cart, localizedMenu]);
  const total = cartItems.reduce((sum, item) => sum + item.priceLKR * cart[item.id], 0);

  useEffect(() => setIsMounted(true), []);
  function updateCart(id: string, amount: number) { setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + amount) })); }

  const orderMessage = cartItems.length ? "Hello Cinnamon & Lime, I would like to order:%0A%0A" + cartItems.map((item) => `${cart[item.id]} x ${item.name} - LKR ${(cart[item.id] * item.priceLKR).toLocaleString()}`).join("%0A") + `%0A%0ATotal: LKR ${total.toLocaleString()}` : config.whatsapp.defaultMessage;

  return <>
    <RestaurantDailySpecials specials={config.dailySpecials} deliveryRadius={config.deliveryRadius} theme={config.theme} labels={config.labels} />
    <section id="home" className="relative isolate min-h-[620px] overflow-hidden px-6 py-24 text-white md:py-36"><Image src={config.hero.image} alt="" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/20" /><div className="relative mx-auto flex min-h-[400px] max-w-6xl items-end"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-200">{config.tagline}</p><h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{t("restaurant.hero.title", config.hero.title)}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-stone-200">{t("restaurant.hero.subtitle", config.hero.subtitle)}</p><a href="#menu" className="ui-button mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-stone-950">{t("restaurant.hero.cta", config.hero.cta)}</a></div></div></section>

    <section id="menu" className="px-6 py-16 md:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]"><div><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{t("restaurant.labels.menuEyebrow", config.labels.menuEyebrow)}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{t("restaurant.labels.menuTitle", config.labels.menuTitle)}</h2></div><button type="button" onClick={() => window.print()} className="ui-button rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700 dark:text-white">{config.labels.printMenuLabel}</button></div><div className="mt-7 flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className="ui-button rounded-full px-4 py-2 text-sm font-semibold" style={category === item ? { backgroundColor: config.theme.primary, color: "white" } : { backgroundColor: "#f1f5f9", color: "#334155" }}>{item === "ALL" ? t("restaurant.labels.menuAllLabel", config.labels.menuAllLabel) : item}</button>)}</div><div className="mt-8 grid gap-4 sm:grid-cols-2">{visibleMenu.map((item) => <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800"><div className="relative aspect-[16/9]"><Image src={item.image} alt={item.name} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" /></div><div className="p-5"><div className="flex items-start justify-between gap-4"><h3 className="font-semibold dark:text-white">{t("restaurant.menu." + item.id, item.name)}</h3><span className="whitespace-nowrap font-semibold dark:text-white">LKR {item.priceLKR.toLocaleString()}</span></div><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p><div className="mt-4 flex items-center justify-between gap-3"><div className="flex flex-wrap gap-1">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-800 dark:bg-orange-950 dark:text-orange-200">{tag}</span>)}</div><button type="button" onClick={() => updateCart(item.id, 1)} className="ui-button rounded-full px-3 py-1.5 text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>Add</button></div></div></article>)}</div></div><aside className="h-fit rounded-3xl bg-stone-100 p-6 dark:bg-slate-900 lg:sticky lg:top-24"><h2 className="text-xl font-semibold dark:text-white">{t("restaurant.labels.orderTitle", config.labels.orderTitle)}</h2>{cartItems.length ? <div className="mt-5 space-y-4">{cartItems.map((item) => <div key={item.id} className="flex items-center justify-between gap-3 text-sm"><div><p className="font-medium dark:text-white">{t("restaurant.menu." + item.id, item.name)}</p><p className="text-slate-500">LKR {(item.priceLKR * cart[item.id]).toLocaleString()}</p></div><div className="flex items-center gap-2"><button type="button" onClick={() => updateCart(item.id, -1)} className="ui-button h-7 w-7 rounded-full border dark:border-slate-700">-</button><span>{cart[item.id]}</span><button type="button" onClick={() => updateCart(item.id, 1)} className="ui-button h-7 w-7 rounded-full border dark:border-slate-700">+</button></div></div>)}</div> : <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{t("restaurant.labels.orderEmptyLabel", config.labels.orderEmptyLabel)}</p>}<div className="mt-6 border-t border-stone-300 pt-4 dark:border-slate-700"><div className="flex justify-between font-semibold dark:text-white"><span>{t("restaurant.labels.orderTotalLabel", config.labels.orderTotalLabel)}</span><span>LKR {total.toLocaleString()}</span></div><a href={`https://wa.me/${config.whatsapp.number}?text=${orderMessage}`} target="_blank" rel="noopener noreferrer" className="ui-button mt-4 block rounded-full px-4 py-3 text-center text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>{t("restaurant.labels.orderWhatsAppLabel", config.labels.orderWhatsAppLabel)}</a></div></aside></div></section>

    <section id="catering" className="bg-orange-50 px-6 py-16 dark:bg-slate-900 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{config.labels.cateringEyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{config.labels.cateringTitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{config.catering.map((item) => <article key={item.name} className="rounded-3xl bg-white p-7 dark:bg-slate-950"><h3 className="text-xl font-semibold dark:text-white">{item.name}</h3><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p><p className="mt-6 text-lg font-semibold dark:text-white">LKR {item.pricePerHeadLKR.toLocaleString()} <span className="text-sm font-normal text-slate-500">{config.labels.perHeadLabel}</span></p><p className="mt-1 text-sm text-slate-500">{item.minimumGuests} {config.labels.minimumGuestsLabel}</p></article>)}</div>
        <CateringQuoteBuilder packages={config.catering} contact={config.contact} whatsapp={config.whatsapp} theme={config.theme} siteName={config.siteName} labels={config.labels} />
      </div>
    </section>
    <ExperienceGallery id="gallery" eyebrow={config.labels.galleryEyebrow} title={config.labels.galleryTitle} eyebrowKey="restaurant.labels.galleryEyebrow" titleKey="restaurant.labels.galleryTitle" images={config.gallery} accent={config.theme.primary} />
    <section id="social" className="bg-stone-100 px-6 py-16 dark:bg-slate-900 md:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{config.labels.socialEyebrow}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{config.labels.socialTitle}</h2><p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">{config.labels.socialDescription}</p><a href={config.instagramUrl} target="_blank" rel="noopener noreferrer" className="ui-button mt-7 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>{config.labels.socialCtaLabel}</a></div><div className="grid grid-cols-3 gap-3">{config.gallery.slice(1, 4).map((image) => <div key={image.src} className="relative aspect-square overflow-hidden rounded-2xl"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 20vw, 33vw" className="object-cover" /></div>)}</div></div></section>
    <section id="reserve" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl rounded-3xl bg-stone-100 p-6 dark:bg-slate-900 sm:p-8">
        {reservation ? (
          <div id="restaurant-reservation" className="text-center">
            <h2 className="text-2xl font-semibold dark:text-white">{config.labels.reservationConfirmationTitle}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{config.labels.reservationConfirmationReference.replace("{reference}", reference)}</p>
            <button type="button" onClick={() => window.print()} className="ui-button mt-6 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700 dark:text-white">{config.labels.printReservationLabel}</button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold dark:text-white">{config.labels.reservationTitle}</h2>
            <RestaurantReservationForm config={config} onConfirmed={(nextReservation, nextReference) => { setReservation(nextReservation); setReference(nextReference); }} />
          </>
        )}
      </div>
    </section>
    <BusinessContactSection eyebrow={config.labels.contactEyebrow} title={config.labels.contactTitle} eyebrowKey="restaurant.labels.contactEyebrow" titleKey="restaurant.labels.contactTitle" mapTitle={config.labels.mapTitle} contact={config.contact} whatsapp={config.whatsapp} theme={config.theme} actionLabel="Chat on WhatsApp" actionKey="common.chatWhatsapp" />
    {isMounted ? createPortal(<article id="restaurant-menu-print"><div className="menu-print-card"><header style={{ borderBottom: `4px solid ${config.theme.primary}` }}><img src={config.theme.logoImage} alt="" /><div><p>{t("print.menu.title", "Restaurant menu")}</p><h1>{config.siteName}</h1><span>{config.contact.address}</span></div></header>{categories.filter((item) => item !== "ALL").map((group) => <section key={group}><h2>{t(`print.menu.category.${group}`, group)}</h2>{localizedMenu.filter((item) => item.category === group).map((item) => <div key={item.id} className="menu-print-row"><div><strong>{item.name}</strong><p>{item.description}</p></div><strong>LKR {item.priceLKR.toLocaleString()}</strong></div>)}</section>)}<footer>{config.contact.hours}</footer></div></article>, document.body) : null}
    {reservation && isMounted ? createPortal(<RestaurantReservationReceipt siteName={config.siteName} contact={config.contact} theme={config.theme} reservation={reservation} reference={reference} />, document.body) : null}
  </>;
}
