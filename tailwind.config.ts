import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primarydark: "var(--color-primary-dark)",
      },
      fontFamily: {
        site: "var(--font-site)",
      },
    },
  },
  plugins: [],
};
export default config;
