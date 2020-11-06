// 1. 扩展运算符
// rest的逆运算, 参数是一个数组

// 用于函数的调用, 代替apply方法
let nums1 = [1, 2, 3];
console.log(...nums1);
function add(a, b, c) {
  console.log(a + b + c);
}
add(...nums1);
console.log(Math.max(...nums1));

// 用于复制数组
let nums2 = [...nums1];
console.log(nums2);

// 用于合并数组
let nums3 = [...nums1, ...nums2];
console.log(nums3);

// 用于将字符串转成数组
let str = "Hello World";
let str_arr = [...str];
console.log(str_arr);

// 用于将有Iterator接口的对象转为数组
// let nodeList = document.querySelectorAll("div");
// let arr = [...nodeList];
let map = new Map([
  [1, "1"],
  [2, "2"],
]);
let arr = [...map];
console.log(arr);

// 2. 新增方法

// Array.from() array-like / Iterator 对象转数组
// 第二个参数类似map
// 第三个参数绑定this
let arrLikeObj = {
  0: "1",
  1: "2",
  2: "3",
  length: 3,
};
let arr2 = Array.from(arrLikeObj, (s) => s + "th element");
console.log(arr2);

// Array.of() 将一组值转成数组
console.log(Array.of(3));
console.log(Array.of(undefined));

// find(回调函数) 找出第一个符合条件的, 返回第一个为true的
console.log([1, 2, 3, 4].find((e) => e % 2 == 0)); // 2

// findIndex(回调函数) 找出第一个符合条件的位置
console.log([1, 2, 3, 4].findIndex((e) => e % 2 == 0)); // 1

// fill() 填充数组
console.log(new Array(10).fill(0));

// flat() 拉平数组
console.log([1, [2, [3, [4, [5]]]]].flat(Infinity));

// Array.sort() 排序稳定性
