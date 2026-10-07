/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#030712",
        surface: "#0A101D",
        surface2: "#0F172A",
        surfaceElevated: "#162035",
        line: "#1E293B",
        lineLight: "#334155",
        ink: "#F1F5F9",
        muted: "#94A3B8",
        signal: {
          DEFAULT: "#38BDF8",
          light: "#7DD3FC",
          dark: "#0284C7",
          glow: "rgba(56, 189, 248, 0.25)",
        },
        amber: "#F0A857",
        violet: "#A78BFA",
        emerald: "#34D399",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(69, 217, 201, 0.25)",
        glowAmber: "0 0 40px -10px rgba(240, 168, 87, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        flow: {
          "0%": { strokeDashoffset: 40 },
          "100%": { strokeDashoffset: 0 },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.4, transform: "scale(0.85)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: 0.35 },
          "50%": { transform: "translate(20px, -20px) scale(1.1)", opacity: 0.5 },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        flow: "flow 1.2s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        aurora: "aurora 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
