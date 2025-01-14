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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],

          "accent-content": "#17191c",
          accent: "#e8946d",
        },
      },
    ],
  },
};
export default config;
