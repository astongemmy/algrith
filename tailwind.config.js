module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'contact-us': 'url("/images/contact.png")',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
