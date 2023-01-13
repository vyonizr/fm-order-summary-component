/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        customPaleBlue: 'hsl(225, 100%, 94%)',
        customBrightBlue: 'hsl(245, 75%, 52%)',
        customVeryPaleBlue: 'hsl(225, 100%, 98%)',
        customDesaturatedBlue: 'hsl(224, 23%, 55%)',
        customDarkBlue: 'hsl(223, 47%, 23%)',
        cornflowerBlue: 'hsl(245, 83%, 68%)'
      },
      fontFamily: {
        sans: [
          'Red Hat Display',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  plugins: [],
}
