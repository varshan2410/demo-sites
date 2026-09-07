"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // A service worker must not control the Next.js development server. Dev chunk
    // URLs are reused after recompilation, so caching them can load incompatible
    // Webpack modules and produce the `options.factory` runtime error.
    if (process.env.NODE_ENV === "development") {
      void navigator.serviceWorker.getRegistrations().then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister())),
      );

      if ("caches" in window) {
        void caches.keys().then((keys) =>
          Promise.all(keys.filter((key) => key.startsWith("cydo-demo-sites-")).map((key) => caches.delete(key))),
        );
      }
      return;
    }

    navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).catch(() => {
      // Offline support is progressive enhancement; the application stays usable without it.
    });
  }, []);

  return null;
}
