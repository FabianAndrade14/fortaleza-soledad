/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#020617',
        secondary: '#0f172a',
        accent: '#f97316',
      },
    },
  },
  plugins: [],
}