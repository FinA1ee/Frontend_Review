let obj = {
  a: 1
}

Function.prototype.myCall = function() {
  let context = Array.prototype.shift.call(arguments);
  let fn = this;

  if (typeof fn === 'function') {
    let temp = Symbol();
    context[temp] = fn;

    let res = context[temp](...arguments);

    delete context[temp];

    return res;
  }
}


function foo(a, b) {
  console.log(this.a, a, b);
  return 1;
}

const c = foo.myCall(obj, 1, 2);
console.log(c);


