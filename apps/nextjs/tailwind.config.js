const { theme } = require('@universal/ui/tailwind/theme');
const themeColors = require('@universal/ui/tailwind/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const nativewind = require('nativewind/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../../packages/**/*.{js,jsx,ts,tsx}'],
  important: 'html',
  darkMode: 'class',
  presets: [nativewind],
  theme: {
    ...defaultTheme,
    ...theme,
    extend: {},
    colors: themeColors,
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      'roboto-bold': ['var(--font-roboto)'],
      'roboto-medium': ['var(--font-roboto)'],
      sans: ['var(--font-roboto)'],
    },
    fontWeight: {
      bold: 700,
      black: 900,
    },
  },
};
