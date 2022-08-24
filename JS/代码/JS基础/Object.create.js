function Foo(name) {
  this.name = name;
}

Object.prototype.myCreate = function(p) {
  // let obj = {};
  // obj.__proto__ = prototype;
  // return obj;

  let F = () => {};
  F.prototype = p;
  let obj = new F();
}

const foo = Object.myCreate(Foo.prototype);
console.log(foo instanceof Foo)