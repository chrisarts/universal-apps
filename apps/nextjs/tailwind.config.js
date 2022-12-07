const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  important: 'html',
  theme: {
    extend: {},
    colors,
  },
  plugins: [require("nativewind/tailwind/css")],
};
