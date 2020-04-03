let index = 0;

btnCircle.onclick = function () {
  new Circle();
};

btnRect.onclick = function () {
  new Rect();
};

class Graph {
  constructor() {
    this.render();
  }

  render(props) {
    this.props = props;
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  randomColor() {
    //#
    //1-9 + abcdef
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    const strs = [...letters];

    for (let i = 0; i < 10; i++) {
      strs.push(i + '');
    }

    let i = 0;
    let colors = '#';

    while (i < 6) {
      colors += strs[this.random(0, strs.length)];
      i++;
    }

    return colors;

  }

  drag() {
    this.props.onmousedown = (event) => {
      this.fnDown(event);

    }
  }

  fnDown(event) {
    this.props.style.zIndex = (++index) + "";
    //记录图形距离父元素 左边和上边的距离
    this.disX = event.clientX - this.props.offsetLeft;//
    this.disY = event.clientY - this.props.offsetTop;//

    document.onmousemove = (ev) => {
      //this指向谁?
      //A:fnDown  B:父级函数  C: 当前组件 D:  document
      //遇到 function() this指向 function的拥有者

      //A:fnDown B:window C: CLass D: 构造函数 E:类的对象
      //遇到 ()=>  this指向谁 上一级不是箭头函数的拥有者
      // this.fnMove()
      // console.log(this === obj);
      this.fnMove(ev);
    };
    document.onmouseup = this.fnUp;


  }

  fnMove(event) {
    console.log(`${event.clientX - this.disX}`);
    this.props.style.left = `${event.clientX - this.disX}px`;
    this.props.style.top = `${event.clientY - this.disY}px`;
  }

  fnUp() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
}

class Circle extends Graph{
  /*
  * 位置
  * 大小
  * 颜色
  * */

  constructor() {
    super();//调用父类的构造
    this.x = this.random(0, 1200);
    this.y = this.random(0, 500);
    this.r = this.random(10, 100);
    this.color = this.randomColor();
    this.createEl();
    this.drag();
  }

  createEl() {
    let {r, color, x, y} = this;
    //创建小球
    this.circle = document.createElement('div');
    this.circle.classList.add('circle');
    this.circle.style.width = `${r * 2}px`;
    this.circle.style.height = `${r * 2}px`;
    this.circle.style.backgroundColor = color;
    this.circle.style.left = `${x}px`;
    this.circle.style.top = `${y}px`;
    box.appendChild(this.circle);
    this.render(this.circle);
  }

}

class Rect extends Graph{
  /*
  * 位置
  * 大小
  * 颜色
  * */

  constructor() {
    super();
    this.x = this.random(0, 1200);
    this.y = this.random(0, 500);
    this.color = this.randomColor();
    this.createEl();
    this.drag();
  }

  createEl() {
    let {r, color, x, y} = this;
    //创建小球
    this.rect = document.createElement('div');
    this.rect.classList.add('rect');
    this.rect.style.width = `${this.random(10, 200)}px`;
    this.rect.style.height = `${this.random(10, 200)}px`;
    this.rect.style.backgroundColor = color;
    this.rect.style.left = `${x}px`;
    this.rect.style.top = `${y}px`;
    box.appendChild(this.rect);
    this.render(this.rect);
  }


}


//npm run dev
