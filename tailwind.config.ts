import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0e0c0a",
          secondary: "#141210",
          card: "#1a1714",
          hover: "#201d1a",
        },
        copper: {
          50: "#fdf4ee",
          100: "#f9e4d2",
          200: "#f2c8a4",
          300: "#e8a570",
          400: "#dc8040",
          500: "#c96830",
          600: "#b05224",
          700: "#8f3f1e",
          800: "#73331c",
          900: "#5e2c1a",
        },
        stone: {
          750: "#3a3530",
          850: "#252220",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "noise": "url('/noise.svg')",
        "copper-gradient": "linear-gradient(135deg, #c96830 0%, #8f3f1e 100%)",
        "card-gradient": "linear-gradient(145deg, #1e1a17 0%, #141210 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.5s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "copper": "0 0 0 1px rgba(201, 104, 48, 0.3)",
        "copper-glow": "0 0 20px rgba(201, 104, 48, 0.15)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
