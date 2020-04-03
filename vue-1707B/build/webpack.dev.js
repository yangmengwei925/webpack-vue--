let {smart} = require('webpack-merge');
//既想要base中的配置 又想要自己的配置  base
let base = require('./webpack.base');
module.exports = smart(base, {
  mode: 'development',
  devServer: {
    port: 8080,//启动服务的端口
    // progress: true,//进度条
    contentBase: '../dist',//请求的静态资源路径
    compress: true,// 是否开启 Gzip
    //history 刷新 请求后台 上线之后 404 后台 java要处理这件事情
    historyApiFallback: true,
    quiet: true,
    hot: true,//热更新  webpack.
    
    // proxy: {//服务器 --> 服务器
      // proxy 写法的 方式一
      // '/api': 'http://localhost:9999'  在 express 中处理一下 /api
      // proxy 写法的 方式二
      // '/api': {
      //   target: 'http://localhost:9999',
      //   pathRewrite: {
      //     '/api': ''//发送到后台的时候 /api就没了
      //   }
      // }
    // },

    // 后台 接口没开发完
    // 后台给咱们数据格式  模拟
    // before(app) {
    //   //app: let app = express()
    //   app.get('/userList', function (req, res) {
    //     res.json({msg: 'hello Am before'})
    //   })
    // }

  },

  devtool: 'source-map',

});