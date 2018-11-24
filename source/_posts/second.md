# html标签及属性学习笔记  

## html基础知识点

* 大多数 HTML 元素可以嵌套
* 没有内容的 HTML 元素被称为空元素,在开始标签中添加/,是关闭空元素的正确方法
* HTML标签可以拥有属性，属性以名称/值对的形式出现，属性总是在HTML元素的开始标签中规定
* 属性值应始终被包括在引号内，若属性值本身有双引号，则在双引号外使用单引号

### 基本格式  

    <!DOCTYPE HTML>
    <html>
    <body>
    
    </body>
    </html>

### 标题

    <h1>一级标题</h1>
    <h2>二级标题</h2>
    ……
    <h6>六级标题</h6>

### 段落

    <p>第一段</p>
    <p>另开一段</p>

### 链接

    <a href="链接">代替连接的文字</a>

*用图片作为链接*

    <a href="链接">
    <img border="0" src="图片路径"/>
    </a>


### 图片

    <img src="图片路径及名字" width="宽度" height="高度" />
*这是一个空标签*

### 表格
    <table> </table>

### 文本格式化

    <b>粗体</b>
    <strong>加重语气</strong>
    <big>加大字体</big>
    <em>强调</em>
    <i>斜体</i>
    <small>小字</small>
    <sub>下标</sub>
    <sup>上标</sup>
    <del>删除线</del>
    <ins>下划线</ins>

### 预格式文本

    <pre> </pre>

*预格式文本保留文本中的空格和换行*

### 换行

    <br/> 

*这是一个空标签*

### 引用

    <blockquote>长引用</blockquote>
    <q>短引用</q>

**引用标签列表**

![](second\2.JPG)

### 注释

    <!--注释内容-->

### 水平线

    <hr />

### 背景颜色

    <p style="background-color:yellow">a yellow paragraph.</p>

### 背景图片

    <body background="图片路径">
    </body>

*若图像小于页面，图像会进行重复*  
*gif和jpg均可作为背景*
### 字体、颜色及大小

    <p style="font-family:字体;color:颜色;font-size:数字px;"> </p>

### 文本对齐

    <h1 style="text-align:对齐方式"> </h1>

### 缩写

    <abbr title="全称">缩写.</abbr>
    <acronym title="全称">首字母缩写</acronym>

### 文字方向

    <bdo dir="rtl">从右向左输出</bdo>

### 书签
1.在文档中对锚进行命名（创建一个书签）：

    <a name="命名">书签所在处的文字</a>
2.在同一文档中创建指向该锚的链接：

    <a href="#命名">代替的文字</a>
3.在其他页面中创建指向该锚的链接：

    <a href="书签所在网址#命名">替代的文字</a>

*href创建指向另一个文档的链接*  
*name创建文档内书签*

### 替换文本属性

    <img src="图片名" alt="可替代的文字">

### 图片对齐方式
**未设置对齐方式时，bottom是默认对齐方式**

1.文字对齐图片下方：

    <img src="图片路径" align="bottom">
2.文字对齐图片中间：

    <img src="图片路径" align="middle">
3.文字对齐图片上方：

    <img src="图片路径" align="top">

### 浮动图像
图像浮动到文本的左侧（右侧）：

    <img src ="图片路径" align ="left（right）"> 

### 著作标题

    <p><cite>标题</cite>by xxx.</p>

### 文档在何处显示

    <a href="链接" target="_blank">代替链接的文字</a>   
*target属性定义被链接的文档在何处显示*

### 跳出框架

    <a href="/index.html" target="_top">代替的文字</a>

### 计算输出标签列表

![](second\1.JPG)

### 列表
#### 无序列表

    <ul type="dics/circle/square">
    <li>内容</li>
    <li>内容</li>
    ……
    </ul>

*type中表示无序列表不同的项目符号*
#### 有序列表

    <ol type="a/A/i/I">
    <li>内容</li>
    <li>内容</li>
    ……
    </ol> 
*type中分别表示有序列表不同的项目符号，其中a表示小写字母列表，A表示大写字母列表，i表示小写罗马字母列表，I表示大写罗马字母列表*

### HTML类

*&lt;div&gt;是**块级元素**,能够作为HTML其他元素的容器。*

在&lt;body&gt;标签前插入一段类定义

    <head>
    <style>
    .cities 
    {
        background-color:背景颜色;
        color:字体颜色;
        margin:20px;（类边框到网页边框的距离）
        padding:20px;（字体到类边框的距离）
    } 
    </style>
    </head>

在&lt;body&gt;中插入：

    <div class="cities">

### 行内元素
*&lt;span&gt; 元素是行内元素，能够用作文本的容器*  
在&lt;body&gt;标签前插入一段定义

    <head>
    <style>
      span.red {color:red;}
    </style>
    </head>

在行中使用span：

    <span class="red">用span表示的内容</span>

