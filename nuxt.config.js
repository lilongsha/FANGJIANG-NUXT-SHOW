export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '房匠',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/css/ant/antd.css'
  ],

  script: [
    {
      type: 'text/javascript',
      src: 'https://webapi.amap.com/maps?v=2.0&key=373bc52968224086cc848f3981e30d07&plugin=AMap.Scale,AMap.HawkEye,AMap.ToolBar,AMap.ControlBar'
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // 
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:9000', // Used as fallback if no runtime config is provided
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // tailwindcss module configuration: https://tailwindcss.com/docs
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },

  // svg module configuration: https://github.com/nuxt-community/svg-module
  svg: {
    vueSvgLoader: {
        // vue-svg-loader options
    },
    svgSpriteLoader: {
        // svg-sprite-loader options
    }
  },

  loading: '~/components/app/Loading.vue',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // debugger 调试
    extend(config, { isClient }) {
      // Run ESLint on save
      if (isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  }
}
