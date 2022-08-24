function Foo(name, age) {
  this.name = name;
  this.age = age;
}

function Bar(name, age) {
  return 1;
}


const foo = new Bar("jack", 18);

// 构造函数，参数
function myNew() {
  let func = Array.prototype.shift.call(arguments);
  // 判断func是否为函数类型
  if (typeof func !== 'function') {
    console.error('invalid');
    return;
  }

  let obj = Object.create(func.prototype); // 将obj的原型链指向构造函数的原型
  let res = func.call(obj, ...arguments);

  // 构造函数直接返回对象的情况
  if (res && typeof res === 'object') {
    return res;
  }
  return obj;
}

const foo1 = myNew(Bar, "jack", 18)
console.log(foo1);
console.log(foo);