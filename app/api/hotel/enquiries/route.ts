import { createReference, hotelEnquirySchema, isRateLimited, rateLimitError, validationError } from "@/lib/validation";
import { hotelConfig } from "@/config/hotel";

export async function POST(request: Request) {
  try {
    if (isRateLimited(request, "hotel-enquiry")) return rateLimitError();
    const payload = hotelEnquirySchema.parse(await request.json());
    if (!hotelConfig.rooms.some((room) => room.id === payload.room)) return Response.json({ ok: false, error: "Validation failed", fields: { room: ["Choose a valid room"] } }, { status: 400 });
    if (payload.checkIn < new Date().toISOString().slice(0, 10)) return Response.json({ ok: false, error: "Validation failed", fields: { checkIn: ["Choose today or a future date"] } }, { status: 400 });
    if (payload.checkOut <= payload.checkIn) return Response.json({ ok: false, error: "Check-out must be after check-in", fields: { checkOut: ["Choose a later date"] } }, { status: 400 });
    return Response.json({ ok: true, message: "Stay enquiry received", reference: createReference("CYDO-STAY"), data: payload }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "flatten" in error) return validationError(error as import("zod").ZodError);
    return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
}
