module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
backgroundImage: theme => ({
         'intro': "url('/images/images (2).jpeg')",
        })},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
