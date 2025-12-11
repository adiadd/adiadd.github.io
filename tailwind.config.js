/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        parchment: "#FAF6F1",
        surface: "#FFFDFB",
        ink: "#2D2926",
        "ink-faded": "#5C5552",
        gold: "#B8860B",
        sage: "#5C6B54",
        rose: "#C4A4A4",
        sepia: "#E8DED3",
        mahogany: "#1C1612",
        "warm-dark": "#252019",
        cream: "#F5EDE4",
        "cream-muted": "#A89F96",
        "gold-bright": "#D4A017",
        "sage-soft": "#8FA682",
        "sepia-dark": "#3D3530",
      },
    },
  },
  plugins: [],
};
