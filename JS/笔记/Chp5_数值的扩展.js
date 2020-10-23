// Number对象

// Number.isFinite() 只对数值有效
console.log(Number.isFinite(Infinity)); // f
console.log(Number.isFinite(-Infinity)); // f
console.log(Number.isFinite(true)); // f
console.log(Number.isFinite(5)); // t

// Number.isNaN() 只对NAN有效
console.log(Number.isNaN(NaN)); // t
console.log(Number.isNaN(5)); // f
console.log(Number.isNaN("5")); // f
console.log(Number.isNaN("true" / 5)); // t

// Number.isInterger() 收精度限制
// Number.EPSILON 最小精度，用预设值误差范围
0.1 + 0.2 === 0.3; // f

// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER
// Number.isSafeInteger() 检查是否处于这个范围
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // t
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // f

// ES2020 BigInt 新的数据类型
