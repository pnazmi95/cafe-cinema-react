/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Josefin Sans", "sans-serif"],
    },
    colors: {
      dark: {
        primary: "#181818",
        secondary: "#313131",
        heading: "#ffffff",
        content: "#AAAAAA",
        error: "#a374dc",
        hover: "#06b7a6",
      },
      light: {
        primary: "#bdbdbd",
        secondary: "#e0e0e0",
        heading: "#3d3d3d",
        content: "#555555",
        error: "#a374dc",
        hover: "#06b7a6",
      },
    },
    extend: {},
  },
  plugins: [],
};
