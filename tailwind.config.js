/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neo-canvas": "#FFFDF5",
        "neo-ink": "#000000",
        "neo-accent": "#FF6B6B",
        "neo-secondary": "#FFD93D",
        "neo-muted": "#C4B5FD",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        neo: "8px 8px 0 0 #000",
        "neo-sm": "4px 4px 0 0 #000",
        "neo-lg": "12px 12px 0 0 #000",
        "neo-xl": "16px 16px 0 0 #000",
      },
    },
  },
  plugins: [],
};