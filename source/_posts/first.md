title: 当浏览器输入URL后（相关笔记）
date: 2018-10-26 12:49:06
tags:URL 学习笔记

排除特殊条件，简化问题之后，我们可以考虑以下几点：

- 一个chrome浏览器（即谷歌浏览器）

- 一台 Linux 服务器

- 发起 HTML 请求

- 不考虑任何缓存和优化机制

- 采用 HTTP/1.1 + TLS/1.2 + TCP 协议

  （即超文本传输协议-版本1.1、安全传输层协议、传输控制协议）

### 整体流程

#### DNS解析过程

> 本地 DNS 服务器采用递归或者迭代查询的方式依次向根域名服务器、顶级域名服务器、权威域名服务器发起查询请求，直至找到一个或一组 IP 地址，返回给浏览器。

#### HTTP请求过程

在浏览器直接发起 HTTP 或用命令行`telnet` 来与服务器指定端口建立 TCP 连接。（网络封包分析工具 Wireshark 或命令行`tcpdump`，来捕获某一块网卡上的数据包）。

> 建立连接、发送 HTTP 请求、返回 HTTP 响应、维持连接、释放连接

##### 建立连接

1. 调用socket（创建一个套接口）、bind（把一个本地协议地址赋予一个套接字）、listen（把进程变为一个服务器，并指定相应的套接字变为被动连接）、accept（从s的等待连接队列中抽取第一个连接，创建一个与s同类的新的套接口并返回句柄）函数。
2. 客户端给服务器发送带有SYN（合成器）标志位的分组，生成初始序列号x，附带MSS（最大段大小）等额外信息。
3. 服务器确认收到并发送带有SYN+ACK（确认字符）标志位的分组，生成序列号y，确认号x+1，附带额外信息。
4. 客户端确认收到并发送ACK标志位的分组，确认号y+1，建立TCP连接。
5. 客户端和服务器第一次建立会话需要TLS四次握手。
6. 客户端——>服务器Client Hello报文；服务器——>客户端 Server Hello 报文；服务器——>客户端 Certificate 报文；*（密钥交换选择DH算法）服务器——>客户端Server Key Exchange 报文* <u>（密钥交换选择 RSA 算法）跳过这一步</u>；服务器——>客户端 Server Hello Done 报文；客户端——>服务器 Client Key Exchange 报文，*（密钥交换选择 DH 算法），客户端会在报文中包含自己的 DH 参数，之后双方都根据 DH 算法计算出相同的预主密钥*    （<u>密钥选择RSA算法）客户端生成预主密钥，使用服务器证书中的公钥对其加密</u>；客户端——>服务器 Change Cipher Spec 报文;客户端——>服务器 Finished 报文；服务器——>客户端 New Session Ticket 报文；服务器——>客户端 Change Cipher Spec 报文；服务器——>客户端 Finished 报文。
7. 如果客户端能解密出报文内容，则说明双方生成的主密钥是一致的。至此，完成所有握手协商。

##### 发送HTTP请求

![](first\1.jpg)

##### 返回HTTP响应

一个响应报文格式基本等同于请求报文，由响应行、响应头、空行、实体组成。区别于请求头，响应头有自己的响应首部集，比如 Vary、Set-Cookie，其它的通用首部、实体首部、扩展首部则共用。（请求/响应顺序必须一一对应）

##### 维持连接

Connection: keep-alive（持久连接）是默认启用的。

##### 断开连接

1. 服务器——>客户端Alert报文（类型为 Close Notify）
2. 服务器（通过调用 close 函数主动关闭连接）——>客户端带有 FIN 标志位的分组，序列号为 m
3. 客户端——>服务器ACK标志的分组，确认号m+1
4. 客户端——>服务器FIN标志位的分组，序列号n
5. 服务器——>客户端ACK标志位的分组，序列号n+1
6. 客户端进入CLOSED状态，服务器同时，服务器等待 2 个 MSL的时间后，进入 CLOSED 状态

#### 浏览器解析过程

现代浏览器由多媒体支持、图形显示、GPU 渲染、进程管理、内存管理、沙箱机制、存储系统、网络管理等大大小小数百个组件组成。

Chromium多进程多线程架构

![](first\2.jpg)

> *一个架构包含多个进程*
>
> - 一个 Browser 进程
> - 多个 Renderer 进程
> - 一个 GPU 进程
> - 多个 NPAPI Render 进程
> - 多个 Pepper Plugin 进程
>
> *每个进程包括若干线程*
>
> - 一个主线程
> - 在 Browser 进程中：渲染更新界面
> - 在 Renderer 进程中：使用持有的内核 Blink 实例解析渲染更新界面
> - 一个 IO 线程
> - 在 Browser 进程中：处理 IPC 通信和网络请求
> - 在 Renderer 进程中：处理与 Browser 进程之间的 IPC 通信
> - 一组专用线程
> - 一个通用线程池

#### 主流程

在 Renderer 进程中进行页面的解析工作，构建 DOM 树。遇到外部CSS连接时，继续构建DOM树，CSS下载完毕后，主线程在合适的时机解析CSS内容，构建CSSDOM树。浏览器结合DOM树和CSSDOM树构建Render树。遇到外部 JS 链接时，主线程调用网络请求模块异步获取资源，DOM树构建阻塞，浏览器会使用一个轻量级的扫描器去发现后续需要下载的外部资源，当 JS 下载完毕后，浏览器调用 V8 引擎在 Script Streamer 线程中解析、编译 JS 内容，并在主线程中执行。

#### 渲染流程

![](first\3.png)

 Compositor 线程负责层合成，同时负责处理部分交互事件

#### 页面生命周期

浏览器提供了 Navigation Timing和 Resource Timing两种 API 来记录每一个资源的事件发生时间点，用来收集 RUM（Real User Monitoring，真实用户监控）数据，发送给后端监控服务，综合分析页面性能来不断改善用户体验。、

两个重要的生命周期事件：**DOMContentLoaded 事件**表示 DOM 树构建完毕，可以安全地访问 DOM 树所有 Node 节点、绑定事件等等；**load 事件**表示所有资源都加载完毕，图片、背景、内容都已经完成渲染，页面处于可交互状态。



#### 总体流程图

![](first\4.png)



参考网页：[https://zhuanlan.zhihu.com/p/43369093#userconsent#]

[https://blog.csdn.net/godop/article/details/79887813

]

[https://blog.csdn.net/u010154760/article/details/45844037]

[https://blog.csdn.net/nicexibeidage/article/details/78048773]

百度百科

搜狗百科

