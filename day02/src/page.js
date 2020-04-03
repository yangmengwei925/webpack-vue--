
class Person1 {
  constructor(props = {name: '小三', like: '小四'}) {
    let {name, like} = props;

    this.name = name;
    this.like = like;

  }

  say() {
    console.log(`${this.name} like ${this.like}`);
  }

}

new Person1().say();