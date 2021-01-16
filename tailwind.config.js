module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'intro-index': "url('/images/sections/intro-index.jpeg')",
        'intro-about': "url('/images/sections/intro-about.jpg')",
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
