module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'intro-index': "url('/images/sections/intro-index.jpeg')",
'intro-about': "url('/images/sections/intro-about.jpg'), linear-gradient(to bottom, rgba(0,0,0,.9), rgba(255,255,255,.6))",
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
