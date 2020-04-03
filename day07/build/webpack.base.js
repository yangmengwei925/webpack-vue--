let HtmlWebpackPlugin= require("html-webpack-plugin");

const path = require('path');
//处理html的插件
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {

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
        // include: path.join(__dirname, './src'),
        // exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      //加载vue哪个版本 2.0版本  vue.common.js vue1.0的版本
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, './src')
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





