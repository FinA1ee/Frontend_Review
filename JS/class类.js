// 通过构造函数定义类
function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype.includes = function (x) {
  return this.from <= x && x <= this.to;
};

var r = new Range(1, 3);
console.log(r instanceof Range);
console.log(r.includes(2));

var F = function () {}; // 函数对象
var p = F.prototype; // F的prototype属性,值是一个对象
var c = p.constructor; // 这个对象包含一个唯一不可枚举属性constructor, 值是一个函数对象
console.log(c);
console.log(F);

var range1 = new Range(1, 2); // range1是一个实例, Range是构造函数, Range.prototype是原型
console.log(Range.prototype.constructor === Range);

// 构造函数 F -> 原型 F.prototype <- 实例
//
// 原型对象F
//  对象o

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  console.log("My name is", this.name);
};

function Student(name, age, grade = 100) {
  Person.apply(this, arguments);
  this.grade = grade;
}

var p1 = new Person("Jack", 23);
var p2 = new Person("Harper", 23);
var s1 = new Student("LMAO", 23, 80);
p1.getName();
p2.getName();
console.log(s1);
console.log(Person.prototype.constructor === Person);

Person.prototype.sex = "Male";
for (let prop in p1) {
  if (p1.hasOwnProperty(prop)) {
    console.log(prop, p1[prop]);
  }
}
console.log(s1 instanceof Person);

var date = new Date();
console.log(date.constructor === Date);

// Set类的构造
function Set() {
  this.values = {}; // 数据
  this.n = 0; // 个数
  this.add.apply(this, arguments);
}

Set.prototype.add = function () {
  for (var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val); // 转成字符串
    if (!this.values.hasOwnProperty(str)) {
      this.values[str] = val;
      this.n += 1;
    }
  }
};

// remove, contains, foreach, _v2s
Set.prototype.remove = function () {
  for (var i = 0; i < arguments.length; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if (this.values.hasOwnProperty(str)) {
      delete this.values[str];
      this.n -= 1;
    }
  }
};

Set.prototype.contains = function (value) {
  for (let prop in this.values) {
    if (this.values[prop] === value) {
      return true;
    }
    return false;
  }
};

Set.prototype.foreach = function (f, context) {
  for (let prop in this.values) {
    if (this.values.hasOwnProperty(prop)) {
      f.call(context, this.values[prop]);
    }
  }
};

Set.prototype.size = function () {
  return this.n;
};

Set._v2s = function (val) {
  switch (val) {
    case undefined:
      return "u";
    case null:
      return "n";
    case true:
      return "t";
    case false:
      return "f";
    default:
      switch (typeof val) {
        case "number":
          return "#" + val;
        case "string":
          return '"' + val;
        default:
          return "@" + objectId(val);
      }
  }

  function objectId(o) {
    var prop = "|**objectid**|";
    if (!o.hasOwnProperty(prop)) {
      o[prop] = Set._v2s.next++;
    }
    return o[prop];
  }
};
Set._v2s.next = 100;

var mySet = new Set();
mySet.add(1, 2, 3, 4, 5);
console.log(mySet.contains(6));
console.log(mySet.size());

// 子类
class Frontend {
  constructor(topic) {
    this.topic = topic;
  }
  toString() {
    return "Frontend Topic " + this.topic;
  }
}

class Http extends Frontend {
  constructor(subTopic) {
    super("Basic Knowledge");
    this.subTopic = subTopic;
  }
  //   toString() {
  //     return "Frontend Topic " + this.topic + " " + this.subTopic;
  //   }
}

var f = new Http("HTTP");
console.log(f instanceof Http);
console.log(f instanceof Frontend);
console.log(f.toString());
