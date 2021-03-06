// import { Api } from "./api/user/userApi";

const dev = process.env.NODE_ENV !== 'production'
const scriptUrl = [
  { src: 'https://webapi.amap.com/maps?v=2.0&key=373bc52968224086cc848f3981e30d07&plugin=AMap.Scale,AMap.HawkEye,AMap.ToolBar,AMap.ControlBar' }
];
let baseURL = 'http://127.0.0.1:9000/';
if (!dev) {
  scriptUrl.push({ src: 'https://hm.baidu.com/hm.js?222391924b53f4fafbb13154c93c2adc' });
  baseURL = 'https://api.fangjiang.com/';
}
// baseURL = 'https://api.fangjiang.com/';
export default {
  generate: {
    minify: false
  },
  hooks: {
    'render:route': (_url, result) => {
      result.html = result.html.replace(/data-n-head="[^"]*"/gi, '');
      result.html = result.html.replace(/data-hid="[^"]*"/gi, '');
      result.html = result.html.replace(/<!--[\w-]*-->/gi, '');
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '房匠',
    meta: [
      { 'ttp-equiv': "Content-Type", content: "text/html; charset=UTF-8" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://fangjiang-saas-prod.oss-cn-beijing.aliyuncs.com/icon/favicon.ico' },
      { rel: 'shortcut icon', href: 'https://fangjiang-saas-prod.oss-cn-beijing.aliyuncs.com/icon/favicon.ico' },
      { rel: 'apple-touch-icon', href: 'https://fangjiang-saas-prod.oss-cn-beijing.aliyuncs.com/icon/favicon.ico' }
    ],
    script: scriptUrl
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/css/ant/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/echart',
    {
      src: '@/plugins/axios',
      ssr: true,
    }
    
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

  router: {
    middleware: ['state']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL, // Used as fallback if no runtime config is provided
    // baseURL: 'http://localhost:9000/', // Used as fallback if no runtime config is provided
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'zh-CN',
      name: '房匠网',
      short_name: '房匠',
      theme_color: '#fff',
      description: '房匠网房源多,信息全,价透明,做您买房路上的自己人',
    },
    icon: {
      source: 'https://fangjiang-saas-prod.oss-cn-beijing.aliyuncs.com/icon/icon.png',
      fileName: 'icon.png',
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
    // 打包样式
    extractCSS: true,
    // 设置CDN
    publicPath: 'https://fangjiang-saas-prod.oss-cn-beijing.aliyuncs.com/_nuxt20220411'
  }
}
