import { clinicAppointmentSchema, createReference, isRateLimited, rateLimitError, validationError } from "@/lib/validation";
import { clinicConfig } from "@/config/clinic";

export async function POST(request: Request) {
  try {
    if (isRateLimited(request, "clinic-appointment")) return rateLimitError();
    const payload = clinicAppointmentSchema.parse(await request.json());
    if (!clinicConfig.services.some((service) => service.id === payload.service)) return Response.json({ ok: false, error: "Validation failed", fields: { service: ["Choose a valid treatment"] } }, { status: 400 });
    if (!clinicConfig.doctors.some((doctor) => doctor.name === payload.doctor)) return Response.json({ ok: false, error: "Validation failed", fields: { doctor: ["Choose a valid dentist"] } }, { status: 400 });
    if (payload.date < new Date().toISOString().slice(0, 10)) return Response.json({ ok: false, error: "Validation failed", fields: { date: ["Choose today or a future date"] } }, { status: 400 });
    return Response.json({ ok: true, message: "Appointment request received", reference: createReference("CYDO-CLINIC"), data: payload }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && "flatten" in error) return validationError(error as import("zod").ZodError);
    return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }
}
