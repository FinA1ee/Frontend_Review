function myDebounce(fn, delay) {
  let timer = null;

  return function() {
    let _this = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(_this, arguments);
    }, delay);
  }
}


var a = 2;

function click() {
  console.log(this?.performance.nodeTiming.name);
}

const click2 = myDebounce(click, 300);
click2();
click();
// console.log(click());
// console.log(click2());