/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#152744',   // Dark blue navigation
        secondary: '#135280', // Medium blue
        accent: '#113a58',    // Hover state
        textPrimary: '#152744',
        lightGray: '#EEE',
      },
      fontFamily: {
        sans: ['Roboto', 'Lato', 'Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
