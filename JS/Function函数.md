## **Function 函数**

函数挂载在一个对象里，称为对象的方法。该对象是函数的上下文，也是函数内的this的指向。

### 函数定义

```javascript
// 两种定义方法
function foo(){}
var foo = function(){}

// 嵌套定义
function f1(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
```

### 函数调用

- 作为函数调用
- 作为方法调用
- 作为构造函数调用
- call( ), apply( )间接调用

```javascript
// 对象中的嵌套调用, 不继承this
var o = {
  m: function () {
    var self = this;
    console.log(this === o);
    f();

    function f() {
      console.log(this === o); // false
      console.log(this); // 指向全局对象或undefined
      console.log(self === o); // true
    }
  },
};

o.m();
```

### 闭包

函数定义时的**作用域链**到函数执行时依然有效。调用JS函数时，创建新对象保存局部变量，将对象添加到作用域链，函数返回时删除。

- 声明在另一个函数内部的函数

- 内部函数对外部函数的变量进行引用, 行程闭包

- 优点：避免了使用全局变量, 避免了全局变量被污染的可能, 函数内部变量被保护

- 缺点：由于垃圾回收机制, 变量不会被垃圾回收, 造成内存泄漏

```javascript
// 例1
var scope = "global scope";
function checkscope(){
  var scope = "local scope";
  function f(){
    return scope; // 闭包捕捉局部变量，一直保存起来
  }
  return f; // 有一个外部引用指向f，f指向变量scope，所以内部变量scope不会被垃圾回收
}
checkscope()(); // local scope

// 例2
var uniqueInteger = (function () {
  var counter = 0; // 私有变量
  return function () {
    return counter++; // 嵌套函数可以访问外部函数的变量
  };
})();

// 例3
function counter() {
  var n = 0;
  return {
    count: function(){ return n++; }
    reset: function(){ n = 0; }
  };
}
```

### 函数属性/方法/构造函数

- length属性：函数实参的数量，定义时期望给出的实参个数

- call vs apply vs bind方法:

  1. 用途: 改变this的指向，第一个参数都是this需要指向的对象，后面的参数都是传入的参数值

  2. 区别：call和apply直接执行函数，apply将参数放在数组中，而bind返回一个新函数，需要手动调用

     ```javascript
     // 代理console.log
     function log(){
       console.log.apply(this, arguments)	// 第一个参数为null，代表指向全局对象window或者global
     }
     log(1, 'www', '&&&')	// 1 "www" "&&&"
     
     // 改变this指向
     global.x = 10;
     function f4(y) { return this.x + y; } // this bind后指向obj6
     var obj6 = { x: 2 };
     var f5 = f4.bind(obj6);
     console.log(f5(3)); // 在调用时 f4内部this的指向是调用他的指向，也就是global
     
     // 实现bind
     function myBind(f, o) {
       return function () {
         f.apply(o, arguments); // 返回的函数中的所有参数
       };
     }
     var f6 = myBind(f4, obj6);
     f6(3); // 5
     
     // bind柯里化
     var sum = function (x, y) { return x + y; };
     var succ = sum.bind(null, 1); // 将第一个参数x绑定为1
     console.log(succ(1)); // 参数y=1		
     ```

### 函数式编程

JS不是函数式编程语言，但可以像操作对象一样操作函数。

- 使用函数处理数组 reduce/map

- 高阶函数：操作函数的函数，接受函数作为参数返回新函数

- 不完全函数

- 记忆 memorization

  ```javascript
  // 高阶函数 not，f返回一个布尔值
  function not(f){ 
    return function(){
      // aruguments: 返回的新函数的参数
  		var result = f.apply(this, aruguments);
      return !result;
    };
  }
  
  // fib数列 cache方法做DP
  function memorize(f) {
    var cache = {}; // 值存在闭包内
    return function () {
      var key = arguments[0];
      if (key in cache) return cache[key];
      else return (cache[key] = f.apply(this, arguments));
    };
  }
  
  var fib = memorize(function (n) {
    if (n == 0) { return 1; }
    if (n == 1) { return 1; }
    return fib(n - 1) + fib(n - 2);
  });
  
  ```

  





