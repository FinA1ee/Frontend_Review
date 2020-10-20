### 前端中的面向对象

对象的使用不需要担心内部实现

- 封装，继承，多态



### Topic 1: JS基本概念

### 强类型和弱类型

### 严格模式

### ES6 新增的 Let 和 Const

* 两者均是新增声明命令, let 用于变量, const 用于常量
* 都只能在所在的代码块中使用
* 都不存在变量提升
* 都有暂时性死区
* 都不能再同一个作用域反复声明

### 什么是变量提升？ 会带来什么问题？

* 用 var 定义变量可以在被声明前使用/调取, 值为 undefined

  ```javascript
  console.log(v1); // undefined
  var v1 = 100;
  function foo() {
      console.log(v1); // undefined
      var v1 = 200;
      console.log(v1); // 200
  }
  foo();
  console.log(v1); // 100
  ```



什么是暂时性死区？

* 变量在声明前不可被使用, 直到声明才能被使用

  ```javascript
  var tmp = 123;
  if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
  }
  ```

  

1. 什么是块级作用域？
   * ES5只有全局作用域和函数作用域
   
   * 代码块外部的作用域无法读取内部作用域的变量

   * 防止同名内层变量覆盖外层变量
   
     
   
5. 什么是闭包？

   - 声明在另一个函数内部的函数

   - 内部函数对外部函数的变量进行引用, 行程闭包

   - 优点：避免了使用全局变量, 避免了全局变量被污染的可能, 函数内部变量被保护

   - 缺点：由于垃圾回收机制, 变量不会被垃圾回收, 造成内存泄漏

     

6. 执行上下文

   - JS代码执行时生成的环境, 包含所有变量和对象

   - 执行函数或块级代码时, 在当前上下文上层, 建立一个新的上下文环境, 形成一个stack

   - 直到所有代码执行完成, 清空堆栈

     

7. 事件循环

   - 目的：为了处理Ajax网络请求, setTimeout等异步任务,  避免cpu资源浪费

   - 任务队列：主线程执行时, 遇到异步ajax, setTimeout任务, 将任务暂时放入任务队列中。当主线程完全处于空闲状态时, 在从任务队列中调取下一个task执行。

   - 微任务 / 宏任务：Promise产生的任务队列为微任务。宏任务队列有多个, 微任务队列有一个。

   - 主线程优先查找微任务队列。

     

8. 垃圾回收

   - 标记清除：

     ​	a. 进入环境的所有变量进行标记，离开环境时再次被标记，并准备删除

     ​	b. 判断一个对象是否可以获得 （有零个引用的对象总是不可获得的）

     ​	c. 从root对象开始查询, 没有循环引用的问题

   - 引用计数：一个对象有访问另一个对象的权限

     ​	a. 当对象不再被引用, 则被垃圾回收

     ​	b. 当两个对象相互引用而都不被第三方引用, 则被垃圾回收

     

9. 判断对象为空

   - 将JSON对象转换为字符串，判断是否为空

   - for in循环

   - ES6中的Object.keys获取属性名的数组，判断长度

     

7. call vs apply vs bind

   - 用途：改变this的指向, 第一个参数都是this需要指向的对象

   - call和apply直接执行函数，apply将参数放在数组中

   - bind返回一个新函数，需要手动调用

     ```javascript
     // 代理console.log
     function log(){
       console.log.apply(null, arguments)	// 第一个参数为null，代表指向全局对象window或者global
     }
     log(1, 'www', '&&&')	// 1 "www" "&&&"
     
     // 进阶：开头加上（app）：
     function log(){
       var args = Array.prototype.slice.call(arguments)	// 需要将伪数组转化为标准数组
     	args.unshift('(app)')
     	console.log.apply(null, args)
     }
     log(1, '***')	// (app) 1 ***
     ```

     


### **Topic 2: JS中的数据类型**

1. JS中的数据额类型分为哪几类？
   - 基本类型: 数字、字符串、布尔值、null、undefined
   - 引用类型: 对象、Array类型、Function类型

