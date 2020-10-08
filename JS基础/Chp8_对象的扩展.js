// 1. 属性的简洁表示
const x = "1";
const y = "2";
const obj = {
  x,
  y,
  hello1() {
    console.log(`Hello ${x} ${y}`);
  },
  hello2() {
    return { x, y };
  },
};
obj.hello1();
console.log(obj.hello2());

// 2. 属性的遍历
// for...in
// Object.keys(obj): 返回一个数组

// 3. super关键字: 指向对象的原型对象

// Ex1:
const proto = {
  foo: "hello",
};
const obj2 = {
  foo: "world",
  find() {
    return super.foo; // 只能在对象方法中使用
  },
};
Object.setPrototypeOf(obj2, proto);
console.log(obj2.find());

// Ex2:
const proto2 = {
  x: "hello",
  foo() {
    console.log(this.x);
  },
};
const obj3 = {
  x: "world",
  find() {
    super.foo(); // this 还是绑定当前对象obj3
  },
};
Object.setPrototypeOf(obj3, proto2);
obj3.find();

// 3. 链判断运算符 ?.
// const firstName = message?.body?.user || 'default';
// const firstName = message?.body?.user ?? 'default';
// '??' 指定默认值

// 4. 新增方法

// Object.is(): 与 === 类似, 比较是否严格相等
Object.is(+0, -0); // f
Object.is(NaN, NaN); // t

// Object.assign(): 对象的合并
// 参数不是对象则转成对象
const target = { a: 1 };
const source1 = { b: 1 };
const source2 = { c: { d: 1 } };
Object.assign(target, source1, source2);
console.log(target);
source2.c.d = 2;
console.log(target); // 浅拷贝

// 添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, { x, y });
  }
}
const origin = new Point(0, 0);
console.log(origin.x, origin.y);

// 添加方法
Object.assign(Point.prototype, {
  getName() {
    console.log("Point:", this.x, this.y);
  },
});
const p1 = new Point(3, 3);
p1.getName();

// 克隆对象: 不能克隆继承的值
function clone(p) {
  return Object.assign({}, p);
}
const p2 = clone(p1);
console.log(p2);
