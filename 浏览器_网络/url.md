### URL是什么？

- 统一资源定位符，定位资源的位置。
- 包含方案(http)，服务器位置，资源路径(/index.html)

### URL参数组件

- 目的：负责解析URL的应用程序需要协议参数来访问资源，需要输入参数才能与服务器正常交互。
- URL可以分割成若干个路径段，每段都可以有自己的参数。
- www.joes-hardware.com/hammers;sale=false/index.html;graphics=true

### URL查询字符串 ?

- www.joes-hardware.com/check.cgi?item=12731&color=blue 查询是否有货
- 通过提问缩小请求资源类型的范围

### URL片段

- #字符，引用部分资源或资源的一个片段
- i.e /index.html#part1 指向HTML文档中的一个特定图片或小节
- 服务器端处理整个对象，再由浏览器显示特定url特定片段

### URL的缺点

只定位资源的位置，资源一旦被移走，URL就不再有效，无法对资源重新定位。

### URL未来

- URN 统一资源名的新标准
- 无论资源搬移到任何地方，URN都能为对象提供稳定的名称
- 通过中间层对请求的资源进行登记和跟踪，解析后获取实际的URL



## 

