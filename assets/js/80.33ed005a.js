(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{692:function(t,r,s){"use strict";s.r(r);var _=s(15),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-options请求方法及使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-options请求方法及使用场景"}},[t._v("#")]),t._v(" 1. OPTIONS请求方法及使用场景")]),t._v(" "),s("p",[t._v("OPTIONS是除了GET和POST之外的其中一种 HTTP请求方法。")]),t._v(" "),s("p",[t._v("OPTIONS方法是用于请求获得由Request-URI标识的资源在请求/响应的通信过程中可以使用的功能选项。通过这个方法，客户端可以在采取具体资源请求之前，决定对该资源采取何种必要措施，或者了解服务器的性能。该请求方法的响应不能缓存。")]),t._v(" "),s("p",[t._v("OPTIONS请求方法的主要用途有两个：")]),t._v(" "),s("ul",[s("li",[t._v("获取服务器支持的所有HTTP请求方法；")]),t._v(" "),s("li",[t._v("用来检查访问权限。例如：在进行 CORS 跨域资源共享时，对于复杂请求，就是使用 OPTIONS 方法发送嗅探请求，以判断是否有对指定资源的访问权限。")])]),t._v(" "),s("h2",{attrs:{id:"_2-http-1-0-和-http-1-1-之间有哪些区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-1-0-和-http-1-1-之间有哪些区别"}},[t._v("#")]),t._v(" 2.HTTP 1.0 和 HTTP 1.1 之间有哪些区别？")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("连接方面")]),t._v("，http1.0 默认使用非持久连接，而 http1.1 默认使用持久连接。http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持久连接时每次需要建立连接的时延。")]),t._v(" "),s("li",[s("strong",[t._v("资源请求方面")]),t._v("，在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。")]),t._v(" "),s("li",[s("strong",[t._v("缓存方面")]),t._v("，在 http1.0 中主要使用 header 里的 If-Modified-Since、Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略，例如 Etag、If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。")]),t._v(" "),s("li",[s("strong",[t._v("http1.1 中新增了 host 字段")]),t._v("，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个IP地址。因此有了 host 字段，这样就可以将请求发往到同一台服务器上的不同网站。")]),t._v(" "),s("li",[t._v("http1.1 相对于 http1.0 还新增了很多"),s("strong",[t._v("请求方法")]),t._v("，如 PUT、HEAD、OPTIONS 等。")])]),t._v(" "),s("h2",{attrs:{id:"_3-http-1-1-和-http-2-0-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-http-1-1-和-http-2-0-的区别"}},[t._v("#")]),t._v(" 3.HTTP 1.1 和 HTTP 2.0 的区别")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("二进制协议")]),t._v('：HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。')]),t._v(" "),s("li",[s("strong",[t._v("多路复用")]),t._v('： HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以同时发送多个请求或回应，而且不用按照顺序一一发送，这样就避免了"队头堵塞"的问题。')]),t._v(" "),s("li",[s("strong",[t._v("数据流")]),t._v("： HTTP/2 使用了数据流的概念，因为 HTTP/2 的数据包是不按顺序发送的，同一个连接里面连续的数据包，可能属于不同的请求。因此，必须要对数据包做标记，指出它属于哪个请求。HTTP/2 将每个请求或回应的所有数据包，称为一个数据流。每个数据流都有一个独一无二的编号。数据包发送时，都必须标记数据流 ID ，用来区分它属于哪个数据流。")]),t._v(" "),s("li",[s("strong",[t._v("头信息压缩")]),t._v("： HTTP/2 实现了头信息压缩，由于 HTTP 1.1 协议不带状态，每次请求都必须附上所有信息。所以，请求的很多字段都是重复的，比如 Cookie 和 User Agent ，一模一样的内容，每次请求都必须附带，这会浪费很多带宽，也影响速度。HTTP/2 对这一点做了优化，引入了头信息压缩机制。一方面，头信息使用 gzip 或 compress 压缩后再发送；另一方面，客户端和服务器同时维护一张头信息表，所有字段都会存入这个表，生成一个索引号，以后就不发送同样字段了，只发送索引号，这样就能提高速度了。")]),t._v(" "),s("li",[s("strong",[t._v("服务器推送")]),t._v("： HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使用服务器推送提前给客户端推送必要的资源，这样就可以相对减少一些延迟时间。这里需要注意的是 http2 下服务器主动推送的是"),s("strong",[t._v("静态资源")]),t._v("，和 "),s("strong",[t._v("WebSocket")]),t._v(" 以及使用 SSE 等方式向客户端发送"),s("strong",[t._v("即时数据的推送")]),t._v("是不同的。")])]),t._v(" "),s("blockquote",[s("p",[t._v("队头阻塞是由 HTTP 基本的“请求 - 应答”模型所导致的。HTTP 规定报文必须是“一发一收”，这就形成了一个先进先出的“串行”队列。队列里的请求是没有优先级的，只有入队的先后顺序，排在最前面的请求会被最优先处理。如果队首的请求因为处理的太慢耽误了时间，那么队列里后面的所有请求也不得不跟着一起等待，结果就是其他的请求承担了不应有的时间成本，造成了队头堵塞的现象。")])]),t._v(" "),s("h2",{attrs:{id:"_4-http和https协议的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-http和https协议的区别"}},[t._v("#")]),t._v(" 4.HTTP和HTTPS协议的区别")]),t._v(" "),s("ul",[s("li",[t._v("HTTPS协议需要CA证书，费用较高；而HTTP协议不需要；")]),t._v(" "),s("li",[t._v("HTTP协议是超文本传输协议，信息是明文传输的，HTTPS则是具有安全性的SSL加密传输协议；")]),t._v(" "),s("li",[t._v("使用不同的连接方式，端口也不同，HTTP协议默认端口号是80，HTTPS协议默认端口号是443；")])]),t._v(" "),s("h2",{attrs:{id:"_5-get方法url长度限制的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-get方法url长度限制的原因"}},[t._v("#")]),t._v(" 5.GET方法URL长度限制的原因")]),t._v(" "),s("p",[t._v("实际上HTTP协议规范并没有对get方法请求的url长度进行限制，这个限制是特定的浏览器及服务器对它的限制。IE对URL长度的限制是2083字节(2K+35)。由于IE浏览器对URL长度的允许值是最小的，所以开发过程中，只要URL不超过2083字节，那么在所有浏览器中工作都不会有问题。")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("的长度值 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v("（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2083")]),t._v("）"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" （你的Domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("Path）"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("是"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v("请求中"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("两个字符的长度）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("下面看一下主流浏览器对get方法中url的长度限制范围：")]),t._v(" "),s("ul",[s("li",[t._v("Microsoft Internet Explorer (Browser)：IE浏览器对URL的最大限制为2083个字符，如果超过这个数字，提交按钮没有任何反应。")]),t._v(" "),s("li",[t._v("Firefox (Browser)：对于Firefox浏览器URL的长度限制为 65,536 个字符。")]),t._v(" "),s("li",[t._v("Safari (Browser)：URL最大长度限制为 80,000 个字符。")]),t._v(" "),s("li",[t._v("Opera (Browser)：URL最大长度限制为 190,000 个字符。")]),t._v(" "),s("li",[t._v("Google (chrome)：URL最大长度限制为 8182 个字符。")])]),t._v(" "),s("p",[t._v("主流的服务器对get方法中url的长度限制范围：")]),t._v(" "),s("ul",[s("li",[t._v("Apache (Server)：能接受最大url长度为8192个字符。")]),t._v(" "),s("li",[t._v("Microsoft Internet Information Server(IIS)：能接受最大url的长度为16384个字符。")])]),t._v(" "),s("p",[t._v("根据上面的数据，可以知道，get方法中的URL长度最长不超过2083个字符，这样所有的浏览器和服务器都可能正常工作。")])])}),[],!1,null,null,null);r.default=e.exports}}]);