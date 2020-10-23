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

// arguments类数组对象 实参对象标识符
function getPropertyNames(o, a) {
  // console.log("Augument: ", arguments);
  var a = a || [];
  for (var property in o) {
    a.push(property);
  }
  // console.log("Augument: ", arguments.length);
  return a;
}

var obj3 = {
  x: 1,
  y: 2,
  z: 3,
};
console.log(getPropertyNames(obj3, ["a"]));

// 接受任意数量的实参
function max() {
  var result = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] > result) {
      result = arguments[i];
    }
  }
  return result;
}

function caller() {
  max();
}

console.log("Max: ", max(1, 2, 3));

// 作为值的函数
var arr3 = [
  function (x) {
    return x * x;
  },
  ,
  20,
];
var f3 = arr3[0];
console.log(f3(2));

function factorial(n) {
  factorial[0] = 1;
  factorial[1] = 1;
  for (var i = 2; i <= n; i++) {
    factorial[i] = factorial[i - 1] + factorial[i - 2];
  }
  return factorial[n];
}

// for (var i = 0; i < 11; i++) {
//   console.log(factorial(i));
// }

// 闭包
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f(a, b) {
    return scope;
  }
  return f;
}
console.log("Scope: ", checkscope()());
console.log("Scope Len: ", checkscope().length);

var uniqueInteger = (function () {
  var counter = 0;
  return function () {
    return counter++;
  };
})();

console.log(uniqueInteger());

// 判断出入的arugument数组是否
function check(args) {
  var len = args.length; // 实际传入的参数个数
  var len2 = args.callee.length; // add函数期望的参数个数
  console.log(args.callee);
  if (len != len2) {
    throw Error("Wrong Number of Aruguments");
  }
}

function add(x, y, z) {
  check(arguments);
  return x + y + z;
}

console.log(add(1, 2, 3));

// call(), apply()
var array_of_numbers = [1, 2, 3];
var biggest = Math.max.apply(Math, array_of_numbers); //
console.log(biggest);

function trace(o, m) {
  var original = o[m]; // 原始的属性
  o[m] = function () {
    console.log(new Date(), "Entering", m);
    var result = original.apply(this, arguments);
    console.log(new Date(), "Exiting", m);
    return result;
  };
}

function Person(name, age) {
  // 构造函数
  console.log("called person: ", arguments);
  this.name = name;
  this.age = age;
}

function Student(name, age, grade) {
  console.log(this);
  console.log(arguments);
  Person.apply(this, arguments);
  this.grade = grade;
}

var s1 = new Student("Jack", 18, 80);
console.log(s1);

// console.log(obj5["myMethod"](1, 2));
// var res = trace(obj5, "myMethod");
// obj5["myMethod"](1, 2);

// log("abc") "hello world abc"

// function log() {
//   var arr = Array.prototype.slice.call(arguments);
//   arr.unshift("hello world");
//   console.log.apply(this, arr);
// }
// log("lmao"); // == console.log("lmao")

global.x = 10;

function f4(y) {
  console.log(this);
  return this.x + y;
}

var obj6 = {
  x: 2,
};

var f5 = f4.bind(obj6);

console.log(f5(3)); // 在调用时 f4内部this的指向是调用他的指向，也就是global

// 实现一个bind, 返回一个函数，通过他调用o中的方法f()
function myBind(f, o) {
  return function () {
    console.log(arguments);
    f.apply(o, arguments);
  };
}
var f6 = myBind(f4, obj6);
f6(3);

// 柯里化
var sum = function (x, y) {
  return x + y;
};

var succ = sum.bind(null, 1);
console.log(succ(1)); // 1 + 2

function f7(y, z) {
  return this.x + y + z;
}
var g = f7.bind({ x: 1 }, 2, 10);
console.log(g()); // x + y + z = 1 + 2 + 3 = 6

// 返回带有记忆能力的函数
function memorize(f) {
  var cache = {}; // 值存在闭包内
  return function () {
    console.log(cache);
    var key = arguments[0];
    if (key in cache) return cache[key];
    else return (cache[key] = f.apply(this, arguments));
  };
}

var fib = memorize(function (n) {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
});

console.log("Fib: ", fib(3));
