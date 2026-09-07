import { z } from "zod";

const phone = z.string().trim().min(7, "Enter a valid phone number").max(30);
const date = z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format");
const honeypot = z.string().max(0, "Spam submission rejected").optional().default("");

export const clinicAppointmentSchema = z.object({
  name: z.string().trim().min(2).max(100), phone,
  service: z.string().trim().min(1).max(80), doctor: z.string().trim().min(2).max(100),
  date, time: z.string().trim().regex(/^\d{2}:\d{2}$/, "Use HH:MM format"), website: honeypot,
});

export const hotelEnquirySchema = z.object({
  name: z.string().trim().min(2).max(100), phone, room: z.string().trim().min(1).max(80),
  checkIn: date, checkOut: date, guests: z.coerce.number().int().min(1).max(20), website: honeypot,
});

export const restaurantReservationSchema = z.object({
  name: z.string().trim().min(2).max(100), phone, date, time: z.string().trim().regex(/^\d{2}:\d{2}$/),
  party: z.coerce.number().int().min(1).max(30), website: honeypot,
});

export function validationError(error: z.ZodError) {
  return apiResponse({ ok: false, error: "Validation failed", fields: error.flatten().fieldErrors }, { status: 400 });
}

export function apiResponse(body: unknown, init: ResponseInit = {}) {
  return Response.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...init.headers,
    },
  });
}

export function createReference(prefix: string) {
  return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
}

const requestLog = new Map<string, number[]>();

export function isRateLimited(request: Request, scope: string, limit = 6, windowMs = 60_000) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const client = forwardedFor || request.headers.get("x-real-ip") || "local";
  const key = `${scope}:${client}`;
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= limit) return true;
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

export function rateLimitError() {
  return apiResponse({ ok: false, error: "Too many requests. Please wait a minute and try again.", fields: {} }, { status: 429 });
}
