// tailwind.config.js

const {
  tailwindColors,
  tailwindFontFamily,
  tailwindFontSize,
} = require("./src/styles/tailwind-theme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 기준
    "./pages/**/*.{js,ts,jsx,tsx}", // pages 폴더도 포함 (Page Router 기반일 때)
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // App Router 기반일 때
  ],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: tailwindFontFamily,
      fontSize: tailwindFontSize,
    },
  },
  plugins: [],
};
