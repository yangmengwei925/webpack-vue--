let obj = {
  aa: ()=> {
    let bb = () => {
      console.log(this);

    };
    bb();
  },

  cc: () => {
    console.log(this);
  }
};
obj.aa();//obj
obj.cc();//window  上一级非箭头函数的拥有者