/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)',
        yellow: 'hsl(47, 88%, 63%)'
      },
      dropShadow: {
        'xl': '10px 10px #000000',
      }
    },
  },
  plugins: [],
}