2. 引用类型 vs 基本类型

   |      |                       基本类型                       |                          引用类型                           |
   | ---- | :--------------------------------------------------: | :---------------------------------------------------------: |
   | 变量 |                  简单值, 储存值本身                  |               储存的是对象在Heap内存中的地址                |
   | 存储 |                 变量存在Stack内存中                  |   变量(地址) 储存在Stack内存中, 对象本身储存在Heap内存中    |
   | 大小 |                   根据类型确定大小                   |                    指针(地址) 固定4字节                     |
   | 比较 |       同类直接比较值, 不同类进行隐式转换后比较       |                      比较的是内存地址                       |
   | 例子 | var a = 1; var b = a; 复制的只是值本身, 改变b不改变a | var a = {}; var b = a; a和b指向同一个内存地址, a加属性b也加 |

   

3. Null vs undefined

   ```javascript
   null == undefined; // true
   null === undefined; // false
   var a = null; // typeof(a) 是对象, 值为null
   var a = undefined; // typeof(a) 是undefined, 值为undefined
   ```

4. JS数据类型转化

   - 转成数字类型：Number( ), parseInt( ), parseFloat( )

   - 转成字符串：toString( ), String( )

     
   
5. 如何判断数据类型

   - typeof i.e null -> object
   - instanceof 通过原型链判断继承
   - Object.prototype.toString

6. 

### **Topic 3: 箭头函数**

1. 箭头函数和普通函数有什么区别？

   - **箭头函数this的指向是固定的**，没有自己的this

     ```javascript
     function foo() {
       setTimeout(() => {
         console.log('id:', this.id);
       }, 100);
     }
     
     var id = 21;
     
     foo.call({ id: 42 }); // 42 this指向定义生效时的对象 {id: 42}
     ```

   - 函数体内的this, 指向定义时的对象, 非使用时的对象

   - 不可用作构造函数, 不能使用new命令

   - 不可以使用argument对象, 可以用rest参数替代

   - 不可以使用yield命令, 不能用作generator函数

     

2. 箭头函数的使用场合和不适用场合

   - 适用于封装回调函数, 得益于静态的this, DOM事件的回调函数封装在对象内

     ```javascript
     var handler = {
       id: '123456',
     
       init: function() {
         document.addEventListener('click',
           event => this.doSomething(event.type), false); // 调用对象内的doSomething
       },
     
       doSomething: function(type) {
         console.log('Handling ' + type  + ' for ' + this.id);
       }
     };
     ```

   - 不适用于定义对象的方法

   - 不适用于需要动态this的时候



### **Topic 4: Promise对象**

1. 什么是Promise对象？引入Promise的目的是什么？

   - 是ES6中异步编程的一种解决方案

   - 将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

   - 三种状态：resolved / rejected / pending

   - Promise实例

     ```javascript
     // Promise实例
     function timeout(ms){
       return new Promise(function(resolve, reject)){
      		setTimeout(resolve, ms, "done");                    
       });
     }
      
     timeout(100).then((value) => { // then接受了一个回调函数作为参数
       console.log(value); // done
     })
     
     // 图片加载模板
     function loadImageAsync(url) {
       return new Promise(function(resolve, reject) {
         const image = new Image();
     
         image.onload = function() {
           resolve(image);
         };
     
         image.onerror = function() {
           reject(new Error('Could not load image at ' + url));
         };
     
         image.src = url;
       });
     }
     
     // 链式调用
     getJSON("/post/1.json").then(function(post) {
       return getJSON(post.commentURL); // 返回一个新的Promise实例, 等待这个实例状态变化
     }).then(function (comments) {
       console.log("resolved: ", comments);
     }, function (err){
       console.log("rejected: ", err);
     });
     
     // Promise错误的冒泡性质
     getJSON('/post/1.json').then(function(post) {
       return getJSON(post.commentURL);
     }).then(function(comments) { // some code
     }).catch(function(error) { // 处理前面三个Promise产生的错误
     });
     
     // 使用finally在最后关闭服务器
     server.listen(port)
       .then(function () { // ...
       })
       .finally(server.stop);
     ```

     

