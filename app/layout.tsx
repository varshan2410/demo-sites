import "./globals.css";
import type { Metadata } from "next";
import OfflineSubmissionQueue from "@/components/OfflineSubmissionQueue";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: {
    default: "CYDO Demo Sites",
    template: "%s | CYDO Demo Sites",
  },
  description: "Config-driven customer website demos for clinic, hotel, and restaurant businesses.",
  applicationName: "CYDO Demo Sites",
  keywords: ["clinic website", "hotel website", "restaurant website", "Sri Lanka", "CYDO"],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ServiceWorkerRegistration />
        <OfflineSubmissionQueue />
        {children}
      </body>
    </html>
  );
}
