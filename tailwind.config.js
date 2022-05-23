const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      backgroundImage: theme => ({
        'intro-index': "url('/images/sections/intro-index.jpeg')",
        'intro-about': "url('/images/sections/intro-about.jpg'), linear-gradient(to bottom, rgba(0,0,0,.9), rgba(255,255,255,.6))",
      }),
      scale: {
        '35': '.35',
        '45': '.45',
        '65': '.65'
      },
      textColor: {
        'navyblue': '#0B214A',
      },
      width: {
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '166': '38rem'
      },
      height: {
        '112': '26rem',
        '126': '28rem',
        '144': '32rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