2. Promise API中的方法

   - then( ): Promise实例状态改变时的回调函数

   - catch( ): Promise实例异步操作中抛出的错误, 或then中抛出的错误, 用catch处理, Promise中的错误具有冒泡性质

   - finally( ): 不管Promise的状态如何都会执行的回调函数

   - all( ): 将多个Promise实例, 包装成一个Promise实例, 参数为一个数组。

     ​	a. 数组中所有实例状态变为resolved, 则为resolved。返回值组成数组传给回调函数。

     ​	b. 数组中一个实例状态变为rejected, 则为rejected。第一个rejected的返回值传给回调函数。

   - race( ): 将多个Promise实例, 包装成一个Promise实例

     ​	a. 任一个实例状态改变, 则新实例的状态就跟着改变。率先改变的返回值传给回调函数。

   - any( ): 将多个Promise实例, 包装成一个Promise实例

     ​	a. 数组中一个实例状态变为resolved, 则为resolved。

     ​	b. 数组中所有实例状态变为rejected, 则为rejected。

   - resolve( ) / reject( ): 将一个对象转变为Promise实例

     ​	a. 对象为Promise对象: 不改变, 直接返回

     ​	b. 对象为thenable对象: 转为Promise对象, 执行then方法

     ​	c. 对象不是thenable对象: 转为Promise对象, 状态为resolved, 回调函数立即执行

     

3. Promise的缺点

   - 无法取消Promise, 新建后就会执行

   - 如果没有回调函数, Promise内部的错误无法反应到外部

   - Pending状态时无从得知异步操作进行到了哪一阶段

     

### **Topic 5: Generator函数**

1. 什么是Generator函数？有哪些特点

   - 异步编程的一种解决方法

   - 状态机, 封装多个内部状态

   - 返回遍历器, 可以遍历Generator中的内部状态

   - for...of循环可以直接遍历Generator函数, 不需要next方法

     ```javascript
     // Generator写法
     function* helloWorldGenerator() {
       yield 'hello';
       yield 'world';
       return 'ending';
     }
     
     var hw = helloWorldGenerator();
     hw.next() // { value: 'hello', done: false }
     hw.next() // { value: 'world', done: false }
     hw.next() // { value: 'ending', done: true } done表示遍历是否结束
     hw.next() // { value: undefined, done: true }
     
     // 将Generator赋值给对象的Iterator接口
     var myIterable = {};
     myIterable[Symbol.iterator] = function* () {
       yield 1;
       yield 2;
       yield 3;
     };
     
     [...myIterable] // [1, 2, 3]
     
     // 给next带参数 例子1
     function* f() {
       for(var i = 0; true; i++) {
         var reset = yield i;
         if(reset) { i = -1; }
       }
     }
     
     var g = f();
     
     g.next() // { value: 0, done: false }
     g.next() // { value: 1, done: false }
     g.next(true) // { value: 0, done: false }
     
     // 给next带参数 例子2
     function* foo(x) {
       var y = 2 * (yield (x + 1));
       var z = yield (y / 3);
       return (x + y + z);
     }
     
     var a = foo(5);
     a.next() // Object{value:6, done:false}
     a.next() // Object{value:NaN, done:false}
     a.next() // Object{value:NaN, done:true}
     
     var b = foo(5);
     b.next() // { value:6, done:false }
     b.next(12) // { value:8, done:false }
     b.next(13) // { value:42, done:true }
     
     // Generator实现Tick/Tock状态机
     var clock = function* () {
       while (true) {
         console.log('Tick!');
         yield;
         console.log('Tock!');
         yield;
       }
     };
     ```

     

2. yield表达式的作用是什么？
   - 暂停标志
   - 遇到yield, 暂停执行
   - 下一次调用next时, 再继续执行

3. next参数的作用是什么？

   - yield返回undefined

   - next的参数给上一个yield设置返回值

     

