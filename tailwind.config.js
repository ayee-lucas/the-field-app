/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fieldGreen: "#03b50f",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        openSans: ['var(--font-open-sans)'],
        playfair: ['var(--font-playfair)'],
        flowCircular: ['var(--font-flow-circular)'],
        quicksand: ['var(--font-quicksand)'],
        ubuntu: ['var(--font-ubuntu)'],
      }
    },
  },
  plugins: [],
};
