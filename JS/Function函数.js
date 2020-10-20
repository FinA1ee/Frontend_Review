"use strict";
var obj2 = {
  x: 1,
  y: 2,
  method1: function () {
    this.result = this.x + this.y;
  },
};

obj2.method1();

function f1(a, b) {
  function square(x) {
    return x * x;
  }
  //   console.log(this);
  return square(a) + square(b);
  //   console.log(this);
}

f1(2, 3);
console.log(setInterval);
obj2.findF1 = f1;
obj2.findF1(3, 4);

var o = {
  m: function () {
    var self = this;
    console.log(this === o);
    f();

    function f() {
      console.log(this === o); // false
      console.log(this);
      console.log(self === o); // true
    }
  },
};

o.m();

var createObj = function () {
  return {
    x: 0,
    y: 0,
  };
};

var obj = new createObj();
console.log(obj);

console.log(typeof createObj);

var d1 = new Date();
console.log(d1 instanceof Date);
