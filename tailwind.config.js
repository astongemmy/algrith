const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      backgroundImage: theme => ({
        'intro-about': "url('/images/sections/intro-about.jpg'), linear-gradient(to bottom, rgba(0,0,0,.9), rgba(255,255,255,.6))",
        'intro-index-dark': "url('/images/sections/abstract-art-atom.jpeg')",
        'intro-index': "url('/images/sections/intro-index.jpeg')",
      }),
      scale: {
        '35': '.35',
        '45': '.45',
        '65': '.65'
      },
      textColor: {
        'algrith-green': '#2ca474',
        'navyblue': '#0b214a',
      },
      width: {
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '166': '38rem'
      },
      height: {
        '84': '23rem',
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '166': '38rem',
        '188': '44rem',
      },
      minHeight: {
        '84': '23rem',
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '166': '38rem',
        '188': '44rem',
      },
      padding: {
        '13': '3.2rem',
        '23': '4.7rem',
        '33': '7.3rem',
      },
      fontFamily: {
        'nunito-black': ['Nunito-Black', '"Public sans"'],
        'nunito-light': ['Nunito-Light', '"Public sans"'],
        'montserrat': ['Montserrat', '"Public sans"'],
        'manrope': ['Manrope', '"Public sans"'],
        'raleway': ['Raleway', '"Public sans"'],
        'gilroy': ['gilroy-font', 'sans-serif'],
        'roboto': ['Roboto', '"Public sans"'],
        'sans': ['Public sans', 'sans-serif'],
        'dosis': ['Dosis', '"Public sans"']
      },
      fontSize: {
        '7.5xl': '5.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