4. 遍历器中有哪些方法？

   - throw: 返回的遍历器对象, 可以跑出错误, 在函数体内捕获, 内部捕获前必须执行一次next

     ```javascript
     // 抛出错误
     var g = function* () {
       try {
         yield;
       } catch (e) {
         console.log('内部捕获', e);
       }
     };
     
     var i = g();
     i.next();
     
     try {
       i.throw('a'); // 内部捕获 a new Error("...")
       i.throw('b'); // 外部捕获 b
     } catch (e) {
       console.log('外部捕获', e);
     }
     
     // 例子2
     var gen = function* gen(){
       try {
         yield console.log('a');
       } catch (e) {
         // ...
       }
       yield console.log('b');
       yield console.log('c');
     }
     
     var g = gen();
     g.next() // a
     g.throw() // b
     g.next() // c
     ```

   - return: 终结遍历Generator函数

     ```javascript
     function* numbers () {
       yield 1;
       try {
         yield 2;
         yield 3;
       } finally {
         yield 4;
         yield 5;
       }
       yield 6;
     }
     var g = numbers();
     g.next() // 1
     g.next() // 2
     g.return(7) // 4 return直接进入finally
     g.next() // 5
     g.next() // 7 执行完finally后结束
     
     ```

   - yield* 表达式: 在一个Generator中调用另外一个, 解决手动遍历的问题

     ```javascript
     // 不用yield*手动遍历
     function* foo() {
       yield 'a';
       yield 'b';
     }
     
     function* bar() {
       yield 'x';
       for (let i of foo()) {
         console.log(i); // 手动遍历 foo()
       }
       yield 'y';
     }
     
     for (let v of bar()){
       console.log(v); // x a b y
     }
     
     // 使用yield*
     function* foo() {
       yield 'a';
       yield 'b';
     }
     
     function* bar() {
       yield 'x';
       yield* foo();
       yield 'y';
     }
     ```

     

5. Generator的应用场景

   ​	a. 异步操作的同步化表达

   ​	b. 控制流管理

   ​	c. 在对象上部署Iterator接口, 作为一个类似数组的数据结构

   

6. Generator函数的异步运用

   - 如何实现: 通过yield交出协程的执行权, 等待执行权返回

   - Thunk函数: 传名调用的一种实现方案

   - Async/Await: 是Generator函数的一种语法糖

     ```javascript
     // 包装一个异步任务
     var fetch = require('node-fetch');
     
     function* gen(){
       var url = 'https://api.github.com/users/github';
       var result = yield fetch(url); // 返回Promise对象
       console.log(result.bio);
     }
     
     // 执行
     var g = gen();
     var result = gen.next();
     
     result.value.then(function(data){
       return data.json();
     }).then(function(data){
       g.next(data);
     });如何实现: 通过yield交出协程的执行权, 等待执行权返回
     ```



## Topic 5: 对象

### 创建对象的几种方式

1. 在JS代码中使用**直接量表达式**

   - 若干个名/值对组成的映射

   - 每次运算都创建并初始化一个对象，并计算每个属性的值
   - Object.prototype为对象的原型

2. 通过new创建对象

   - 调用一个构造函数，创建并初始化一个对象，如new Array( ) 

   - 可以自定义一个构造函数
   - 构造函数的prototype为对象的原型

3. Object.create( )函数

   - 第一个参数为对象的原型

### 对象属性及方法

三种特性：可写，可枚举，可配置

1. 判断对象是否含有属性

- in运算符 i.e "toString" in obj
- 对象的hasOwnProperty( )方法检测是否是自有属性
- 对象的propertyIsEnumerable( )方法检测是否是自有属性，且是否可以枚举

2. 列举对象中的属性

- For...in循环出所有**可枚举属性**（包括继承属性）

- Object.keys( )列出所有可枚举的**自有属性**

- Object.getOwnPropertyNames( )列出所有可枚举的**自有属性**

- 属性的枚举性：对象继承的内置属性i.e toString不可枚举，代码中添加的都是可枚举的

  ```javascript
  var o = {};
  o.x = 1;
  
  var p = Object.create(o); // o:x -> p:y -> q.z
  p.y = 2;
  
  var q = Object.create(p);
  q.z = 3;
  
  // 3种方法
  for (let i in q) { console.log(i); } // x, y, z
  Object.keys(q); // z
  Object.getOwnPropertyNames(q) // z
  ```

3. 存储器属性

- 数据属性：一个简单的值

