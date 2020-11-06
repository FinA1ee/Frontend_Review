## 客户端JS

#### 1. Window对象

- Location属性：当前显示在窗口中的URL

- Alert方法：弹出对话框

- setTimeout方法：注册回调函数，定时触发

  ```javascript
  window; // 引用, 客户端JS中Window对象是全局对象
  window.location = "http://www.baidu.com";
  alert("Hello");
  setTimeout(function(){ alert("WTF"); }, 2000); 
  ```

#### 2. Document对象

- document属性：引用Document对象，表示显示在窗口中的文档

- getElementById方法：根据元素id，返回单一Element元素

  ```javascript
  document; // 引用
  var hello = document.getElementById("hello"); // 查找id为hello的元素
  ```

#### 3. Element对象

- style属性：修改元素的呈现

- className属性：改变类，修改应用到元素上的类名

  ```javascript
  hello.style.background = "white";
  hello.className = "Intro"; // Intro为一个CSS类
  ```

#### 事件处理属性 / 异步调用

- onclick：用户单击触发

- onload：window对象的处理程序，文档内容稳定可操作时触发，一般用于封装JS代码

  ```javascript
  hello.onclick = function(){
  	alert("Hello World");
  };
  
  window.onload = function(){
  	// js代码  
  }
  ```



## HTML中嵌入JS代码

#### 1. \<script>标签

#### 2. 外部文件引入：使用src引入纯JS代码文件

- 优点:
  - 删除大块JS代码，简化HTML文件，模块化
  - 多个Web页面共用JS代码，方便管理
  - 只需下载一次，其他页面使用浏览器缓存检索
  - 可以从其他网站载入脚本，利用缓存
- 缺点：从其他服务器载入脚本带来的安全隐患

```html
<script src=".../....js"></script>
```

#### 脚本类型：type="text/javascript"

#### 

## JS程序的执行

#### 1. JS执行的两个阶段

- 第一阶段：载入文档内容，按顺序执行<script>当中的所有JS代码
- 第二阶段：事件驱动，异步，在文档载入完毕后发生

#### 2. 同步/异步/延迟脚本

- HTML解析器遇到<script>时，默认必须先执行脚本，再恢复文档渲染和解析（src中下载外部文件带来时延）
- 脚本的执行默认是同步和阻塞的
- \<script>标签有defer和async的布尔属性，可以改变脚本的执行方式
  - defer：浏览器延迟脚本的执行，直到文档载入完成并可操作
  - async：浏览器可以尽快执行脚本，不在下载脚本时阻塞文档解析，优先级更高，可能会无序执行

#### 3. 事件驱动的JS











