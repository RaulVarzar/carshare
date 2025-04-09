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
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        jersey: ["var(--font-jersey)"],
        cairo: ["var(--font-cairo)"],
      },
      transitionTimingFunction: {
        myEase: "cubic-bezier(0.430, 0.005, 0.275, 0.985)",
      },
      fontSize: {
        xxl: "14rem",
      },
      animation: {
        "slide-left-out": "0.4s ease-in forwards slide-left-out",
        "slide-left-in": "0.4s ease-out slide-left-in",
        "slide-right-out": "0.4s ease-in forwards slide-right-out",
        "slide-right-in": "0.4s ease-out slide-right-in",
      },
      keyframes: {
        "slide-left-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "slide-left-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-out": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "slide-right-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          "base-100": "#0c0d0d",
          "base-200": "#0f1010",
          "base-300": "#111212",

          neutral: "#14191a",
          "neutral-content": "#a4a3a2",
          "accent-content": "#E69251",
          "info-content": "#B5B6C5",
          "base-content": "#efeeec",
          "primary-content": "#E69251",
          accent: "#E07624",
          primary: "#E27E32",
          secondary: "#DF8F51",

          error: "#FF6B6B",
        },
      },
    ],
  },
};
export default config;
