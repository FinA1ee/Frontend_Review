let obj = { a: 2, b: 3 };

console.log(obj);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 提升

// console.log(foo2);
// var foo2 = function bar() {
//   console.log("fuck");
// };

// foo2(); // type errir

function module1() {
  let a = 100;
  let b = 200;

  function getA() {
    console.log(a);
  }
  function getB() {
    console.log(b);
  }

  return {
    f1: getA,
    f2: getB,
  };
}

let foo = module1();
foo.f1();
foo.f2();
