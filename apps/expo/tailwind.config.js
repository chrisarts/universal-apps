const colors = require('tailwindcss/colors');
const baseTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    // "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors,
  },
  plugins: [],
};
