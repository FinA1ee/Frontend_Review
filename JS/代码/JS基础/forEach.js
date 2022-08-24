
Array.prototype.myForEach = function(fn, thisArg = null) {

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i);
  }
}

const obj = {a : 1}
const a = [1, 2, 3];
a.myForEach(function (item, idx) {
  console.log(item, idx, this);
}, obj)
