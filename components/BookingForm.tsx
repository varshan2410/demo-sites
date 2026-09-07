"use client";

import { useState } from "react";
import type { ClinicConfig } from "@/types/site";
import { useLanguage } from "@/components/LanguageProvider";

type BookingDetails = Record<"name" | "service" | "doctor" | "date" | "time", string>;

export default function BookingForm({ config }: { config: ClinicConfig }) {
  const { t } = useLanguage();
  const [reference, setReference] = useState("");
  const [booking, setBooking] = useState<BookingDetails | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextReference = config.bookingReferencePrefix + "-" + Math.floor(100000 + Math.random() * 900000);

    setBooking({
      name: String(formData.get("name")),
      service: config.services.find((service) => service.id === formData.get("service"))?.name ?? "",
      doctor: String(formData.get("doctor")),
      date: String(formData.get("date")),
      time: String(formData.get("time")),
    });
    setReference(nextReference);
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
            <a href={"https://wa.me/" + config.whatsapp.number + "?text=" + encodeURIComponent(formatWhatsAppMessage())} target="_blank" rel="noopener noreferrer" className="rounded-full px-5 py-3 text-sm font-semibold text-white" style={{ backgroundColor: config.theme.primary }}>
              {config.labels.confirmationWhatsAppLabel}
            </a>
            <button type="button" onClick={() => window.print()} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
              {config.labels.printConfirmationLabel}
            </button>
          </div>
        </div>
      </section>
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
          <button type="submit" className="w-full rounded-lg py-3 font-medium text-white" style={{ backgroundColor: config.theme.primary }}>
            {t("clinic.labels.submitLabel", config.labels.submitLabel)}
          </button>
        </form>
      </div>
    </section>
  );
}
