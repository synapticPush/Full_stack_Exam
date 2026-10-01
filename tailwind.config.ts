import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0C0A09",
        surface: {
          DEFAULT: "#1A1614",
          subtle: "#141110",
          hover: "#26201C",
          border: "rgba(242, 102, 10, 0.15)",
        },
        ember: {
          DEFAULT: "#F2660A",
          dark: "#D05103",
          light: "#FF7D29",
          glow: "#7C2D12",
        },
        flame: {
          DEFAULT: "#FF8A1E",
          bright: "#FFA24C",
        },
        gold: {
          DEFAULT: "#FACC15",
          spark: "#FDE047",
        },
        ash: {
          DEFAULT: "#A8A29E",
          dark: "#78716C",
          light: "#D6D3D1",
        },
        smoke: {
          DEFAULT: "#F5F5F4",
          white: "#FAFAF9",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        ember: "0 0 30px -5px rgba(242, 102, 10, 0.35)",
        "ember-lg": "0 0 60px -10px rgba(242, 102, 10, 0.5)",
        "ember-sm": "0 0 15px -3px rgba(242, 102, 10, 0.25)",
        gold: "0 0 30px -5px rgba(250, 204, 21, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "ember-gradient": "linear-gradient(135deg, #F2660A 0%, #FF8A1E 50%, #FACC15 100%)",
        "ember-dark": "linear-gradient(180deg, rgba(26, 22, 20, 0.8) 0%, rgba(12, 10, 9, 0.95) 100%)",
        "mesh-glow": "radial-gradient(circle at 50% 0%, rgba(242, 102, 10, 0.18) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee-left": "marqueeLeft 30s linear infinite",
        "marquee-right": "marqueeRight 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
