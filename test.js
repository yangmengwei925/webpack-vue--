let i = 6;
let timer = setInterval(() => {
  i--;

  if (i === 0) {
    clearInterval(timer);
    console.log('抽奖结果为:', (Math.floor(Math.random() * 9) + 1) + '组');
  } else {
    console.log('倒计时:', i);
  }
}, 1000);

