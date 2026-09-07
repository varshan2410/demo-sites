import { apiResponse, createReference, isRateLimited, rateLimitError, restaurantReservationSchema, validationError } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    if (isRateLimited(request, "restaurant-reservation")) return rateLimitError();
    const payload = restaurantReservationSchema.parse(await request.json());
    if (payload.date < new Date().toISOString().slice(0, 10)) return apiResponse({ ok: false, error: "Validation failed", fields: { date: ["Choose today or a future date"] } }, { status: 400 });
    return apiResponse({ ok: true, message: "Reservation request received", reference: createReference("CYDO-DINE"), data: payload }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "flatten" in error) return validationError(error as import("zod").ZodError);
    return apiResponse({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
}
