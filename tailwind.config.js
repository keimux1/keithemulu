/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Background': '#101214',
        "CallToAction": "#011D20",
      }
    },
  },
  plugins: [],
}