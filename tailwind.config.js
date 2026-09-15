/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Keep in sync with constants/theme.js
      colors: {
        background: "#EAECF0",
        surface: "#FFFFFF",
        field: "#F4F5F7",
        primary: "#FE7F2D",
        slate: "#233D4D",
        ink: "#000000",
      },
    },
  },
  plugins: [],
};
