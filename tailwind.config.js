const colors = require('./config/tailwind/color')

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
    screens: {
      // 'sm': '640px',
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      fjRed: colors.fjRed,
      fjYellow: colors.fjYellow,
      fjBlue: colors.fjBlue,
      ...colors,
    },
    textColor: {
      fjRed: '#da1111',
      fjYellow: '#eb670c',
      white: '#ffffff',
      black: '#000000',
      ...colors
    },
    fontFamily: {},
    extend: {
      backgroundImage: _theme => ({
        'index-menu': "url('~/assets/img/index-menu.png')",
        'bottom-lou': "url('~/assets/img/bottom/index_02.jpg')",
        'index-1': "url('~/assets/img/index/1.png')",
        'index-2': "url('~/assets/img/index/2.png')",
        'index-3': "url('~/assets/img/index/3.png')",
      }),
      width: {
        '1/10': '10%',
      },
      height: {
        '3/10': '30%',
        '7/10': '70%',
        '112': '28rem',
      },
      boxShadow: {
        around: '-2px -3px 0 0 rgba(0,0,0,0.5), 0 0 -3px -2px rgba(0,0,0,0.5)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
