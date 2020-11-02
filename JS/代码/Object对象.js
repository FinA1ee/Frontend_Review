function createObj(x, y) {
  var item = {
    x: x,
    y: y,
  };
  console.log("Item value: ", item);
}

var list = [1, 2, 3, 4, 5];

for (let i in list) {
  createObj(i, i);
}

var a = {
  x: "x",
  b: a,
};
console.log("Result: ", a.b);

var Shape = function () {
  this.x = 0;
  this.y = 0;
  this.z = 0;
};

Shape.prototype.move = function (x, y, z) {
  this.x += x;
  this.y += y;
  this.z += z;
  console.log("Shape Moved");
};

var my_shape1 = new Shape();
var my_shape2 = Object.create(Shape);
console.log(my_shape1.x);
console.log(my_shape2.x);
my_shape1.move(5, 5, 10);
console.log(my_shape1["x"]);
console.log(my_shape1["y"]);
console.log(my_shape1["z"]);

let attribute = ["x", "y", "z"];
let i = 0;
var result = 0;
for (i = 0; i < 3; i++) {
  result += my_shape1[attribute[i]];
  console.log("Attr: ", my_shape1[attribute[i]]);
}
console.log(result);

var portfolio = {
  c1: 50,
  c2: 30,
  c3: 20,
  c4: 100,
};

function getTotalValue(portfolio) {
  var result = 0.0;
  for (stock in portfolio) {
    var share = portfolio[stock];
    result += share;
  }
  console.log(result);
}

getTotalValue(portfolio);

var o = {};
o.x = 1;

var p = Object.create(o); // o:x -> p:y -> q.z
p.y = 2;

var q = Object.create(p);
q.z = 3;

// delete q.z;
for (let i in q) {
  console.log(i);
}
console.log(Object.keys(q));
console.log(Object.getOwnPropertyNames(q));
console.log(q.propertyIsEnumerable("x"));
console.log(q.propertyIsEnumerable("y"));
console.log(q.propertyIsEnumerable("z"));
console.log("x" in q);
console.log("y" in q);
console.log("z" in q);

var obj1 = { x: 0 };
console.log(Object.getOwnPropertyDescriptor(obj1, "x"));

var obj2 = { x: 0 };
var obj3 = new Date();
var obj4 = Object.create(obj2);
console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj3));
console.log(Object.getPrototypeOf(obj4));
console.log(obj4.isPrototypeOf(obj2));
console.log(obj2.isPrototypeOf(obj4));

var obj5 = [];
var obj6 = new Date();
console.log(Object.prototype.toString.call(obj5));
console.log(Object.prototype.toString.call(obj6));

var obj7 = { x: 1, y: { z: [false, null, ""] } };
var s = JSON.stringify(obj7);
console.log(s);
console.log(JSON.parse(s));
console.log(obj6.toJSON());

var obj8 = { x: "x", obj8: obj8 };
console.log(obj8.obj8);

// 深拷贝
var obj9 = { x: 0, y: 1 };
var obj10 = JSON.parse(JSON.stringify(obj9));
console.log(obj9, obj10);
obj10.x = 2;
console.log(obj9, obj10);
