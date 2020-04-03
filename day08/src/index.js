// import {add} from './a.js';
//
// //在内存空间开辟一个地方 栈内存
// let a = 10;
// let b = 20;
// let c = 30;
//
// console.log(a + b + c);
//
//
// console.log(add(10, 20));


import React from 'react';
import {render} from 'react-dom';
import App from './App.js';

render(<App/>, document.getElementById('app'),()=>{
  //什么时候执行 : 虚拟dom转换成了真实dom之后
});
