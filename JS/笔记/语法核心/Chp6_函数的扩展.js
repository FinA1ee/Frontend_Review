// 1. 函数参数默认值（ES6新增）
function add(a = 5, b = 5) {
  // let a = 5; Error
  // 参数默认声明, 不能用Let/Const再次声明
  return a + b;
}
console.log(add(3)); // 8
console.log(add()); // 10

// 与解构赋值一起使用
function add2({ a, b = 5 } = {}) {
  return a + b;
}
console.log(add2({ a: 5 })); // 10
console.log(add2({ a: 10, b: 10 })); // 20
console.log(add2({ b: 10 })); // NaN

// 2. 作用域
let x = 1;
function f(y = x) {
  let x = 2;
  console.log(y);
}
f(); // 1

// 3. rest参数（ES6新增）
function addNums(...nums) {
  let res = 0;
  for (let n of nums) {
    res += n;
  }
  console.log(res);
}
addNums(1, 2, 3, 4);

const sortNumbers = (...numbers) => numbers.sort();
console.log(sortNumbers(3, 2, 4, 1)); // [1, 2, 3, 4]

function printFirst(a, ...numbers) {
  console.log(a);
  let res = 0;
  for (let n of numbers) {
    res += n;
  }
  console.log("Sum: ", res);
}
printFirst(1, 2, 3, 4); // Sum: 9

// 4. 箭头函数（ES6新增）
var foo = (v) => {
  console.log(v);
  return {
    id: v,
    value: 2 * v.length,
  };
};
console.log(foo("Hello"));

function foo2() {
  setTimeout(() => {
    console.log("id: ", this.id); // this指向定义时的对象
  }, 100);
}
var id = 21;
foo2.call({ id: 42 });
