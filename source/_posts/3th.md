# CSS相关学习笔记（上）

## css概述
* CSS 指层叠样式表 (Cascading Style Sheets) 
* 样式定义如何显示 HTML 元素
* 样式通常存储在样式表中
* 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
* 外部样式表可以极大提高工作效率
* 外部样式表通常存储在 CSS 文件中
* 多个样式定义可层叠为一

## css基础内容
CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。  
每条声明由一个属性和一个值组成。  
属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

    selector {property: value}


举个栗子：

![一个css属性和值的例子](3th\1.jpg)

### 值的不同写法  
除了英文单词 red，我们还可以使用十六进制的颜色值 #ff0000（css缩写为#f00：

    p { color: #ff0000; }
    p { color; #f00; }
我们还可以通过两种方法使用 RGB 值：

    p { color: rgb(255,0,0); }
    p { color: rgb(100%,0%,0%); }

**若值为若干单词，要给值加引号**  
**空格不影响css语句**

### 选择器的分组
你可以对选择器进行分组，这样，被分组的选择器就可以分享相同的声明。用逗号将需要分组的选择器分开。

    h1,h2,h3,h4,h5,h6 {color: green;}

以上例子表示所有标题的颜色都为绿色。

### 派生选择器
派生选择器依赖于上下文关系来应用或避免某项规则
举个栗子：
以下将strong元素定义为斜体字而不是粗体字：

    li strong {
    font-style: italic;
    font-weight: normal;
      }

输入以下代码：

    <p><strong>粗体</strong></p>
    
    <ol>
    <li><strong>斜体</strong></li>
    <li>正常字体</li>
    </ol>

效果如下：  
**粗体**  
*斜体*  
正常字体  

再举个大（bushi）栗子：

    strong {
     color: red;
     }
    
    h2 {
     color: red;
     }
    
    h2 strong {
     color: blue;
     }

输入html指令：

    <p>The strongly emphasized word in this paragraph is<strong>red</strong>.</p>
    <h2>This subhead is also red.</h2>
    <h2>The strongly emphasized word in this subhead is<strong>blue</strong>.</h2>

效果如下：

![](3th\2.JPG)

### id选择器
id选择器用#来定义，请你吃栗子：

    #red {color:red;}
    #green {color:green;}

在html代码中，

    <p id="red">这个段落是红色。</p>
    <p id="green">这个段落是绿色。</p>

**id属性只能在每个html文档中出现一次**  
id选择器常常用于建立派生选择器  
即使被标注为 sidebar 的元素只能在文档中出现一次，这个 id 选择器作为派生选择器也可以被使用很多次  
**id选择器也可以独立发挥作用**  

栗子栗子：

    #sidebar {
	border: 1px dotted #000;
	padding: 10px;
	}

### css类选择器
在 CSS 中，类选择器以一个点号显示：

    .center {text-align: center}

在下面的 HTML 代码中，h1 和 p 元素都有 center 类。这意味着两者都将遵守 ".center" 选择器中的规则。

    <h1 class="center">
    This heading will be center-aligned
    </h1>

    <p class="center">
    This paragraph will also be center-aligned.
    </p>

**类名的第一个字符不能使用数字**
#### class也可以被用作派生选择器
以下例子中类名为fancy的元素内部会以灰色背景显示橙色字体

    .fancy td {
	    color: #f60;
	    background: #666;
	    }
而以下例子效果仅限制于被标注fancy的表格单元

    td.fancy {
	    color: #f60;
	    background: #666;
	    }

    <td class="fancy">

### 属性选择器
一个栗子

    [title]
    {
    color:red;
    }

为title属性的所有元素设置样式
在html上应用为：

    <h2 title="Hello world">Hello world</h2>

此时Hellow world为红色字体

两个栗子

    [title=W3School]
    {
    border:5px solid blue;
    }
为 title="W3School" 的所有元素设置样式  
应用同上

#### 多个值
包含指定值的title属性的所有元素样式设置
第一种书写方式：

    [title~=hello] { color:red; }
在上面这个例子中，title属性中包含hello的均使用该样式
第二种书写方式：

    [lang|=en] { color:red; }
title属性中包含en的均使用该样式

#### 设置表单格式
属性选择器在为不带有 class 或 id 的表单设置样式时

    input[type="text"]
    {
        属性样式内容
    }

### 选择器优先级
四位数排序法：
1. style（1000）   
2. id（0100）   
3. class（0010） 
4. tag（0001）  
 

### 如何创建css

创建css时需要注意：*属性值和单位之间不留空格*
#### 外部样式表
使用情况：样式需要应用于很多页面
插入外部样式表（使用&lt;link&gt;））  

    <head>
    <link rel="stylesheet" type="text/css" href="文件名" />
    </head>

#### 内部样式表
使用情况：单个文档需要特殊样式
插入内部样式表(使用&lt;style&gt;)

    <head>
    <style type="text/css">
    样式内容
    </style>
    </head>

#### 内联样式
*由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势*

    <p style="color: sienna; margin-left: 20px">
    This is a paragraph
    </p>

#### 多重样式
**如果某些属性在不同的样式表中被同样的选择器定义，那么属性值将从更具体的样式表中被继承过来。**  
即：内联样式>内部样式表>外部样式表  

## css样式

### css背景

#### 纯色背景

    {background-color:颜色}

#### 背景图片：

    body/命名{background-image:url(图片地址);}

* 为了更好地展示背景，可以在应用于段落或文字时设置少许边距
* 所有背景属性都不能继承

#### 背景重复
 
     {
      background-image: url(/i/eg_bg_03.gif);
      background-repeat: repeat;
     }

* 只在水平方向、垂直方向平铺：repeat-x/repeat-y  
* 不平铺：no-repeat


#### 改变图像在背景中的位置

*在这种情况下一般不平铺*

    body
      { 
        background-image:url('/i/eg_bg_03.gif');
        background-repeat:no-repeat;
        background-position:center;
      }

位置关键字：top、bottom、left、right 和 center  
**位置同样可以用百分比来表示**
* 百分数值同时应用于元素和图像：即图像中x%y%的点和元素中x%y%的点对齐  
* 若只提供一个百分数值，则将用作水平值，垂直值默认为50%
* background-position的默认值是0%0%，即top left

#### 长度值
元素内边距区左上角的偏移如果设置值为 50px 100px，图像的左上角将在元素内边距区左上角向右 50 像素、向下 100 像素的位置上

#### 背景关联
当文档向下滚动时，背景也会随之滚动，若想防止滚动，可使用：

    {background-attachment:fixed}

### css文本

#### 缩进文本（text-indent）
所有段落首行缩进5em（基本格式）：

    p {text-indent: 5em;}

* text-indent可以设置为负数（为了避免文本超出浏览器左边界，可以设置外边距或内边距）
* text-indent可以使用所有长度单位，包括百分比（百分数要相对于缩进元素父元素的宽度）
* text-indent 属性可以继承

#### 水平对齐（text-align）
共有五个值：left、right、center、&lt;CENTER&gt;、justify  
三种居中值的区别  
center：将文本居中  
&gt;CENTER&gt;：将整个元素居中  
justify：文本行的左右两端都放在父元素的内边界上，调整单词和字母间的间隔，使各行的长度恰好相等

#### 字间隔（word-spacing）
默认值为0，输入正值，间隔增加，输入负值，间隔减小

#### 字母间隔（letter-spacing）
与字间隔的区别：字母间隔修改的是字符或字母之间的间隔

#### 字符转换（text-transform）
none（默认值）：对文本不做任何改动  
uppercase：将文本转换为全大写  
lowercase：将文本转换为全小写  
capitalize：对每个单词的首字母大写  

#### 文本装饰（text-decoration）
none：关闭应用到元素上的所有装饰  
underline：下划线  
overline：上划线  
line-through：贯穿线  
blink：文本闪烁  
none值应用：去掉超链接的下划线  
结合多种装饰：  

    a:link a:visited {text-decoration: underline overline;}

**两个不同装饰与同一元素匹配，胜出规则的值会完全取代另一个值（即取代而非累积）**

#### 处理空白符（white-space）
normal（默认值）：将连在一起的所有空白符合并为一个空格，回车也会转换成空格  
pre：空白符和回车不会被忽略  
nowrap：除非使用&lt;br&gt;，否则无法换行  
pre-wrap：保留空白符序列，但是文本行会正常地换行  
pre-line：合并空白符序列，但保留换行符  

#### 文本方向（direction）
ltr（默认值）：从左到右的文本  
rel：从右到左的文本  
* 影响块级元素中文本的书写方向、表中列布局的方向、内容水平填充其元素框的方向、以及两端对齐元素中最后一行的位置。
* 对于行内元素，只有当 unicode-bidi 属性设置为 embed 或 bidi-override 时才会应用 direction 属性

### css字体
css中有两种类型的字体：通用字体系列和特定字体系列

五种通用字体：
Serif 字体
Sans-serif 字体
Monospace 字体
Cursive 字体
Fantasy 字体  
#### 指定字体（font-family）
使用一种随意cans-serif字体：

    body {font-family: sans-serif;}

使用更具体的字体：

    h1 {font-family: Georgia;}

当用户代理山没有安装这个字体时，结合特定字体名和通用字体系列来解决：

    h1 {font-family: Georgia, serif;}

为给定的元素指定一系列类似的字体。要做到这一点，需要把这些字体按照优先顺序排列，然后用逗号进行连接：

    p {font-family: Times, TimesNR, 'New Century Schoolbook',Georgia, 'New York', serif;}

* 只有当字体名中有一个或多个空格，或者如果字体名包括 # 或 $ 之类的符号，就需要在声明中加引号
* 一般来说单双引号都行，但如果把一个 font-family 属性放在 HTML 的 style 属性中，则需要使用该属性本身未使用的那种引号

#### 字体风格（font-style）
normal：文本正常显示  
italic：文本斜体显示  
oblique：文本倾斜显示  
*italic 和 oblique 的区别：*  
*italic是一种简单的字体风格，对每个字母的结构有一些小改动
oblique文本是正常竖直文本的一个倾斜版本*  
*通常情况下，italic 和 oblique 文本在 web 浏览器中看上去完全一样*

#### 字体变形（font-variant）
可以设置字体大小（例如小型大写字体：small-caps）

#### 字体加粗（font-weight）
bold：将文本设置为粗体  
关键字100~900设置了九级加粗  
100：最细的字体  
400：normal  
700：bold  
900：最粗的字体  

#### 字体大小（font-size）
绝对值：将文本设置为指定的大小，不允许用户在所有浏览器中改变文本大小（不利于可用性）  
相对值：相对于周围的元素来设置大小，允许用户在浏览器改变文本大小
单位可以为：px/em（em=px/父元素默认字体大小）  
在所有浏览器中均有效的方案是body元素以百分比设置默认的font-size  

### css链接
链接的四种状态：  
a:link - 普通的、未被访问的链接  
a:visited - 用户已访问的链接  
a:hover - 鼠标指针位于链接的上方  
a:active - 链接被点击的时刻  

**当为链接的不同状态设置样式时，需要注意：**
1. a:hover 必须位于 a:link 和 a:visited 之后
2. a:active 必须位于 a:hover 之后

text-decoration 属性大多用于去掉链接中的下划线  
background-color 属性规定链接的背景色  

### css列表

**CSS 列表属性允许你放置、改变列表项标志，或者将图像作为列表项标志**  
#### 列表类型（list-style-type）
css中列表样式并不丰富，要影响列表样式，最简单的方法是改变标志类型  
#### 例如将无序列表的列表项标志设置为方块：

    ul {list-style-type : square}

#### 列表项图形（list-style-image）
用图像作为标志：

    ul li {list-style-image : url(xxx.gif)}

#### 列表标志位置（list-style-position）

#### 简写列表样式（list-style）
将以上三项合并，例如：

    li {list-style : url(example.gif) square inside}

三个值的位置没有顺序要求，且值可以忽略（此时值为默认值）

### css表格
th：表头  
td：侧栏
#### 表格边框（border）
将table、th及td设置为蓝色边框的例子：

    table, th, td
      {
      border: 1px solid blue;
      }

#### 折叠边框（border-collapse）
一般表格具有双线条边框，border-collapse将表格边框折叠为单一边框

#### 表格宽度和高度
通过 width 和 height 属性定义表格的宽度和高度  
单位可以为百分比和像素

#### 表格文本对齐（text-align/vertical-align）
text-align 属性设置水平对齐方式，比如左对齐、右对齐或者居中  
vertical-align 属性设置垂直对齐方式，比如顶部对齐、底部对齐或居中对齐  

#### 表格内边距（padding）
通过为td和th元素设置padding属性来控制表格中内容与边框的距离

####表格颜色
边框颜色通过border设置  
背景颜色通过background-color设置