- 存储器属性：由getter和setter定义的属性，也可以继承

  ```javascript
  var p = {
    // 数据属性
  	x: 1.0,
    y: 1.0,
    
    // 存储器属性
    get r(){
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    set r(newValue){
      var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
      var ratio = newValue / oldValue;
      this.x *= ratio;
      this.y *= ratio;
    }
  
  	// 只读存储器属性
  	get theta() { return Math.atan2(this.y, this.x); }
  }
  
  var q = Object.create(p);
  q.x = 2;
  q.y = 3; 
  q.theta(); // 可继承
  ```

4. 属性描述符

- Object.getOwnPropertyDescriptor( )获得对象特定**自有属性**的描述

- Object.defineProperty( )修改属性的特性

  ```javascript
  var obj = { x: 0 };
  // { value: 0, writable: true, enumerable: true, configurable: true }
  Object.getOwnPropertyDescriptor(obj, "x");
  // 将属性变为只读
  Object.defineProperty(obj, "x", { writable: false }); 
  ```

### 对象的三种属性

1. 原型属性

- Object.getPrototypeOf( )查询对象的原型

- isPrototypeOf( ) 判断一个对象是否为另一个对象的原型

  ```javascript
  var obj2 = { x: 0 };
  var obj3 = new Date();
  var obj4 = Object.create(obj2);
  Object.getPrototypeOf(obj2); // 原型为 Object.prototype 
  Object.getPrototypeOf(obj3); // 原型为 Date{}
  Object.getPrototypeOf(obj4); // 原型为 obj2 -> { x: 0 }
  obj2.isPrototypeOf(obj4);    // true, obj2是obj4的原型
  ```

2. 类属性

- 字符串，表示对象的类型信息

- 默认的toString( )方法，查询类属性

  ```javascript
  var obj5 = [];
  Object.prototype.toString.call(obj5); // [object Array]
  Object.prototype.toString.call(obj6); // [object Date]
  ```

### 序列化对象

对象序列化：将对象的状态转换为字符串JSON.stringify( )，将字符串还原为对象JSON.parse( )

```javascript
var obj7 = { x: 1, y: { z: [false, null, ""] } };
var s = JSON.stringify(obj7);
console.log(s);
console.log(JSON.parse(s));
```



## **Topic 6: 数组**

### 创建数组

```javascript
// 直接量
var empty = [];
var primies = [1, 3, 5];

// 构造函数
var a = new Array();
var b = new Array(10);
```

### 数组的增删

```javascript
a = [];
a.push(1, 2);

b = [1, 2, 3];
delete b[1];
1 in b; // false, 在index=1处没有元素
b.length; // 3, delete不影响数组长度
```

### 数组的遍历

```javascript
var a = [1,2,3,4,5];

for (let index in a) {
  console.log(a[index]); // for...in
}

for (let item of a) {
  console.log(item); // for...of
}

a.forEach(function (x) {
  console.log(x); //forEach
});
```

### 多维数组

```javascript
// 9*9 乘法表
var table = new Array(10);
for (var i = 0; i < table.length; i++) {
  var row = new Array(10);
  for (var j = 0; j < row.length; j++) {
    row[j] = i * j;
  }
  table[i] = row;
}

table[9][9]; // 81
```

### 数组中的方法

