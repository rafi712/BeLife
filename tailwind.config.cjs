/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E77E49',
        primaryBlue: '#0D326B',
      },
    },
  },
  plugins: [],
}
