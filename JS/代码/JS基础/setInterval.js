setInterval(() => {

})
function mySetInterval(fn, delay) {

  let timer = null;
  let _this = this;

  function begin() {
    timer = setTimeout(() => {
      fn.apply(_this);
      begin();
    }, delay);
  }

  return {
    start: () => {
      begin();
    },
    cancel: () => {
      clearTimeout(timer);
    }
  }
}

const fn = () => console.log("shit");

const obj = mySetInterval(fn, 500);

obj.start();

setTimeout(() => {
  obj.cancel();
}, 3000)
