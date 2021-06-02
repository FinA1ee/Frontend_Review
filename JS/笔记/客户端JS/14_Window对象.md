## Window 对象

### 计时器

- setTimeout 方法，setInterval 方法：注册指定时间后单词/重复调用的函数
- 分别同 clearTimeout 和 clearInterval 方法取消函数调用
- 例子：invoke 定时器函数

### 浏览器定位/浏览历史

1. Window 对象

- location 属性：引用 Location 对象, 显示文档的 URL
- history 属性：引用 History 对象

2. Location 对象

- href 属性：URL 文本 同 Document.href
- protocol / host / hostname / port 等其他 URL 分解属性
- search 属性: URL 问号后的部分
- hash 属性: URL 片段标识符号部分

- assign 方法: 根据参数 URL 跳转窗口
- replace 方法: 根据参数 URL 跳转窗口, 在浏览历史中会把当前文档删除
- reload 方法：重新载入当前文档

3. History 对象

- 显示窗口浏览历史
- length 属性显示元素数量，但由于安全考虑脚本不能访问保存的 URL
- back/forward/方法: 在浏览历史中向前/后跳转
- go 方法: 接受一个整数进行跳转

### 屏幕信息

1. Navigator 对象

- 包含浏览器厂商/版本信息：判断浏览器的类型/版本
- appName 属性：web 浏览器全称 i.e Netscape
- appVersion 属性：浏览器厂商/版本信息 显示是第几代兼容的浏览器
- userAgent 属性：USER-AGENT 首部中发送的信息
- platform 属性：允许浏览器的操作系统
- onLine 属性：判断是否连网
- cookieEnable 方法：判断浏览器是否能永久保存 Cookie

2. Screen 对象

- 窗口显示大小/可用颜色等信息
- 可用来确定 Web 应用是否运行在小屏幕上

### 对话框

1. 在窗口中显示对话框

- alert 方法：显示消息等待用户关闭，**部分浏览器产生阻塞**
- confirm 方法：要求用户选择确认或取消，返回布尔值，**产生阻塞**
- prompt 方法：显示消息，等待用户输入字符串，返回字符串，**产生阻塞**

### 多窗口

1. 打开 / 关闭窗口

- open 方法：打开一个新窗口/标签页，返回新的 window 对象
- close 方法：关闭标签页

2. 窗体之间的关系

- parent 属性: 引用包含它的窗口
- top 属性: 引用当前的顶级窗口

3. 交互窗口
