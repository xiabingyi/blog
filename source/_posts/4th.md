# css相关学习笔记（下）

## css框模型
### css框模型概述
![css框模型](4th\1.jpg)

内边距、边框和外边距都是可选的，默认值是零  
背景应用于由内容和内边距、边框组成的区域
* 元素框的最内部分是实际的内容
* 内边距直接包围内容，呈现元素的背景
* 边框分隔内外边距
* 外边距默认是透明的，因此不会遮挡其后的任何元素

调整内外边距：

    * {
      margin: 数字;
      padding: 数字;
    }

**调整内边距、边框和外边距不会影响内容区域的尺寸，但是会影响元素框的总尺寸**  
**外边距可以是负值，而且在很多情况下都要使用负值的外边距**  
**为了回避测试器兼容性问题，不给元素添加具有指定宽度的内边距，而是尝试将内边距或外边距添加到元素的父元素和子元素**

### css padding属性

可以按照上、右、下、左的顺序分别设置各边的内边距：

    h1 {padding: 10px 0.25em 2ex 20%;}

也可以通过使用下面四个单独的属性，分别设置上、右、下、左内边距
* padding-top
* padding-right
* padding-bottom
* padding-left

**使用百分比时百分数值是相对于其父元素的 width 计算的**  
**上下内边距与左右内边距一致；即上下内边距的百分数会相对于父元素宽度设置，而不是相对于高度**