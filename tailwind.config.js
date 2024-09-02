/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        titilium: ['Titillium+Web', 'sans-serif'],
      }
    },
  },
  plugins: [],
}