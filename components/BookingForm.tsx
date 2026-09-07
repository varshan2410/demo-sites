"use client";

import { useState } from "react";
import type { SiteConfig } from "@/lib/getSiteConfig";

export default function BookingForm({ config }: { config: SiteConfig }) {
  const [submitted, setSubmitted] = useState(false);
  const [reference, setReference] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ref = "BK" + Math.floor(100000 + Math.random() * 900000);
    setReference(ref);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="booking" className="px-6 py-14 max-w-md mx-auto text-center">
        <h2 className="text-xl font-semibold mb-2">Booking received</h2>
        <p className="text-gray-600 mb-4">
          Your reference number is <span className="font-mono font-semibold">{reference}</span>.
          We'll confirm shortly via WhatsApp.
        </p>
      </section>
    );
  }

  return (
    <section id="booking" className="px-6 py-14 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6">Book an appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input required type="text" placeholder="Full name" className="w-full border rounded-lg px-4 py-2" />
        <input required type="tel" placeholder="Phone number" className="w-full border rounded-lg px-4 py-2" />
        <select required className="w-full border rounded-lg px-4 py-2">
          <option value="">Select a service</option>
          {config.services.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <input required type="date" className="w-full border rounded-lg px-4 py-2" />
        <input required type="time" className="w-full border rounded-lg px-4 py-2" />
        <button
          type="submit"
          className="w-full text-white font-medium py-3 rounded-lg"
          style={{ backgroundColor: config.theme.primary }}
        >
          Confirm booking
        </button>
      </form>
    </section>
  );
}
