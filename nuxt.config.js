export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    port: 3000,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NG Voices',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Spread awareness about the #EndSARS movement to people in their native languages.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ngvoices.ng' },
      { property: 'og:title', content: 'NG Voices' },
      { property: 'og:image', content: 'https://ngvoices.ng/twitter.png' },
      {
        property: 'og:description',
        content:
          'Spread awareness about the #EndSARS movement to people in their native languages.',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://ngvoices.ng' },
      { property: 'twitter:title', content: 'NG Voices' },
      {
        property: 'twitter:description',
        content:
          'Spread awareness about the #EndSARS movement to people in their native languages.',
      },
      { property: 'twitter:image', content: 'https://ngvoices.ng/twitter.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://vjs.zencdn.net/7.8.4/video-js.css' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-clipboard.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(m4a|ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },

  styleResources: {
    scss: [
      '~/assets/scss/global/variables.scss',
      '~/assets/scss/global/mixins.scss',
    ],
  },
  generate: {
    routes: [
      '/efik',
      '/english',
      '/enuani',
      '/esan',
      '/hausa',
      '/igala',
      '/igbo',
      '/ika',
      '/jukun',
      '/nupe',
      '/pidgin',
      '/tiv',
      '/urhobo',
      '/yala',
      '/yoruba',
    ],
  },
}
