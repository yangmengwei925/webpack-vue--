require('@babel/polyfill');

let arr = [1, 2, 3];

let [x, y, z, k] = arr;

Array.prototype.aaa = function () {
  console.log('aaa');
};

let {length, pop, push, slice, indexOf, aaa} = arr;

console.log(k);//null  undefined []
console.log(pop);//null  undefined []
console.log(push);//null  undefined []
console.log(slice);//null  undefined []
console.log(indexOf);//null  undefined []
console.log(aaa);//null  undefined []

aaa();

class Person {
  constructor(props = {name: '小三', like: '小四'}) {
    let {name, like} = props;

    this.name = name;
    this.like = like;

  }

  say() {
    console.log(`${this.name} like ${this.like}`);
  }

}

new Person().say();

let res = arr.reduce((pre, next) => pre + next);
console.log(res);


async function fn() {

  let res = await new Promise(((resolve, reject) => {

    // resolve(aaa )
  }))

}
