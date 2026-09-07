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
    <section id="booking" className="mx-auto max-w-md px-6 py-14">
      <h2 className="mb-6 text-xl font-semibold">{config.labels.bookingTitle}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          {config.labels.nameLabel}
          <input required name="name" type="text" className="mt-1 w-full rounded-lg border px-4 py-2" />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          {config.labels.phoneLabel}
          <input required name="phone" type="tel" inputMode="tel" className="mt-1 w-full rounded-lg border px-4 py-2" />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          {config.labels.serviceLabel}
          <select required name="service" defaultValue="" className="mt-1 w-full rounded-lg border px-4 py-2">
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
        <label className="block text-sm font-medium text-gray-700">
          {config.labels.dateLabel}
          <input required name="date" type="date" className="mt-1 w-full rounded-lg border px-4 py-2" />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          {config.labels.timeLabel}
          <input required name="time" type="time" className="mt-1 w-full rounded-lg border px-4 py-2" />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg py-3 font-medium text-white"
          style={{ backgroundColor: config.theme.primary }}
        >
          {config.labels.submitLabel}
        </button>
      </form>
    </section>
  );
}
