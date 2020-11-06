// ES6 新添加：解构

// 1. 数组
// 模式匹配, 解构不成功->undefined
// 等号右侧需要时有Iterator的结构
let [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);

// 可设置默认值
let [d = true] = [];
console.log(d);

// 2. 对象
// 默认值生效的条件是，对象的属性值严格等于undefined。
let { foo2, bar2 } = { foo2: "a", bar2: "b" };
const { log } = console;
const { cos: findCos } = Math;
log(findCos(100));
log(foo2);
log(bar2);

// 3. 字符串
const [f, g, h, i, j] = "hello";
const { length: lenOfHello } = "hello";
console.log(f);
console.log(lenOfHello);

// 用途

// 交换变量值
function swap([a, b]) {
  return [b, a];
}
console.log(swap([1, 2]));

// 从函数返回多个值
function calculate(a, b) {
  return {
    add: a + b,
    minus: a - b,
    multiply: a * b,
  };
}
let { add, minus, multiply } = calculate(1, 2);
console.log(add);
console.log(minus);
console.log(multiply);

// 提取JSON数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309],
};

let { id, status, data: number } = jsonData;
console.log(id, status, number);

// 遍历Map结构
const map = new Map();
map.set(1, "Hello");
map.set(2, "World");

for (let [key, value] of map) {
  console.log(key, value);
}

// 输入模块的指定方法
// const { 方法1, 方法2 } = 模块;
