// ES6 加强了Unicode支持

console.log("\u0061"); // \u0000 ~ \uFFFF
console.log("\uD842\uDFB7");
console.log("\u{20BB7}");

// ES6 添加字符串遍历器
let str = "Hello World";
for (char of str) {
  //   console.log(char);
}

// ES6 添加反引号标识 （定义多行字符串，嵌入变量，函数调用）
let str2 = `This is line 1 \n${str} This is line 2`;
console.log(str2);

// ES6 新增字符串方法
let s = "Hello world!";
s.startsWith("Hello", 0); // true
s.endsWith("!"); // true
s.includes("o"); // true

let s2 = "  abc  ";
s2.trim(); // "abc"
s2.trimStart(); // "abc  "
s2.trimEnd(); // "  abc"
