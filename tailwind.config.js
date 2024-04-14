/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        bgOne: "url('./assets/scifi.jpg')",
        cat:"url('./assets/cat.jpg')"

      }
    },
  },
  plugins: [],
}