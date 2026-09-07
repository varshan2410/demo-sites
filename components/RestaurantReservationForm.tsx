"use client";

import { useState } from "react";
import type { RestaurantConfig } from "@/types/site";
import { queueSubmission } from "@/lib/offlineQueue";

type Reservation = { name: string; phone: string; date: string; time: string; party: number };
type FieldErrors = Record<string, string[] | undefined>;

export default function RestaurantReservationForm({
  config,
  onConfirmed,
}: {
  config: RestaurantConfig;
  onConfirmed: (reservation: Reservation, reference: string) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const today = new Date().toISOString().slice(0, 10);

  async function submitReservation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setFieldErrors({});

    try {
      const payload = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, unknown>;
      if (!navigator.onLine) {
        queueSubmission("/api/restaurant/reservations", payload);
        setError("You are offline. Your table request is queued and will send when you reconnect.");
        return;
      }
      const response = await fetch("/api/restaurant/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        const fields = result.fields ?? {};
        setError(Object.values(fields).flat().join(" ") || result.error || "Please check your details and try again.");
        setFieldErrors(fields);
        return;
      }

      await new Promise((resolve) => setTimeout(resolve, 280));
      onConfirmed(result.data, result.reference);
    } catch {
      const payload = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, unknown>;
      queueSubmission("/api/restaurant/reservations", payload);
      setError("We could not reach the server. Your table request is queued and will retry when you reconnect.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submitReservation} className="mt-6 grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium dark:text-slate-200">
        {config.labels.reservationNameLabel}
        <input required name="name" type="text" aria-invalid={Boolean(fieldErrors.name)} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 aria-[invalid=true]:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        {fieldErrors.name?.[0] ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.name[0]}</span> : null}
      </label>
      <label className="text-sm font-medium dark:text-slate-200">
        {config.labels.reservationPhoneLabel}
        <input required name="phone" type="tel" inputMode="tel" aria-invalid={Boolean(fieldErrors.phone)} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 aria-[invalid=true]:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        {fieldErrors.phone?.[0] ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.phone[0]}</span> : null}
      </label>
      <label className="text-sm font-medium dark:text-slate-200">
        {config.labels.reservationDateLabel}
        <input required name="date" type="date" min={today} aria-invalid={Boolean(fieldErrors.date)} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 aria-[invalid=true]:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        {fieldErrors.date?.[0] ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.date[0]}</span> : null}
      </label>
      <label className="text-sm font-medium dark:text-slate-200">
        {config.labels.reservationTimeLabel}
        <select required name="time" defaultValue="" aria-invalid={Boolean(fieldErrors.time)} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 aria-[invalid=true]:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
          <option value="" disabled>{config.labels.reservationTimePlaceholder}</option>
          {config.reservationSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
        </select>
        {fieldErrors.time?.[0] ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.time[0]}</span> : null}
      </label>
      <label className="text-sm font-medium dark:text-slate-200">
        {config.labels.reservationPartyLabel}
        <input required name="party" type="number" min="1" max="30" defaultValue="2" aria-invalid={Boolean(fieldErrors.party)} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-950 aria-[invalid=true]:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        {fieldErrors.party?.[0] ? <span className="mt-1 block text-xs text-red-600">{fieldErrors.party[0]}</span> : null}
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {error ? <p role="alert" className="sm:col-span-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      <button disabled={isSubmitting} type="submit" className="ui-button self-end rounded-full px-5 py-3 font-semibold text-white disabled:cursor-wait disabled:opacity-60" style={{ backgroundColor: config.theme.primary }}>
        {isSubmitting ? "Submitting..." : config.labels.reservationSubmitLabel}
      </button>
    </form>
  );
}