```javascript
// 1. Array.join 
// 数组中的元素转化成字符串并连接 String.split()的逆向操作
var lst1 = [1, 2, 3, 4, 5];
lst1.join(); // "1,2,3" 默认使用逗号
lst1.join(" ") // "1 2 3 4 5"
lst1.join("") // "12345"

// 2. Array.reverse()
// 翻转数组中的元素, 在原先的数组中重排
var lst2 = [1, 2, 3, 4, 5];
lst2.reverse(); // 返回[5,4,3,2,1]
lst2; 					// 原数组变为[5,4,3,2,1]

// 3. Array.sort()
// 参数1在前,返回-1; 参数1在后,返回1
var lst3 = ['a', 'c', 'b'];
var lst4 = [33, 4, 1111, 222];
lst3.sort(); // a, b, c
lst4.sort(function(a, b){
  return a - b
});

// 4. Array.concat()
// 不会扁平化, 不会修改调用的数组
var lst5 = [1, 2, 3];
lst5.concat(4, 5); // 返回[1,2,3,4,5]
lst5.concat(4, [5]); // 返回[1,2,3,4,5]
lst5.concat(4, [5, [6]]); // 返回[1,2,3,4,5,[6]]

// 5. Array.slice()
var lst6 = [1, 2, 3, 4, 5];
lst6.slice(0, 3); // 从index0到index3 不包括index3 -> [1, 2, 3]
lst6.slice(3); // 从index3开始 -> [4, 5]
lst6.slice(1, -1); // [2, 3, 4]
lst6.slice(-3, -2); // [3]

// 6. Array.splice()
// 修改调用的数组
var lst7 = [1, 2, 3, 4, 5, 6, 7, 8];
var lst8 = [1, 2, 3, 4, 5];
lst7.splice(4); // 返回[5, 6, 7, 8], lst7 = [1, 2, 3, 4]
lst7.splice(1, 2); // 返回[2, 3], lst7 = [1, 4]
lst8.splice(2, 0, 'a', 'b'); // 返回[1, 2, 'a', 'b', 3, 4, 5] 从index=2开始插入
lst8.splice(2, 2, [1,2], 3); // 返回[1, 2, [1, 2], 3, 3, 4, 5]

// 7. push(), pop()
var lst8 = [];
lst8.push(1, 2); // [1, 2]
lst8.pop(); 		 // [1]
lst8.push(3);    // [1, 3]

// 8. shift(), unshift()
// unshift在头部添加元素，返回数组的新长度, 一次性插入
// shift删除头部的第一个元素，返回删除的元素
var lst9 = [1, 2, 3, 4, 5];
lst9.shift(); // 1
lst9; // [2, 3, 4, 5]

var lst10 = [1, 2, 3, 4, 5];
lst10.unshift(100, 101, 102); // 6
lst10; // [100, 101, 102, 1, 2, 3, 4, 5]

// 9. forEach()
var lst11 = [1, 2, 3, 4, 5];
lst11.forEach(function (v, i, a) { // 元素值, index, 数组本身
  a[i] = v + 1;
});
lst11; // [2, 3, 4, 5, 6]

// 10. map()
// 数组的每个元素map给函数, 返回一个新数组
var lst12 = [1, 2, 3];
lst12 = lst12.map(function (x) {
  return x * x;
});
lst12; // [1, 4, 9]

// 11. filter()
// 返回一个子集
var lst13 = [1, 2, 3];
lst13 = lst13.filter(function (x) {
  return x % 2 == 1;
});
lst13; // [1, 3]

// 12. every(), some()
// 确认返回什么值后, 停止遍历

// 13. reduce(), reduceRight()
var lst14 = [1, 2, 3, 4, 5];
lst14.reduce(function (a, b) {
	return a > b ? b : a; // 找数组中的最大值
});

// 14. indexOf(), lastIndexof()
var lst15 = [0, 1, 2, 1, 0];
lst15.indexOf(1); // 1
lst15.lastIndexOf(1); // 3
lst15.indexOf(3); // -1

// 15. isArray()
// 可以用于判断一个对象是否为数组
Array.isArray([]); // true
Array.isArray({}); // false
```

### 类数组对象

DOM方法例如document.getElementByTagName( )返回一个类数组对象，方便遍历。（伪数组）

- 类数组对象：对象具有length属性

  ```javascript
  // 类数组对象使用数组方法map()
  var obj = { 0: "a", 1: "b", 2: "c", length: 3 };
  var res = Array.prototype.map.call(obj, function (x, y) {
    return x.toUpperCase();
  });
  res; // ['A', 'B', 'C']
  
  // 类数组对象字符串
  var str = "Hello World";
  Array.prototype.map.call(str, function(x){
    return x.toLowerCase();
  }); // 返回 'h','e','l','l','o',' ','w','o','r','l','d'
  ```

  

## **Topic 7: 函数**

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





为什么引入Class？

- 相比prototype的写法更类似于C++和Java, 面向对象的语法

  

什么是静态方法？

- 类中的static方法不会被继承, 直接通过类来调用











