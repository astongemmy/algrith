module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'intro': "url('/images/sections/intro.jpeg')",
      }),
      scale: {
        '65': '.65',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
