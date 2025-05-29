/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', visibility: 'hidden' }
        }
      },
      animation: {
        fadeOut: 'fadeOut 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}