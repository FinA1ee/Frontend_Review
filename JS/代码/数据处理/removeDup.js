const a = [1, 3, 3, 2, 2, 2, 1, 2, 3, 4, 4];

// es5
Array.prototype.removeDup = function() {
  let fn = this;
  return fn.filter((item, idx) => {
    return idx === fn.indexOf(item)
  })
}

const b = a.removeDup();

// es6
const c = Array.from(new Set(a));
console.log(c)