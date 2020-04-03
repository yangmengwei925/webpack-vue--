let express = require('express');
let app = express();

//1: 引入 中间件
let middle = require('webpack-dev-middleware');
let config = require('./webpack.config.js');
let webpack = require('webpack');

let myConfig = webpack(config);

app.use(middle(myConfig));//顺带把webpack也启动了


app.use(express.json());

//2:导入webpack的配置文件



app.get('/list', function (req, res) {
  res.send({msg: 'success', code: 1});

});
app.get('/open', function (req, res) {
  res.send({msg: 'success open', code: 1});

});

app.post('/login', function (req, res) {
  let {username, password} = req.body;
  res.send({msg: 'success', code: 1, username, password});

});


app.listen(9999);

