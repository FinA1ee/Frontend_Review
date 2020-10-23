// 二分查找
function search(arr, target) {
  var lo = 0;
  var hi = arr.length - 1;

  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    console.log("MID", mid);
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }

  return arr[lo] === target ? lo : -1;
}

// 作用域
function bar() {
  console.log(myName);
}
var foo = () => {
  var myName = "腾讯1";
  bar();
};
var myName = "腾讯2";
foo();

// url解析
// parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
// {
//   protocol: "http",
//   host: "www.xiyanghui.com",
//   path: "/product/list",
//   params: {
//       id: "12345",
//       sort: "discount"
//   },
//   hash: "title"
// }

// cowedars
// "codewars”由”cdw”和”oears”组合而成：
function isMerge(s, p1, p2) {
  var sStack = s.split("");
  var p1Stack = p1.split("");
  var p2Stack = p2.split("");
  var p1Ptr = 0;
  var p2Ptr = 0;
  while (sStack.length > 0) {
    var sChar = sStack.shift();
    if (p1[p1Ptr] == sChar) {
      p1Ptr += 1;
    } else if (p2[p2Ptr] == sChar) {
      p2Ptr += 1;
    } else return false;
  }
  return true;
}

var arr = [1, 2, 3, 4];
console.log(Math.max(...arr));

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

var a = 1;
var a = 2;
console.log("a" - 1);

// var filterSensitiveWords = function (str, sensitiveWords) {
//   var strArr = Array.prototype.slice.call(str, ",");
//   for (let index in strArr) {
//     strArr[index] = Array.prototype.map.call(function (v) {});
//   }
// };

function duplicatedWords(arr) {
  var hashMap = {};
  var res = {};
  for (let char of arr) {
    var key = char;
    if (key in hashMap) {
      hashMap[key] += 1;
    } else hashMap[key] = 1;
  }
  // "a": 2, "b": 2, "c": 1
  // a b c
  for (let obj in hashMap) {
    hashMap[obj] > 1 ? (res[obj] = true) : (res[obj] = false);
  }
  return res;
}
console.log(duplicatedWords(["a", "a", "a", "a"]));

console.log(typeof Object);

("use strict");
var name = "Jay";
var person = {
  name: "Wang",
  pro: {
    name: "Michael",
    getName: function () {
      return this.name;
    },
  },
};
console.log(person.pro.getName());
var pepole = person.pro.getName; //这里我猜是‘=’的。。。
console.log(pepole());

var ele = [1, 2, 3, 4];
for (var i = 0; i < ele.length; i++) {
  ele[i] = function () {
    console.log(i);
  };
}
for (var i = 0; i < ele.length; i++) {
  ele[i]();
}

var name = "global";
var obj = {
  name: "local",
  foo: function () {
    console.log(this);
    this.name = "foo";
  },
};
var bar = new obj.foo();
// setTimeout(function () {
//   console.log(global.name);
// }, 0);
console.log(bar);

// var bar3 = (bar2 = bar);
// bar2.name = "foo2";
// console.log(bar3.name);

// 包装一个异步任务
var fetch = require("node-fetch");

function* gen() {
  var url = "https://api.github.com";
  var result = yield fetch(url); // 返回Promise对象
  console.log(result);
}

// 执行
var g = gen();
var result = g.next();

result.value
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    g.next(data);
  })
  .catch(function (err) {
    console.log("Promise Error");
  });

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return "(" + this.x + ", " + this.y + ")";
};

var p = new Point(1, 2);
console.log(p.toString());
// // 1. 数组转成树状结构
// var obj = [
//   { id: 3, parent: 2 },
//   { id: 1, parent: null },
//   { id: 2, parent: 1 },
// ];

// function treeObj(obj) {
//   obj.map((item) => {
//     if (item.parent != null) {
//       obj.map((o) => {
//         if (item.parent == o.id) {
//           if (!o.child) {
//             o.child = [];
//           }
//           o.child.push(item);
//           o.child = o.child;
//         }
//       });
//     }
//   });
//   return obj.filter((item) => item.parent === null)[0];
// }

// // 2. 计时器
// function count(start, end) {
//   console.log(start++);
//   var timer = setInterval(function () {
//     if (start <= end) {
//       console.log(start++);
//     } else {
//       clearInterval(timer);
//     }
//   }, 100);
//   return {
//     cancel: function () {
//       clearInterval(timer);
//     },
//   };
// }

// // var res = count(1, 100);
// // setTimeout(res.cancel, 200);

// // 3. 流程控制
// function fizzBuzz(num) {
//   if (num == null || isNaN(num)) {
//     return false;
//   }
//   if (num % 3 == 0 && num % 5 == 0) {
//     return "fizzbuzz";
//   } else if (num % 3 == 0) {
//     return "fizz";
//   } else if (num % 5 == 0) {
//     return "buzz";
//   } else return num;
// }

// console.log(isNaN(5));
// console.log(isNaN("5"));

// // 4. 函数传参
// function argsAsArray(fn, arr) {
//   return fn.apply(this, arr);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// {
//   var a = 1;
//   // let b = 1;
// }
// console.log(a);
// // console.log(b);
