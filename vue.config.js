module.exports = {
  // 相对路径
  publicPath: './',
  // webpack-dev-server 相关配置
  devServer: {
    // 自动打开浏览器
    open: true,
    // 设置为0.0.0.0则所有的地址均可以访问
    host: '0.0.0.0',
    port: 8081,
    https: false,
    //   // 使用代理
    //   proxy: {
    //     './api':{
    //       // 目标代理服务器地址
    //       // 改了
    //       target:'http://127.0.0.1:3000/api',
    //       // 允许跨域
    //       changeOrigin: true,
    //       // 这个属性很重要，不添加就成功不了！！
    //       pathRewrite: {
    //         '^/api': ''
    //       }
    //     }
    //   }
  }
}