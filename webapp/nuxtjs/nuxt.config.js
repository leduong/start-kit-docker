import { resolve } from 'path'
const PORT = process.env.PORT || 3000
const HOSTNAME = process.env.HOSTNAME || 'localhost' // default: localhost
const DEV = process.env.NODE_ENV !== 'production'
const server = {
  port: PORT,
  host: HOSTNAME,
}
export default {
  dev: DEV,
  server,
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    dir: 'app/data'
  },
  dir: {
    pages: 'app/views/pages', // Nuxt will look for the views/ instead of the pages/ folder
  },
  // Alias (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-alias)
  alias: {
    layouts: resolve(__dirname, './app/views/layouts'),
    data: resolve(__dirname, './app/data'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/infrastructure/plugins/abcXYZ.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: 'app/views/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
