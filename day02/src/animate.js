let path = require('path');

// let pathTwo = path.join(__dirname, '/src/two.js');
let {getRandom} = require('./src/two.js');

class Animate {
  constructor(parent, arr) {
    this.parent = document.querySelector(parent);
    this.arr = arr;
    //节点创建出来
    this.render();//domDiv是个啥

  }

  render() {
    console.log(getRandom(10, 100));
    this.domDiv = this.arr.map((item, index) => {
      let div = document.createElement('div');
      div.classList.add('animated');
      div.classList.add(`color${index}`);
      div.classList.add(item.className);
      return div;
    });
    this.action();
  }

  listen(div) {
    //动画的监听 是一个异步
    return new Promise((resolve, reject) => {
      this.parent.appendChild(div);
      div.addEventListener('animationend', () => {
        resolve();
      });
    })

  }

  async action() {
    for (let val of this.domDiv) {
      await this.listen(val);
    }
  }
}

// 1:new 类 传参
// 2:创建dom节点 在render中创建dom节点
// 3:什么时候添加到父节点 第一个动画执行结束 添加第二个动画 第二个动画执行结束 再添加第三个动画

//render: 创建节点
//listen : 监听回调 什么时候执行结束  Promise
//action : 执行动画


new Animate('.wrap', [
  {title: '动画1', className: 'rotateInDownRight'},
  {title: '动画2', className: 'bounceInLeft'},
  {title: '动画3', className: 'bounceInDown'},
]);