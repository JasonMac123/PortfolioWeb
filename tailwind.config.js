/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
