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
  },
  plugins: [require("tw-elements/dist/plugin")],
};
