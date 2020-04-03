let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },

  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{
          loader: 'babel-loader',
          options:{
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist', 'manifest.json')

    })//引用动态链接库的插件
  ]
};