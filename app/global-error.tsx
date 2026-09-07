"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f8fafc", color: "#0f172a" }}>
        <main style={{ display: "grid", minHeight: "100vh", placeItems: "center", padding: "24px", textAlign: "center" }}>
          <div style={{ maxWidth: "440px" }}>
            <p style={{ color: "#0f766e", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>CYDO Demo Sites</p>
            <h1>Something went wrong</h1>
            <p>Please try loading the page again.</p>
            <button type="button" onClick={reset} style={{ border: 0, borderRadius: "999px", background: "#0f766e", color: "white", cursor: "pointer", fontWeight: 700, marginTop: "12px", padding: "12px 20px" }}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
