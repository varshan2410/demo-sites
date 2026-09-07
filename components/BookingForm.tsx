"use client";

import { useState } from "react";
import type { ClinicConfig } from "@/types/site";

export default function BookingForm({ config }: { config: ClinicConfig }) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextReference =
      config.bookingReferencePrefix + "-" + Math.floor(100000 + Math.random() * 900000);
    setReference(nextReference);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="booking" className="mx-auto max-w-md px-6 py-14 text-center">
        <h2 className="mb-2 text-xl font-semibold">{config.labels.confirmationTitle}</h2>
        <p className="mb-2 text-gray-600">
          {config.labels.confirmationReference.replace("{reference}", reference)}
        </p>
        <p className="text-gray-600">{config.labels.confirmationMessage}</p>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-slate-50 px-6 py-16 dark:bg-slate-900 md:py-24">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-800 sm:p-8">
      <h2 className="mb-6 text-2xl font-semibold dark:text-white">{config.labels.bookingTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          {config.labels.nameLabel}
          <input required name="name" type="text" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          {config.labels.phoneLabel}
          <input required name="phone" type="tel" inputMode="tel" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          {config.labels.serviceLabel}
          <select required name="service" defaultValue="" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
            <option value="" disabled>
              {config.labels.servicePlaceholder}
            </option>
            {config.services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          {config.labels.doctorLabel}
          <select required name="doctor" defaultValue="" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
            <option value="" disabled>
              {config.labels.doctorPlaceholder}
            </option>
            {config.doctors.map((doctor) => (
              <option key={doctor.name} value={doctor.name}>
                {doctor.name} — {doctor.specialty}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          {config.labels.dateLabel}
          <input required name="date" type="date" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          {config.labels.timeLabel}
          <input required name="time" type="time" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg py-3 font-medium text-white"
          style={{ backgroundColor: config.theme.primary }}
        >
          {config.labels.submitLabel}
        </button>
      </form>
      </div>
    </section>
  );
}
