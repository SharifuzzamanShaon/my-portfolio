/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Use the 'class' strategy for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Inter"]
      }
    },
  },
  plugins: [],
}