import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "Fira Code", "monospace"],
        sans: ["var(--font-space)", "Space Grotesk", "sans-serif"],
        display: ["var(--font-clash)", "Clash Display", "sans-serif"],
      },
      colors: {
        carbon: "#0d0d0d",
        jet: "#111111",
        charcoal: "#1a1a1a",
        ash: "#2a2a2a",
        smoke: "#3a3a3a",
        mist: "#888888",
        silver: "#aaaaaa",
        paper: "#f5f4f0",
        cream: "#eeece6",
        stone: "#d4d0c8",
        accent: "#e8e4dc",
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
        "scroll-left-slow": "scrollLeft 50s linear infinite",
        "scroll-right-slow": "scrollRight 50s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "line-expand": "lineExpand 0.8s ease forwards",
        "cursor-blink": "cursorBlink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineExpand: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
