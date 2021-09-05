// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   gray: colors.gray
    // },
    fontFamily: {},

    extend: {
      backgroundImage: _theme => ({
        'index-menu': "url('~/assets/img/index-menu.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
