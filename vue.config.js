// eslint-disable-next-line no-unused-vars
const path = require('path')
module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    // open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: false
    },
    // proxy: {
    //   '/': {
    //     // 目标 API 地址
    //     target: 'http://localhost:3000',
    //     // target: process.env.VUE_APP_URL,
    //     // 如果要代理 websockets
    //     ws: true,
    //     changeOrigin: true, // 允许websockets跨域
    //     pathRewrite: {
    //       '/': ''
    //     }
    //   }
    // },
    // 代理转发配置，用于调试环境
    disableHostCheck: true
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.symlinks(true) // 热更新
  }
}
