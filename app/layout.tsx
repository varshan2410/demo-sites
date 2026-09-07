import "./globals.css";

export const metadata = {
  title: "CYDO Demo Sites",
  description: "Live demo sites for clinic, hotel, and restaurant clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
