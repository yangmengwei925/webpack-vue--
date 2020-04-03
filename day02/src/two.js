function getRandom(x1, x2) {

  return Math.floor(Math.random() * (x2 - x1) + x1);
}


exports.getRandom = getRandom;