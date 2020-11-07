## Window对象

#### 1. 计时器

- setTimeout方法，setInterval方法：注册指定时间后单词/重复调用的函数
- 分别同clearTimeout和clearInterval方法取消函数调用
- 例子：invoke定时器函数

#### 2. 浏览器定位/浏览历史

- Window对象
  - location属性：引用Location对象
  - history属性：引用History对象
- Document对象的URL属性：当前窗口的URL
- Location对象
  - href属性：URL文本
  - 其他URL分解属性
  - search/hash属性：问号之后的URL
  - assign/replace方法：根据参数URL跳转窗口
  - reload方法：重新载入当前文档
- History对象
  - 显示窗口浏览历史
  - length属性显示元素数量，但由于安全考虑脚本不能访问保存的URL
  - back/forward/go方法：在浏览历史中向前/后跳转

#### 3. 屏幕信息

- Navigator对象
  - 包含浏览器厂商/版本信息：判断浏览器的类型/版本
  - appName属性：web浏览器全称 i.e Netscape
  - appVersion属性：浏览器厂商/版本信息 显示是第几代兼容的浏览器
  - userAgent属性：USER-AGENT首部中发送的信息
  - platform属性：允许浏览器的操作系统
  - onLine属性：判断是否连网
  - cookieEnable方法：判断浏览器是否能永久保存Cookie
- Screen对象
  - 窗口显示大小/可用颜色等信息
  - 可用来确定Web应用是否运行在小屏幕上

#### 4. 对话框

- Alert方法：显示消息等待用户关闭，**部分浏览器产生阻塞**
- Confirm方法：要求用户选择确认或取消，返回布尔值，**产生阻塞**
- Prompt方法：显示消息，等待用户输入字符串，返回字符串，**产生阻塞**

#### 5. 多窗口

- Window对象的open方法：打开一个新窗口/标签页，返回新的window对象
- Window对象的close方法：关闭标签页
- 窗体之间的关系/交互

