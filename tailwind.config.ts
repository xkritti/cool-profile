import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        prompt: ["var(--font-prompt)"],
      },
      colors: {
        // Design System: Base & Surface
        zinc: {
          950: '#09090b',
          900: '#18181b',
          800: '#27272a',
          600: '#52525b',
          400: '#a1a1aa',
          100: '#f4f4f5',
        },
        // Design System: Primary & Glow
        indigo: {
          500: '#6366f1',
        },
        purple: {
          400: '#c084fc',
        },
        pink: {
          400: '#e879f9',
        },
      },
      backgroundImage: {
        "gradient-web3": "linear-gradient(to right, #6366f1, #c084fc, #e879f9)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        marquee: "marquee 40s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
