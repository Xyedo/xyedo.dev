/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "Georgia", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
