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
    colors: {
      background: "#E8E6E3",
      gray: "#303436",
      black: "#000000",
      white: "#FFFFFF",
      messageReceived: "#ccd0ff",
      messageSent: "#d3d3d3",
      lightGray: "#DDDEEB"
    },
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Fonte para títulos
        body: ["Roboto", "sans-serif"], // Fonte para textos
      },
    },
  },
  plugins: [],
};
