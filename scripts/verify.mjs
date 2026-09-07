import assert from "node:assert/strict";

const baseUrl = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

async function request(path, options) {
  const response = await fetch(`${baseUrl}${path}`, options);
  return response;
}

async function expectStatus(label, path, expectedStatus, options) {
  const response = await request(path, options);
  assert.equal(response.status, expectedStatus, `${label}: expected ${expectedStatus}, received ${response.status}`);
  console.log(`✓ ${label}`);
  return response;
}

async function postJson(path, payload) {
  return request(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function run() {
  console.log(`Verifying CYDO Demo Sites at ${baseUrl}\n`);

  for (const path of ["/", "/clinic", "/hotel", "/restaurant", "/robots.txt", "/sitemap.xml"]) {
    await expectStatus(`Public route ${path}`, path, 200);
  }

  const root = await request("/");
  assert.equal(root.headers.get("x-content-type-options"), "nosniff", "Security header X-Content-Type-Options is missing");
  assert.equal(root.headers.get("referrer-policy"), "strict-origin-when-cross-origin", "Referrer-Policy is missing");
  console.log("✓ Security response headers");

  await expectStatus("Branded 404 route", "/this-route-does-not-exist", 404);

  const invalidRequests = [
    ["Clinic validation", "/api/clinic/appointments", { name: "Test", phone: "0771234567", service: "cleaning", doctor: "Dr. Nadeesha Perera", date: futureDate, time: "09:00", website: "bot" }],
    ["Hotel validation", "/api/hotel/enquiries", { name: "Test", phone: "0771234567", room: "ocean-suite", checkIn: futureDate, checkOut: futureDate, guests: 2, website: "bot" }],
    ["Restaurant validation", "/api/restaurant/reservations", { name: "Test", phone: "0771234567", date: futureDate, time: "19:00", party: 2, website: "bot" }],
  ];

  for (const [label, path, payload] of invalidRequests) {
    const response = await postJson(path, payload);
    assert.equal(response.status, 400, `${label}: expected rejected payload`);
    assert.match(response.headers.get("cache-control") ?? "", /no-store/, `${label}: response must not be cached`);
    console.log(`✓ ${label} and non-cacheable response`);
  }

  const validRequests = [
    ["Clinic appointment", "/api/clinic/appointments", { name: "Test Visitor", phone: "0771234567", service: "cleaning", doctor: "Dr. Nadeesha Perera", date: futureDate, time: "09:30" }],
    ["Hotel enquiry", "/api/hotel/enquiries", { name: "Test Visitor", phone: "0771234567", room: "ocean-suite", checkIn: futureDate, checkOut: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), guests: 2 }],
    ["Restaurant reservation", "/api/restaurant/reservations", { name: "Test Visitor", phone: "0771234567", date: futureDate, time: "19:00", party: 2 }],
  ];

  for (const [label, path, payload] of validRequests) {
    const response = await postJson(path, payload);
    assert.equal(response.status, 201, `${label}: expected accepted payload`);
    const body = await response.json();
    assert.equal(body.ok, true, `${label}: expected ok response`);
    assert.ok(body.reference, `${label}: expected reference`);
    console.log(`✓ ${label} successful response`);
  }

  console.log("\nAll smoke checks passed.");
}

run().catch((error) => {
  console.error("\nVerification failed:", error.message);
  process.exitCode = 1;
});
