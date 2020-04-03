const path = require('path');
//处理html的插件
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let {CleanWebpackPlugin} = require('clean-webpack-plugin');//见到插件放到plugins new XXXPlugin
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let TerserPlugin = require('terser-webpack-plugin');

let VueLoaderPlugin = require('vue-loader/lib/plugin');


//复制一个文件 到 dist目录下
// let CopyPlugin = require('copy-webpack-plugin');

//OptimizeCssAssetsWebpackPlugin : 压缩css文件

// 用法  optimization.minimizer :[new OptimizeCssAssetsWebpackPlugin()]
// 缺陷  : js就不会压缩了  用到 terser-webpack-plugin
// 完美  minimizer:[new TerserPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]//压缩css

module.exports = {
  optimization: {//webpack4.0之后出现的优化项
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]//压缩css
    //缺陷 可以压缩css 但是 js压缩又出现了问题
  },

  mode: 'production',//默认production  打包后生成的文件是否压缩
  // devtool: 'source-map',
  // 10分钟
  devServer: {
    port: 8889,//启动服务的端口
    // progress: true,//进度条
    contentBase: './dist',//请求的静态资源路径
    compress: true,// 是否开启 Gzip
    proxy: {//服务器 --> 服务器
      // proxy 写法的 方式一
      // '/api': 'http://localhost:9999'  在 express 中处理一下 /api
      // proxy 写法的 方式二
      '/api': {
        target: 'http://localhost:9999',
        pathRewrite: {
          '^/api': ''//发送到后台的时候 /api就没了
        }
      }
    },

    quiet: true,
    // hot: true,

    // 后台 接口没开发完
    // 后台给咱们数据格式  模拟
    before(app) {
      //app: let app = express()
      app.get('/userList', function (req, res) {
        res.json({msg: 'hello Am before'})
      })
    }

  },

  devtool: 'source-map',
  //bundle.854a5a72bc.js.map 源码映射
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:10].js',//打包的文件叫什么名字
    path: path.join(__dirname, './dist')
  },
  module: {
    //规则
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            //babel-loader 加载babel的
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['@babel/plugin-proposal-decorators', {"legacy": true}],
                ['@babel/plugin-proposal-class-properties', {"loose": true},],
                '@babel/plugin-transform-runtime'
              ]
            }
          },
        ],
        include: path.join(__dirname, './src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader}, 'css-loader', 'postcss-loader'
        ]
      },
      //sass编译 css-->打包js css-loader  文件抽离成单独的文件 MiniCssExtractPlugin.loader
      //sass-loader  node-sass
      {
        test: /\.(sc|sa)ss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          'sass-loader'

        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            //识别 <template> 模板
            compiler: require('vue-template-compiler'),
            //加载资源 <img src='./logo.png'>
            transformAssetUrls: {
              video: ['src', 'poster'],
              source: 'src',
              img: 'src',
              image: ['xlink:href', 'href'],
              use: ['xlink:href', 'href']
            }
          }
        }],
        include: path.join(__dirname, './src'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      //加载vue哪个版本 2.0版本  vue.common.js vue1.0的版本
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      //引入的文件位置
      template: './src/index.html',
      //打包之后的文件名字
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,//打包的时候双引号没了
        collapseWhitespace: true//单行压缩
      }
    }),
    new VueLoaderPlugin()
  ]

};





