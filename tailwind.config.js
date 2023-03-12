/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        "display: ": ["Roboto Flex", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purplegray: "#2D2342",
        purplegrayLight: "#7D7DA6",
        evogray: "#494949",
      },
    },
  },
  plugins: [],
};
