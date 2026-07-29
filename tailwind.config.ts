import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7A1F1F",
          deep: "#4A1212",
          light: "#9C2E2E",
        },
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#E8CD7A",
          deep: "#A8842A",
        },
        charcoal: "#2E2E2E",
        cream: {
          DEFAULT: "#F8F3EA",
          dark: "#EFE6D3",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        ethiopic: ["var(--font-noto-ethiopic)", "sans-serif"],
      },
      backgroundImage: {
        "paisley-pattern": "url('/images/paisley-pattern.svg')",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 4s ease-in-out infinite",
        flicker: "flicker 2.4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
