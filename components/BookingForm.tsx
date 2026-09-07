"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ClinicConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

type BookingDetails = Record<"name" | "service" | "doctor" | "date" | "time", string>;

export default function BookingForm({ config }: { config: ClinicConfig }) {
  const { t } = useLanguage();
  const [reference, setReference] = useState("");
  const [booking, setBooking] = useState<BookingDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/clinic/appointments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(formData)) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please check your details and try again.");
      await new Promise((resolve) => setTimeout(resolve, 280));
      setBooking({ name: result.data.name, service: config.services.find((service) => service.id === result.data.service)?.name ?? result.data.service, doctor: result.data.doctor, date: result.data.date, time: result.data.time });
      setReference(result.reference);
    } catch (submitError) { setError(submitError instanceof Error ? submitError.message : "Unable to submit request."); }
    finally { setIsSubmitting(false); }
  }

  function formatWhatsAppMessage() {
    if (!booking) return config.whatsapp.defaultMessage;

    return config.labels.confirmationWhatsAppMessage
      .replace("{reference}", reference)
      .replace("{name}", booking.name)
      .replace("{service}", booking.service)
      .replace("{doctor}", booking.doctor)
      .replace("{date}", booking.date)
      .replace("{time}", booking.time);
  }

  if (booking) {
    return (
      <>
        <section id="booking" className="bg-slate-50 px-6 py-16 dark:bg-slate-900 md:py-24">
          <div id="booking-confirmation" className="mx-auto max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800">
            <h2 className="mb-2 text-2xl font-semibold dark:text-white">{t("clinic.labels.confirmationTitle", config.labels.confirmationTitle)}</h2>
            <p className="mb-2 text-slate-600 dark:text-slate-300">{config.labels.confirmationReference.replace("{reference}", reference)}</p>
            <p className="text-slate-600 dark:text-slate-300">{t("clinic.labels.confirmationMessage", config.labels.confirmationMessage)}</p>
            <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-left dark:bg-slate-900">
              <h3 className="font-semibold dark:text-white">{t("clinic.labels.bookingDetailsTitle", config.labels.bookingDetailsTitle)}</h3>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div><dt className="text-slate-500 dark:text-slate-400">{t("clinic.labels.nameLabel", config.labels.nameLabel)}</dt><dd className="font-medium dark:text-white">{booking.name}</dd></div>
                <div><dt className="text-slate-500 dark:text-slate-400">{t("clinic.labels.serviceLabel", config.labels.serviceLabel)}</dt><dd className="font-medium dark:text-white">{booking.service}</dd></div>
                <div><dt className="text-slate-500 dark:text-slate-400">{config.labels.doctorLabel}</dt><dd className="font-medium dark:text-white">{booking.doctor}</dd></div>
                <div><dt className="text-slate-500 dark:text-slate-400">{config.labels.requestedDateLabel}</dt><dd className="font-medium dark:text-white">{booking.date}</dd></div>
                <div><dt className="text-slate-500 dark:text-slate-400">{config.labels.requestedTimeLabel}</dt><dd className="font-medium dark:text-white">{booking.time}</dd></div>
              </dl>
            </div>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={"https://wa.me/" + config.whatsapp.number + "?text=" + encodeURIComponent(formatWhatsAppMessage())} target="_blank" rel="noopener noreferrer" className="ui-button rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>{config.labels.confirmationWhatsAppLabel}</a>
              <button type="button" onClick={() => window.print()} className="ui-button rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">{config.labels.printConfirmationLabel}</button>
            </div>
          </div>
        </section>
        {isMounted ? createPortal(
          <article id="appointment-receipt">
            <div className="receipt-card">
              <header className="receipt-header" style={{ backgroundColor: config.theme.primary }}><p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>Appointment receipt</p><h1 style={{ margin: "8px 0 0", fontSize: 26 }}>{config.siteName}</h1><p style={{ margin: "6px 0 0", opacity: .86 }}>{config.contact.address}</p></header>
              <div className="receipt-body"><p style={{ margin: "0 0 20px", fontSize: 15 }}>Request received · Reference <strong>{reference}</strong></p><div className="receipt-grid"><div><p className="receipt-label">Patient</p><p className="receipt-value">{booking.name}</p></div><div><p className="receipt-label">Treatment</p><p className="receipt-value">{booking.service}</p></div><div><p className="receipt-label">Preferred dentist</p><p className="receipt-value">{booking.doctor}</p></div><div><p className="receipt-label">Requested date</p><p className="receipt-value">{booking.date}</p></div><div><p className="receipt-label">Requested time</p><p className="receipt-value">{booking.time}</p></div><div><p className="receipt-label">Status</p><p className="receipt-value">Pending confirmation</p></div></div><footer className="receipt-footer">This is a request receipt, not a confirmed appointment. Our team will contact you via WhatsApp to confirm your visit.<br />{config.contact.hours}</footer></div>
            </div>
          </article>, document.body) : null}
      </>
    );
  }

  return (
    <section id="booking" className="bg-slate-50 px-6 py-16 dark:bg-slate-900 md:py-24">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800 sm:p-8">
        <h2 className="mb-6 text-2xl font-semibold dark:text-white">{t("clinic.labels.bookingTitle", config.labels.bookingTitle)}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("clinic.labels.nameLabel", config.labels.nameLabel)}
            <input required name="name" type="text" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("clinic.labels.phoneLabel", config.labels.phoneLabel)}
            <input required name="phone" type="tel" inputMode="tel" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("clinic.labels.serviceLabel", config.labels.serviceLabel)}
            <select required name="service" defaultValue="" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              <option value="" disabled>{t("clinic.labels.servicePlaceholder", config.labels.servicePlaceholder)}</option>
              {config.services.map((service) => <option key={service.id} value={service.id}>{t("clinic.service." + service.id, service.name)}</option>)}
            </select>
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("clinic.labels.doctorLabel", config.labels.doctorLabel)}
            <select required name="doctor" defaultValue="" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              <option value="" disabled>{t("clinic.labels.doctorPlaceholder", config.labels.doctorPlaceholder)}</option>
              {config.doctors.map((doctor) => <option key={doctor.name} value={doctor.name}>{doctor.name} — {doctor.specialty}</option>)}
            </select>
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("clinic.labels.dateLabel", config.labels.dateLabel)}
            <input required name="date" type="date" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {t("clinic.labels.timeLabel", config.labels.timeLabel)}
            <input required name="time" type="time" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
          {error ? <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          <button disabled={isSubmitting} type="submit" className="ui-button inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium text-white disabled:cursor-wait disabled:opacity-60" style={{ backgroundColor: config.theme.primary }}>
            {isSubmitting ? <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />Submitting…</> : t("clinic.labels.submitLabel", config.labels.submitLabel)}
          </button>
        </form>
      </div>
    </section>
  );
}
