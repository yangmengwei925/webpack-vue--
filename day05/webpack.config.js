//webpack 模块化 使用的是什么规范: CMD  AMD  CommonJs es6

const path = require('path');
//处理html的插件
let HtmlWebpackPlugin = require('html-webpack-plugin');

let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',//默认production  打包后生成的文件是否压缩

  devServer: {
    port: 8889,//启动服务的端口
    progress: true,//进度条
    contentBase: './dist',//请求的静态资源路径
    compress: true// 是否开启 Gzip
  },

  //入口文件 entry:可以是对象 数组 字符串
  entry: './src/index.js',

  //出口文件
  output: {
    filename: 'bundle.js',//打包的文件叫什么名字
    path: path.join(__dirname, './dist')
  },

  /*
  * loader的原则: 单一职责原则  一个loader只做一件事
  * */
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
              //@babel/plugin-proposal-decorators 处理装饰器
              //@babel/plugin-proposal-class-properties 处理es7中一些高级语法
              //@babel/plugin-transform-runtime 处理转换过程公共方法的抽离 比如 _classCallCheck
              plugins: [['@babel/plugin-proposal-decorators', {"legacy": true}],
                ['@babel/plugin-proposal-class-properties', {"loose": true},],
                '@babel/plugin-transform-runtime'
              ]
            }
          },
        ],
        include: path.join(__dirname, './src'),
        exclude: /node_module/
      },
      {
        /*test: 正则表达式的匹配后缀*/
        test: /\.css$/,
        /*use: 使用什么loader加载*/
        use: [
          /*
          * loader加载是按照顺序加载的
          * 使用use的时候 先右后左 先下后上
          *
          * style-loader : 将css代码插入到 html的head中  MiniCssExtractPlugin.loader link
          * css-loader : 让我们识别css的模块
          *
          * loader:写法
          *   写法一: MiniCssExtractPlugin.loader
          *
          * */
          {loader: MiniCssExtractPlugin.loader}, 'css-loader'
        ]

      },

      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      }

      /*
      * file-loader : 在打包后的目录中生成一个文件
      * url-loader :  会以base64的形式放到bundle.js中
      * */

    ]

  },


  plugins: [
    new HtmlWebpackPlugin({
      //引入的文件位置
      template: './test.html',
      //打包之后的文件名字
      filename: 'test.html',
      minify: {
        removeAttributeQuotes: true,//打包的时候双引号没了
        collapseWhitespace: true//单行压缩
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
};

//打包的目的是什么
//vue  react  生成 .js 引入到一个地方html
// 强大的插件 1:环境 :  2:代码

//问题 第一版  1.0 bundle.js 不会请求 2.0 里面的  bundle.js
//同一个用户   bundle.js 第一次请求了之后 不会从网络请求了 从浏览器缓存请求 -->浏览器会做一件事情:缓存
// 浏览器缓存策略 同一个域名下 如果文件名字一致  请求的时候先从缓存里面取
// 用户自己弄: 清理浏览器缓存
// 解决浏览器缓存的问题 每次打包的时候文件的名字都不一致 修改了 新的文件名字  没修改 该是原来了
// hash: 解决浏览器缓存问题的 根据文件名字和文件内容生成的hash戳
// output.filename: 'bundle.[hash].js',//打包的文件叫什么名字
//更新白更新

// vue npm run dev

// ip:端口





