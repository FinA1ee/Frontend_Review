function myThrottle(fn, delay) {
  let lastTime = Date.now();

  return function() {
    let _this = this;

    let curTime = Date.now();
    if (curTime - lastTime > delay) {
      fn.apply(_this, arguments);
      lastTime = curTime;
    }
  }
}

const f = (a, b) => {
  console.log(a + b);
}

const f2 = myThrottle(f, 2000)
setInterval(() => f2(1, 2), 100);