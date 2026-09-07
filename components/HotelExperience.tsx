"use client";

import Image from "next/image";
import { useState } from "react";
import type { HotelConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

type Currency = "LKR" | "USD" | "EUR" | "GBP";

export default function HotelExperience({ config }: { config: HotelConfig }) {
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<Currency>("LKR");
  const [reference, setReference] = useState("");
  const [enquiry, setEnquiry] = useState<Record<string, string> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function formatPrice(value: number) {
    const converted = value * config.exchangeRates[currency];
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: currency === "LKR" ? 0 : 0,
    }).format(converted);
  }

  async function submitEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const room = config.rooms.find((item) => item.id === data.get("room"));
    setIsSubmitting(true); setError("");
    try {
      const response = await fetch("/api/hotel/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), phone: data.get("phone"), room: data.get("room"), checkIn: data.get("check-in"), checkOut: data.get("check-out"), guests: data.get("guests") }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please check your details and try again.");
      await new Promise((resolve) => setTimeout(resolve, 280));
      setReference(result.reference);
      setEnquiry({ name: result.data.name, room: room?.name ?? result.data.room, checkIn: result.data.checkIn, checkOut: result.data.checkOut, guests: String(result.data.guests) });
    } catch (submitError) { setError(submitError instanceof Error ? submitError.message : "Unable to submit enquiry."); }
    finally { setIsSubmitting(false); }
  }

  const whatsappMessage = enquiry
    ? "Hello Kahanda Cove, I would like to confirm stay enquiry " + reference + ". " + enquiry.room + ", " + enquiry.checkIn + " to " + enquiry.checkOut + ", " + enquiry.guests + " guest(s)."
    : config.whatsapp.defaultMessage;

  return (
    <>
      <section id="home" className="relative isolate min-h-[660px] overflow-hidden px-6 py-24 text-white md:py-36">
        <Image src={config.hero.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/20" />
        <div className="relative mx-auto flex min-h-[430px] max-w-6xl items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-100">{config.tagline}</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{t("hotel.hero.title", config.hero.title)}</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-200">{t("hotel.hero.subtitle", config.hero.subtitle)}</p>
            <a href="#availability" className="ui-button mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-stone-950 hover:bg-amber-50">
              {t("hotel.hero.cta", config.hero.cta)}
            </a>
          </div>
        </div>
      </section>

      <section id="rooms" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{t("hotel.labels.roomsEyebrow", config.labels.roomsEyebrow)}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{t("hotel.labels.roomsTitle", config.labels.roomsTitle)}</h2>
            </div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {t("hotel.labels.currencyLabel", config.labels.currencyLabel)}
              <select value={currency} onChange={(event) => setCurrency(event.target.value as Currency)} className="ml-3 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                <option value="LKR">LKR</option><option value="USD">USD</option><option value="EUR">EUR</option><option value="GBP">GBP</option>
              </select>
            </label>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {config.rooms.map((room, index) => (
              <article key={room.id} className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <div className="relative mb-6 h-40 overflow-hidden rounded-2xl">
                  <Image src={room.image} alt={room.name + " at " + config.siteName} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" style={{ objectPosition: index === 1 ? "center" : index === 2 ? "right" : "left" }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: config.theme.primary }}>{room.guests}</p>
                <h3 className="mt-2 text-xl font-semibold dark:text-white">{t("hotel.room." + room.id, room.name)}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{room.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {room.amenities.map((amenity) => <li key={amenity}>✓ {amenity}</li>)}
                </ul>
                <p className="mt-6 text-xl font-semibold dark:text-white">{formatPrice(room.rateLKR)} <span className="text-sm font-normal text-slate-500">{t("hotel.labels.roomsRateSuffix", config.labels.roomsRateSuffix)}</span></p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{t("hotel.labels.indicativeRateLabel", config.labels.indicativeRateLabel)}</p>
        </div>
      </section>

      <section id="experiences" className="bg-stone-100 px-6 py-16 dark:bg-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: config.theme.primary }}>{t("hotel.labels.attractionsEyebrow", config.labels.attractionsEyebrow)}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight dark:text-white md:text-4xl">{t("hotel.labels.attractionsTitle", config.labels.attractionsTitle)}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {config.attractions.map((place) => (
              <article key={place.name} className="rounded-2xl bg-white p-6 dark:bg-slate-950">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: config.theme.primary }}>{place.distance}</p>
                <h3 className="mt-3 text-lg font-semibold dark:text-white">{place.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{place.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="availability" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="rounded-full px-4 py-2 text-center text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>{t("hotel.labels.directBookingMessage", config.labels.directBookingMessage)}</p>
          {enquiry ? (
            <div id="hotel-voucher" className="mt-6 rounded-3xl border border-stone-200 p-8 text-center dark:border-slate-800">
              <h2 className="text-2xl font-semibold dark:text-white">{t("hotel.labels.confirmationTitle", config.labels.confirmationTitle)}</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{config.labels.confirmationReference.replace("{reference}", reference)}</p>
              <p className="mt-6 text-lg font-semibold dark:text-white">{enquiry.room}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{enquiry.checkIn} → {enquiry.checkOut} · {enquiry.guests} guest(s)</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={"https://wa.me/" + config.whatsapp.number + "?text=" + encodeURIComponent(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="ui-button rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>{t("hotel.labels.confirmationWhatsAppLabel", config.labels.confirmationWhatsAppLabel)}</a>
                <button type="button" onClick={() => window.print()} className="ui-button rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold dark:border-slate-700 dark:text-slate-200">{t("hotel.labels.printVoucherLabel", config.labels.printVoucherLabel)}</button>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-3xl bg-stone-50 p-6 dark:bg-slate-900 sm:p-8">
              <h2 className="text-2xl font-semibold dark:text-white">{t("hotel.labels.availabilityTitle", config.labels.availabilityTitle)}</h2>
              <form onSubmit={submitEnquiry} className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium dark:text-slate-200">{t("hotel.labels.checkInLabel", config.labels.checkInLabel)}<input required name="check-in" type="date" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>
                <label className="text-sm font-medium dark:text-slate-200">{t("hotel.labels.checkOutLabel", config.labels.checkOutLabel)}<input required name="check-out" type="date" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>
                <label className="text-sm font-medium dark:text-slate-200">{t("hotel.labels.guestsLabel", config.labels.guestsLabel)}<input required name="guests" type="number" min="1" max="6" defaultValue="2" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>
                <label className="text-sm font-medium dark:text-slate-200">{t("hotel.labels.roomLabel", config.labels.roomLabel)}<select required name="room" defaultValue="" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white"><option value="" disabled>{t("hotel.labels.roomPlaceholder", config.labels.roomPlaceholder)}</option>{config.rooms.map((room) => <option key={room.id} value={room.id}>{t("hotel.room." + room.id, room.name)}</option>)}</select></label>
                <label className="text-sm font-medium dark:text-slate-200">{t("hotel.labels.enquiryNameLabel", config.labels.enquiryNameLabel)}<input required name="name" type="text" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>
                <label className="text-sm font-medium dark:text-slate-200">{config.labels.enquiryPhoneLabel}<input required name="phone" type="tel" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-white" /></label>
                {error ? <p role="alert" className="sm:col-span-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
                <button disabled={isSubmitting} type="submit" className="ui-button sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-white disabled:cursor-wait disabled:opacity-60" style={{ backgroundColor: config.theme.primary }}>{isSubmitting ? <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />Submitting…</> : t("hotel.labels.enquirySubmitLabel", config.labels.enquirySubmitLabel)}</button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
