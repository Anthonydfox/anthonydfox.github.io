/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        surface: '#101010', // Dark zinc/off-black
        primary: '#ffffff', // White text
        secondary: '#9ca3af', // Gray-400
      }
    },
  },
  plugins: [],
}
