const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  prefix: 'fj-',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.gray
    },
    fontFamily: {},

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
