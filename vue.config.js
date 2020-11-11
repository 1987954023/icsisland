module.exports = {
  devServer: {
    proxy: {
    //   key:value key前缀 /lulu value跟http-proxy-middleware相同的一个配置
      '/lulu': {
        target: 'https://api.asilu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/lulu': ''
        }
      },
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
