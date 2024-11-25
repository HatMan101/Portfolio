/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{html,js}',
  ],
  theme: {
    extend: {
      spacing: {
        '58': '14.375rem',
        '85': '21.875rem',
      },
      fontSize: {
        '10xl': '8rem',
      },
    },
  },
  plugins: [],
}

