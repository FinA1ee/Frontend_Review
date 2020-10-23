const { resolveSoa } = require("dns");

var table = new Array(10);
for (var i = 0; i < table.length; i++) {
  var row = new Array(10);
  for (var j = 0; j < row.length; j++) {
    row[j] = i * j;
  }
  table[i] = row;
}

console.log(table[9][9]);

var lst1 = [1, 2, 3, 4, 5, 6];
console.log(lst1.join());
console.log(lst1.join(""));
console.log(lst1.join(" "));

function myReverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}
console.log(myReverse(lst1));
console.log(lst1);

var lst2 = ["bana", "aa", "ab"];
var lst3 = [1, 2, 3, 4];
console.log(lst2.sort());
console.log(
  lst3.sort(function (a, b) {
    return b - a;
  })
);
console.log(lst3.concat(5, [6, [7]]));

var lst4 = [1, 2, 3, 4, 5, 6, 7, 8];
var lst5 = [1, 2, 3, 4, 5];
lst5.splice(2, 0, "a", "b");
console.log(lst4.splice(1, 2));
console.log(lst4);
console.log(lst5);

var lst6 = [1, 2, 3, 4, 5];
console.log(lst6.shift()); // 1
console.log(lst6); // [2, 3, 4, 5]

var lst7 = [1, 2, 3, 4, 5];
console.log(lst7.unshift(100, 101, 102)); // 8
console.log(lst7); // [100, 101, 102, 1, 2, 3, 4, 5]

var lst8 = [1, 2, 3, 4, 5];
var result = 0;
lst8.forEach(function (x) {
  result += x;
});
console.log(result);
lst8.forEach(function (x) {
  x = x + 1;
});
console.log(lst8);

var lst12 = [1, 2, 3];
lst12 = lst12.map(function (x) {
  return x * x;
});
console.log(lst12);

var lst13 = [1, 2, 3];
lst13 = lst13.filter(function (x) {
  return x % 2 == 0;
});
console.log(lst13);

var lst14 = [1, 2, 3, 4, 5];
console.log(
  lst14.reduce(function (a, b) {
    return a > b ? b : a;
  })
);

function extend(o, p) {
  for (prop in p) {
    o[prop] = p[prop];
  }
  return o;
}

function union(o, p) {
  return extend(extend({}, o), p);
}
console.log(union({ x: 1 }, { y: 2 }));
var objects = [{ x: 1 }, { y: 2 }, { z: 3 }];
var merged = objects.reduce(union);
console.log(merged);

var obj = { 0: "a", 1: "b", 2: "c", length: 3 };
var res = Array.prototype.map.call(obj, function (x, y) {
  console.log(x, y);
  return y;
});
console.log(res);

var str = "Hello World";
console.log(
  Array.prototype.map.call(str, function (x) {
    return x.toLowerCase();
  })
);
