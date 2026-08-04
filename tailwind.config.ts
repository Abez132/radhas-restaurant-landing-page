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
          DEFAULT: "#AF3A0F",
          deep: "#7A280A",
          light: "#C94F1E",
        },
        saffron: {
          DEFAULT: "#EB6E0F",
          soft: "#F2A25C",
          deep: "#B4530A",
        },
        leaf: {
          DEFAULT: "#157A22",
          deep: "#0E5A19",
          soft: "#4C9C4F",
        },
        charcoal: "#2B2620",
        cream: {
          DEFAULT: "#FBF6EC",
          dark: "#F1E7D3",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "var(--font-noto-serif-ethiopic)", "Nyala", "Abyssinica SIL", "serif"],
        body: ["var(--font-poppins)", "var(--font-noto-serif-ethiopic)", "Nyala", "sans-serif"],
        ethiopic: ["var(--font-noto-serif-ethiopic)", "Nyala", "Abyssinica SIL", "serif"],
        "ethiopic-sans": ["var(--font-noto-sans-ethiopic)", "sans-serif"],
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "steam-rise": {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.55" },
          "100%": { transform: "translateY(-22px) scaleX(1.4)", opacity: "0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 4s ease-in-out infinite",
        flicker: "flicker 2.4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 26s linear infinite",
        "steam-rise": "steam-rise 2.8s ease-in infinite",
      },
    },
  },
  plugins: [],
};
export default config;
