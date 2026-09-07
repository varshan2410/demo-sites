import { z } from "zod";

const phone = z.string().trim().min(7, "Enter a valid phone number").max(30);
const date = z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format");

export const clinicAppointmentSchema = z.object({
  name: z.string().trim().min(2).max(100), phone,
  service: z.string().trim().min(1).max(80), doctor: z.string().trim().min(2).max(100),
  date, time: z.string().trim().regex(/^\d{2}:\d{2}$/, "Use HH:MM format"),
});

export const hotelEnquirySchema = z.object({
  name: z.string().trim().min(2).max(100), phone, room: z.string().trim().min(1).max(80),
  checkIn: date, checkOut: date, guests: z.coerce.number().int().min(1).max(20),
});

export const restaurantReservationSchema = z.object({
  name: z.string().trim().min(2).max(100), phone, date, time: z.string().trim().regex(/^\d{2}:\d{2}$/),
  party: z.coerce.number().int().min(1).max(30),
});

export function validationError(error: z.ZodError) {
  return Response.json({ ok: false, error: "Validation failed", fields: error.flatten().fieldErrors }, { status: 400 });
}

export function createReference(prefix: string) {
  return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
}
