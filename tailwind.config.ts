import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1140px",
        xl: "1280px",
      },
    },
    colors: {
      transparent: "transparent",
      black: { DEFAULT: "#000000" },
      brown: {
        DEFAULT: "#a58a46",
      },
      red: { DEFAULT: "#c23934" },
      white: { DEFAULT: "#ffffff" },
      green: { DEFAULT: "#6D6E3C" },
      orange: { DEFAULT: "#F8F1E9" },
    },
    fontFamily: {
      lora: ["Lora", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      garamonf: ["'EB Garamond'", "sans-serif"],
      abhaya: ["'Abhaya Libre'", "sans-serif"],
      sans: ['"Source Sans Pro"', "sans-serif"],
    },
    extend: {
      fontSize: {
        general: ["17px", "25px"],
      },
    },
  },
  content: {
    files: [
      "./src/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./src/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./src/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    ],
  },
  plugins: [],
};
