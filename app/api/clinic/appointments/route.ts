import { clinicAppointmentSchema, createReference, validationError } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = clinicAppointmentSchema.parse(await request.json());
    return Response.json({ ok: true, message: "Appointment request received", reference: createReference("CYDO-CLINIC"), data: payload }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "flatten" in error) return validationError(error as import("zod").ZodError);
    return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
}
