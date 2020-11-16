### CSS概览

```css
font-weight: bold;
font-size: 12px; /* 注释 */
```



### 关联CSS和HTML

#### 1. 内联样式

```html
<p style="margin: 20px; border: solid;">
  Content
</p>
```

#### 2. 样式表

```html
<style>
p { text-indent: .5in }
.error{ background-color:red }
</style>

<head>
  <title>Title</title>
  <link rel="stylesheet" href="style.css" type="text/css">
</head>
```



### Position：指定元素的定位类型

- Static：默认文档内容流定位
- Absolute：元素独立定位，不是文档流的一部分，相对于最近的祖先元素或文档本身
- Fixed：元素根据浏览器窗口定位，独立，不会随着稳定其他部分滚动
- Relative：按正常文档流布局，相对于文档的其他位置调整

除了static值，其他都可以用Top/Left/Right/Bottom定位。z-index应用于定位元素的重叠。

```html
<!--距离文档左,上各100px的元素-->
<div style="position: absolute; top: 100px; left: 100px;">
```



### 边框、内外边距

#### 1. 边框 Border

```css
border: solid black 1px;
border: 3px dotted red;
border-radius: 20px; /* 设置圆滑边框 */
```

#### 2. 外边距 Margin / 内边距 Padding

- Margin：边框外面和相邻元素之间的空间
- Padding：边框和元素内容之间的空间

```css
padding: 1px 2px 3px 4px;

padding-top: 1px;
padding-right: 2px;
padding-bottom: 3px;
padding-left: 4px;
```



### 盒模型

#### 1. 标准盒模型

盒子模型宽度 = 元素内容宽度Width属性 + padding内边距 + border边距 + margin外边距

#### 2. 怪异盒模型

盒子模型宽度 = 元素内容宽度Width属性 + margin外边距

怪异盒模型中的元素的Width属性包含了padding内边距和border边框

#### 3. box-sizing属性

- content-box：默认值，指定标准盒模型
- border-box：指定怪异盒模型



### 元素的可见性

#### 1. Visibility属性

- Hidden：元素不显示，布局上仍然保留空间
- Visible：元素显示

#### 2. Display属性

指定元素的显示类型，块状/内联元素等

- None：元素不显示，且不进行布局，触发回流和重绘

#### 3. Opacity属性

指定元素的透明度，数值为0-1之间的数字

#### 4. Overflow熟悉

- Visible：默认值，内容可以溢出边框
- Hidden：剪裁掉溢出的内容，在元素区域外不会绘制
- Scroll：元素显示滚动条，一直显示
- Auto：如超出显示滚动条



### 脚本化内联样式

元素的style属性：值为CSSStyle对象

```javascript
e.style.fontSize = "24pt"; // 包含单位
e.style.color = "red";
e.style.left = (left_margin + left_border + left_padding) + "px";

// 设置样式
e.setAttribute("style", s);
e.style.cssText = s;

```



### CSS动画

例16-3：CSS动画 shake和fadeOut方法



### 查询计算出的样式

- Window对象的getComputedStyle方法：获取一个元素的计算样式，返回CSSStyle对象

  ```javascript
  var title = document.getElementsById("some_id");
  var title_style = window.getComputedStyle(title, null);
  ```



### 脚本化CSS类

改变元素的class属性值，则改变了一组样式选择器

```javascript
e.className = "new_class";
// 返回只读类数组, 包含元素的类名
// 添加/清除类名
var classes = e.classList; 
classes.remove("class1");
classes.add("class2");
```



### 脚本化样式表

```javascript
var sheets = document.styleSheets; // 文档中所有样式表的集合
sheets[0].disabled = "true"; // 关闭一个样式表
```







