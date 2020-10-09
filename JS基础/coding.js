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

result.value.then(function (data) {
  return data.json();
}).then(function (data) {
  g.next(data);
}).catch(function (err) {
  console.log("Promise Error");
});

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
