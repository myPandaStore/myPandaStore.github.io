(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{597:function(_,v,t){_.exports=t.p+"assets/img/3.abc31a5a.png"},688:function(_,v,t){"use strict";t.r(v);var a=t(15),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"_1-浏览器的渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器的渲染过程"}},[_._v("#")]),_._v(" 1.浏览器的渲染过程")]),_._v(" "),a("p",[_._v("浏览器渲染主要有以下步骤：")]),_._v(" "),a("ul",[a("li",[_._v("首先解析收到的文档，根据文档定义构建一棵 DOM 树，DOM 树是由 DOM 元素及属性节点组成的。")]),_._v(" "),a("li",[_._v("然后对 CSS 进行解析，生成 CSSOM 规则树。")]),_._v(" "),a("li",[_._v("根据 DOM 树和 CSSOM 规则树构建渲染树。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 元素相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。还有一些 DOM元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。")]),_._v(" "),a("li",[_._v("当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。")]),_._v(" "),a("li",[_._v("布局阶段结束后是绘制阶段，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。")])]),_._v(" "),a("p",[_._v("图示：")]),_._v(" "),a("p",[a("img",{attrs:{src:t(597),alt:""}})]),_._v(" "),a("p",[_._v("注意： 这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的html 都解析完成之后再去构建和布局 render 树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。")]),_._v(" "),a("h2",{attrs:{id:"_2-浏览器渲染优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器渲染优化"}},[_._v("#")]),_._v(" 2.浏览器渲染优化")]),_._v(" "),a("h3",{attrs:{id:"_1-针对javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-针对javascript"}},[_._v("#")]),_._v(" （1）针对JavaScript")]),_._v(" "),a("p",[_._v("JavaScript既会阻塞HTML的解析，也会阻塞CSS的解析。因此我们可以对JavaScript的加载方式进行改变，来进行优化：")]),_._v(" "),a("ol",[a("li",[_._v("尽量将JavaScript文件放在body的最后")]),_._v(" "),a("li",[_._v("body中间尽量不要写<script>标签")]),_._v(" "),a("li",[_._v("<script>标签的引入资源方式有三种，有一种就是我们常用的直接引入，还有两种就是使用 async 属性和 defer 属性来异步引入，两者都是去异步加载外部的JS文件，不会阻塞DOM的解析（尽量使用异步加载）。三者的区别如下:")])]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("script")]),_._v(" 立即停止页面渲染去加载资源文件，当资源加载完毕后立即执行js代码，js代码执行完毕后继续渲染页面；")]),_._v(" "),a("li",[a("strong",[_._v("async")]),_._v(" 是在下载完成之后，立即异步加载，加载好后立即执行，多个带async属性的标签，不能保证加载的顺序；")]),_._v(" "),a("li",[a("strong",[_._v("defer")]),_._v(" 是在下载完成之后，立即异步加载。加载好后，如果 DOM 树还没构建好，则先等 DOM 树解析好再执行；如果DOM树已经准备好，则立即执行。多个带defer属性的标签，按照顺序执行。")])]),_._v(" "),a("p",[_._v("总结：")]),_._v(" "),a("p",[_._v("普通的script脚本会阻塞文档解析，加上async,脚本可以异步加载，多个async不能保证顺序，脚本可以异步解析。defer脚本可以异步加载，多个defer按顺序加载，脚本解析必须等文档解析完成。")]),_._v(" "),a("h3",{attrs:{id:"_2-针对css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-针对css"}},[_._v("#")]),_._v(" （2）针对CSS")]),_._v(" "),a("p",[_._v("使用CSS有三种方式：使用link、@import、内联样式，其中link和@import都是导入外部样式。它们之间的区别：")]),_._v(" "),a("ul",[a("li",[a("strong",[_._v("link")]),_._v("：浏览器会派发一个新的线程(HTTP线程)去加载资源文件，与此同时GUI渲染线程会继续向下渲染代码")]),_._v(" "),a("li",[a("strong",[_._v("@import")]),_._v("：GUI渲染线程会暂时停止渲染，去服务器加载资源文件，资源文件没有返回之前不会继续渲染(阻碍浏览器渲染)")]),_._v(" "),a("li",[a("strong",[_._v("style")]),_._v("：GUI直接渲染")])]),_._v(" "),a("p",[_._v("外部样式如果长时间没有加载完毕，浏览器为了用户体验，会使用浏览器会默认样式，确保首次渲染的速度。所以CSS一般写在headr中，让浏览器尽快发送请求去获取css样式。")]),_._v(" "),a("p",[_._v("所以，在开发过程中，导入外部样式使用link，而不用@import。如果css少，尽可能采用内嵌样式，直接写在style标签中。")]),_._v(" "),a("h3",{attrs:{id:"_3-针对dom树、cssom树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-针对dom树、cssom树"}},[_._v("#")]),_._v(" （3）针对DOM树、CSSOM树")]),_._v(" "),a("p",[_._v("可以通过以下几种方式来减少渲染的时间：")]),_._v(" "),a("ul",[a("li",[_._v("HTML文件的代码层级尽量不要太深")]),_._v(" "),a("li",[_._v("使用语义化的标签，来避免不标准语义化的特殊处理")]),_._v(" "),a("li",[_._v("减少CSSD代码的层级，因为选择器是从左向右进行解析的")])]),_._v(" "),a("h3",{attrs:{id:"_4-减少回流与重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-减少回流与重绘"}},[_._v("#")]),_._v(" （4）减少回流与重绘")]),_._v(" "),a("ul",[a("li",[_._v("操作DOM时，尽量在低层级的DOM节点进行操作")]),_._v(" "),a("li",[_._v("不要使用table布局， 一个小的改动可能会使整个table进行重新布局")]),_._v(" "),a("li",[_._v("使用CSS的表达式")]),_._v(" "),a("li",[_._v("不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。")]),_._v(" "),a("li",[_._v("使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素")]),_._v(" "),a("li",[_._v("避免频繁操作DOM，可以创建一个文档片段documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中")]),_._v(" "),a("li",[_._v("将元素先设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。")]),_._v(" "),a("li",[_._v("将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。这得益于浏览器的渲染队列机制。")])]),_._v(" "),a("p",[_._v("浏览器针对页面的回流与重绘，进行了自身的优化——"),a("strong",[_._v("渲染队列")])]),_._v(" "),a("p",[_._v("浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。")]),_._v(" "),a("p",[_._v("将多个读操作（或者写操作）放在一起，就会等所有的读操作进入队列之后执行，这样，原本应该是触发多次回流，变成了只触发一次回流。")]),_._v(" "),a("h2",{attrs:{id:"_3-渲染过程中遇到-js-文件如何处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-渲染过程中遇到-js-文件如何处理"}},[_._v("#")]),_._v(" 3.渲染过程中遇到 JS 文件如何处理？")]),_._v(" "),a("p",[_._v("JavaScript 的加载、解析与执行会阻塞文档的解析，也就是说，在构建 DOM 时，HTML 解析器若遇到了 JavaScript，那么它会暂停文档的解析，将控制权移交给 JavaScript 引擎，等 JavaScript 引擎运行完毕，浏览器再从中断的地方恢复继续解析文档。也就是说，如果想要首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性。")]),_._v(" "),a("h2",{attrs:{id:"_4-什么是文档的预解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是文档的预解析"}},[_._v("#")]),_._v(" 4.什么是文档的预解析？")]),_._v(" "),a("p",[_._v("Webkit 和 Firefox 都做了这个优化，当执行 JavaScript 脚本时，另一个线程解析剩下的文档，并加载后面需要通过网络加载的资源。这种方式可以使资源并行加载从而使整体速度更快。需要注意的是，预解析并不改变 DOM 树，它将这个工作留给主解析过程，自己只解析外部资源的引用，比如外部脚本、样式表及图片。")]),_._v(" "),a("h2",{attrs:{id:"_5-css-如何阻塞文档解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-css-如何阻塞文档解析"}},[_._v("#")]),_._v(" 5.CSS 如何阻塞文档解析？")]),_._v(" "),a("p",[_._v("理论上，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们。然而，存在一个问题，JavaScript 脚本执行时可能在文档的解析过程中请求样式信息，如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。所以如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟 JavaScript 脚本执行和文档的解析，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 JavaScript，最后再继续文档的解析。")])])}),[],!1,null,null,null);v.default=s.exports}}]);