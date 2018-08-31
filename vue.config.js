const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const pageLoader = require('./scripts/index')

console.log('Load entries Begin...')

console.log(pageLoader.pages)

console.log('Load entries Done')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  pages: pageLoader.pages,
  lintOnSave: dev,
  runtimeCompiler: true,
  transpileDependencies: [],
  productionSourceMap: false, //source map on production, turn on if need.
  configureWebpack: config => {
    if (dev) {
      config.devtool = 'cheep-module-eval-source-map'
    }
    Object.assign(config, {
      //extend webpack config.
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    })
  },
  chainWebpack: config => {},
  css: {
    modules: true,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only',
      },
    },
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    before: app => {},
  },
}
