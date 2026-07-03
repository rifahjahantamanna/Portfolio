/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // toggling a "dark" class on <html> switches theme
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These read from CSS variables defined in index.css,
        // so the same class (e.g. bg-paper) looks different in light vs dark.
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        accent: "#C2542D",  // terracotta — from the warm rust background in your photo
        accent2: "#C79A45", // warm gold — from your mustard jacket
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
