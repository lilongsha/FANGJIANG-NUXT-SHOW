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
      'sm': {'min': '320px', 'max': '1279px'},
      
      // => @media (min-width: 640px) { ... }

      // 'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1024px) { ... }
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
        'login-phone': "url('~/assets/img/login/phonebj.png')",
        'login-bg': "url('~/assets/img/login/bj.png')",
        'login-right': "url('~/assets/img/login/right.png')",
        'people': "url('~/assets/img/clue/people.png')",
        'rightbg': "url('~/assets/img/clue/rightbg.png')",
        'bimg': "url('~/assets/img/clue/bimg.png')",
        'list-ad': "url('~/assets/img/clue/listAd.png')",
        'clue-head': "url('~/assets/img/clue/head.png')",
        'about-1': "url('~/assets/img/about/map.jpg')",
        'about-2': "url('~/assets/img/about/about-02.jpg')",
        'index-menu': "url('~/assets/img/index-menu.png')",
        'bottom-lou': "url('~/assets/img/bottom/index_02.jpg')",
        'index-1': "url('~/assets/img/index/1.png')",
        'index-2': "url('~/assets/img/index/2.png')",
        'index-3': "url('~/assets/img/index/3.png')",
        'looks': "url('~/assets/img/looks.png')",
        'looks-gray': "url('~/assets/img/looks-gray.png')",
        'info-sort-bg': "url('~/assets/img/info/l_icon2.png')",
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
