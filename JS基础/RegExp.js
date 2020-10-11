// 126邮箱 必须有数字 字母 至少8位 不能含特殊字符
var pattern1 = /[a-zA-Z]{1}[0-9]{1}@126.com$/;
var pattern2 = new RegExp("/s$/");

var pattern3 = /^[01]+$/; // 二进制数字
var pattern4 = /^[^0][0-9]?$/; // 非零的十进制数字
var pattern5 = /(^0[1-9]$)|(^1[1-2]$)/; // 01, 02, 03 ... 12
var pattern6 = /^[a-zA-Z0-9]{6,13}@qq.com$/; // 6-13位qq号

console.log(pattern1.test("123456789@126.com"));
console.log(pattern1.test("abcde1fgh@126.com"));
console.log(pattern1.test("defgaba"));

console.log(pattern3.test("1111"));
console.log(pattern3.test("1011"));
console.log(pattern3.test("10112"));

console.log(pattern4.test("0"));
console.log(pattern4.test("011"));
console.log(pattern4.test("123"));
console.log(pattern4.test("1023"));
console.log(pattern4.test("1230"));
console.log(pattern4.test("1"));

console.log(pattern5.test("01"));
console.log(pattern5.test("11"));
console.log(pattern5.test("12"));
console.log(pattern5.test("13"));
console.log(pattern5.test("0123"));
console.log(pattern5.test("012"));
console.log(pattern5.test("0"));
console.log(pattern5.test("1"));

console.log(pattern6.test("11111111111111@qq.com"));
console.log(pattern6.test("1111111111111@qq.com"));
console.log(pattern6.test("111111111111@qq.com"));
console.log(pattern6.test("111111@qq.com"));
console.log(pattern6.test("11111@qq.com"));