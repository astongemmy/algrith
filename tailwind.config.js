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
        'dark-mode-quaternary': process.env.NEXT_PUBLIC_DARK_MODE_QUATERNARY_COLOR,
        'dark-mode-secondary': process.env.NEXT_PUBLIC_DARK_MODE_SECONDARY_COLOR,
        'dark-mode-septenary': process.env.NEXT_PUBLIC_DARK_MODE_SEPTENARY_COLOR,
        'dark-mode-octonary': process.env.NEXT_PUBLIC_DARK_MODE_OCTONARY_COLOR,
        'dark-mode-tertiary': process.env.NEXT_PUBLIC_DARK_MODE_TERTIARY_COLOR,
        'dark-mode-quinary': process.env.NEXT_PUBLIC_DARK_MODE_QUINARY_COLOR,
        'dark-mode-primary': process.env.NEXT_PUBLIC_DARK_MODE_PRIMARY_COLOR,
        'dark-mode-senary': process.env.NEXT_PUBLIC_DARK_MODE_SENARY_COLOR,
        'theme-secondary': process.env.NEXT_PUBLIC_SECONDARY_THEME_COLOR,
        'theme-primary': process.env.NEXT_PUBLIC_PRIMARY_THEME_COLOR,
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
