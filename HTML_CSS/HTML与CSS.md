## Topic 1:  HTML基础

### **内联元素inline vs 块级元素block vs 空元素void**

-	如何确定是哪种元素：
  -	css规定每个元素都有一个display值，确定该元素的类型。
-	块元素：
  -	div，ul，h1-h6，li
  -	单独显示，前后各有一个换行，web页面的主要构建模块
-	行内元素：
  -	span，img，input
  -	在文本流的行内出现，出现在段落中，标记小段内容
-	空元素：
  -	br，img
  -	是没有实际内容的元素，可以使用简写不加结束标记

### Link vs @import

- 都是页面导入**外部样式**的方式
- link是XHTML标签，可以用于加载css以外的内容，定义rel等；@import是CSS提供专门用于加载CSS
- link的内容与页面同时加载；@import引用的CSS等待页面加载结束后加载
- link支持使用js控制DOM改变样式

### 浏览器内核的理解

主要分为**渲染引擎**和**JS引擎**

- 渲染引擎：获取页面HTML内容，整理CSS信息，计算网页显示方式，GPU渲染等
- JS引擎：解析执行JS，实现逻辑，控制DOM的交互

### **Doctype**的作用

- 书写：放在HTML文件的最上面，不属于HTML标签
- 作用：告知浏览器的解析器用什么文档标准解析当前文档
- 缺失：则浏览器以兼容模式呈现文档，向后兼容老浏览器的行为

### HTML5的变化

- 语义化：添加header，footer，article，section，nav等语义化元素
- 删除部分纯样式标签
- 表单增强
- 新api
- 绘画canvas，媒体video/audio
- localStorage本地离线储存

### HTML5语义化的理解

- 让页面的内容结构化，结构更清晰，便于浏览器解析
- 搜索引擎爬虫依赖HTML标记确定上下文和关键字的权重，有利于SEO
- 更便于维护，提高阅读性

### HTML本地储存

- Cookie
- sessionStorage / localStorage：不发数据给服务器，仅在本地保存
- 储存大小：
  - cookie数据 <= 4k
  - sessionStorage / localStorage有存储大小限制，比cookie大，可达到5M
- 生命周期：
  - localStorage：存储持久数据，浏览器关闭后不会消失，需要用户主动删除
  - sessionStorage：数据在当前浏览器窗口关闭后自动删除
  - cookie：失效前一直有效，即使浏览器关闭
- 共享：
  - sessionStorage不能共享
  - localStorage可在同源文档之间共享
  - cookie在同源/符合path规则的文档之间共享

## Topic 2:  HTML标签和属性

### **\<a>标签**

- 使用id链接到元素，#标识符，用于Back to top的实现等
- title属性：设置链接注释
- target属性：设置浏览器打开链接的目标窗口，_blank则打开一个新窗口或新标签页 （优缺点）

### **\<canvas>和svg**的差别

- svg：矢量图；xml技术；描述二维图形的语言；用于制作小型图标或绘制地图；支持事件绑定；通过标签绘制
- canvas：标量图；页面上的画布；用于实际网络游戏开发，可以引入jpg图片等；制作统计图表等；通过JS绘制；直接在HTML上操作图形。

### em和i的区别

- 效果都是斜体
- em是语义化标签，表示emphasis强调
- i是样式化标签，表示斜体

### HTML中alt属性

- 图片不输出信息时，显示alt信息，鼠标显示title
- 图片正常读取是，不显示alt信息，显示title
- title属性为链接添加描述性文字

### 为什么弃用table标签

服务器在加载代码的过程中，table标签的内容要等待全部下载完成在会显示。包含多图片时要一直等待图片加载完才能继续加载网页，速度过慢。





