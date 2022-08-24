function Foo(name) {
  this.name = name;
}

const foo = new Foo('jack');

foo instanceof Foo;

function myInstanceOf(func, obj) {
  if (!obj) return false;
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === func.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

const obj = {};


console.log(myInstanceOf(Foo, obj));
console.log(obj instanceof Foo);
console.log(obj.__proto__.__proto__);