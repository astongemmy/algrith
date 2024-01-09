import colors from './lib/colors';

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'intro-about': "url('/images/sections/intro-about.jpg'), linear-gradient(to bottom, rgba(0,0,0,.9), rgba(255,255,255,.6))",
        'intro-index-dark': "url('/images/sections/abstract-art-atom.jpeg')",
        'intro-index': "url('/images/sections/intro-index.jpeg')",
      }),
      fontFamily: {
        'nunito-black': ['Nunito-Black', 'sans-serif'],
        'nunito-light': ['Nunito-Light', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'gilroy': ['gilroy-font', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif']
      },
      colors: {
        'dark-mode-quaternary': colors.dark.quaternary,
        'dark-mode-secondary': colors.dark.secondary,
        'dark-mode-septenary': colors.dark.septenary,
        'dark-mode-octonary': colors.dark.octonary,
        'dark-mode-tertiary': colors.dark.tertiary,
        'theme-secondary': colors.theme.secondary,
        'dark-mode-quinary': colors.dark.quinary,
        'dark-mode-primary': colors.dark.primary,
        'dark-mode-senary': colors.dark.senary,
        'theme-primary': colors.theme.primary,
        'navyblue': '#0b214a'
      },
      spacing: {
        '13': '3.2rem',
        '23': '4.7rem',
        '33': '7.3rem',
        '84': '23rem',
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '166': '38rem',
        '188': '44rem',
      },
      fontSize: {
        '7.5xl': '5.5rem'
      },
      scale: {
        '35': '.35',
        '45': '.45',
        '65': '.65'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
