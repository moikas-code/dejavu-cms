import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B46C1",
          light: "#8B5CF6",
          dark: "#5B21B6",
        },
        accent: {
          DEFAULT: "#FFD700",
          light: "#FFED4E",
          dark: "#F59E0B",
        },
        background: {
          DEFAULT: "#0A0A0A",
          secondary: "#1A1A1A",
          tertiary: "#2A2A2A",
        },
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.08)",
          active: "rgba(255, 255, 255, 0.12)",
        },
        foreground: {
          DEFAULT: "#FFFFFF",
          secondary: "#A0A0A0",
          muted: "#707070",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["SF Pro Display", "Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;