let obj = {
  a: 1
}

Function.prototype.myBind = function() {
  let context = Array.prototype.shift.call(arguments);
  let fn = this;

  return function() {

    let temp = Symbol();
    context[temp] = fn;

    let res = context[temp](...arguments);

    return res;
  }
  
}


function foo(a, b) {
  console.log(this.a, a, b);
  return 1;
}

const c = foo.bind(obj);
console.log(c);


