let obj = {
  a: 1
}

Function.prototype.myApply = function() {
  let context = Array.prototype.shift.call(arguments);
  let fn = this;

  if (typeof fn === 'function') {
    let temp = Symbol();
    context[temp] = fn;

    let res = context[temp](...[...arguments[0]]);

    delete context[temp];

    return res;
  }
}


function foo(a, b) {
  console.log(this.a, a, b);
  return 1;
}

const c = foo.apply(obj, [2, 3, 4]);
console.log(c);


