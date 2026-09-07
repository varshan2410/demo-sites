import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CYDO Demo Sites",
    short_name: "CYDO Demos",
    description: "Config-driven customer website demos for clinic, hotel and restaurant businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0f766e",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
