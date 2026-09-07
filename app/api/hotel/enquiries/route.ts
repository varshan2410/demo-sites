import { createReference, hotelEnquirySchema, validationError } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = hotelEnquirySchema.parse(await request.json());
    if (payload.checkOut <= payload.checkIn) return Response.json({ ok: false, error: "Check-out must be after check-in", fields: { checkOut: ["Choose a later date"] } }, { status: 400 });
    return Response.json({ ok: true, message: "Stay enquiry received", reference: createReference("CYDO-STAY"), data: payload }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "flatten" in error) return validationError(error as import("zod").ZodError);
    return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
}
