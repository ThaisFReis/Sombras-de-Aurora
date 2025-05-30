/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "410px",
      tablet: "783px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Fonte para títulos
        body: ["Roboto", "sans-serif"], // Fonte para textos
        quicksand: ["Quicksand", "sans-serif"], // Fonte Quicksand
        josefin: ["Josefin Sans", "sans-serif"], // Fonte Josefin Sans
        ubuntu: ["Ubuntu", "sans-serif"], // Fonte Ubuntu
        sourceSans: ["Source Sans 3", "sans-serif"], // Fonte Source Sans 3
        crimson: ["Crimson Text", "serif"], // Fonte Crimson Text
        lora: ["Lora", "serif"], // Fonte Lora
        imFell: ["IM Fell English", "serif"], // Fonte IM Fell English
        bebas: ["Bebas Neue", "sans-serif"], // Fonte Bebas Neue
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
