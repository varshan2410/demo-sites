import { createReference, restaurantReservationSchema, validationError } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = restaurantReservationSchema.parse(await request.json());
    return Response.json({ ok: true, message: "Reservation request received", reference: createReference("CYDO-DINE"), data: payload }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "flatten" in error) return validationError(error as import("zod").ZodError);
    return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
}
