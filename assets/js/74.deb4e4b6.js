(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{681:function(v,_,t){"use strict";t.r(_);var e=t(15),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"_1-v8的垃圾回收机制是怎样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-v8的垃圾回收机制是怎样的"}},[v._v("#")]),v._v(" 1. V8的垃圾回收机制是怎样的")]),v._v(" "),t("p",[v._v("V8 实现了准确式 GC，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。")]),v._v(" "),t("p",[v._v("（1）新生代算法")]),v._v(" "),t("p",[v._v("新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。")]),v._v(" "),t("p",[v._v("在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。")]),v._v(" "),t("p",[v._v("（2）老生代算法")]),v._v(" "),t("p",[v._v("老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是标记清除算法和标记压缩算法。")]),v._v(" "),t("p",[v._v("先来说下什么情况下对象会出现在老生代空间中：")]),v._v(" "),t("ul",[t("li",[v._v("新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。")]),v._v(" "),t("li",[v._v("To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。")])]),v._v(" "),t("p",[v._v("在老生代中，以下情况会先启动标记清除算法：")]),v._v(" "),t("ul",[t("li",[v._v("某一个空间没有分块的时候")]),v._v(" "),t("li",[v._v("空间中被对象超过一定限制")]),v._v(" "),t("li",[v._v("空间不能保证新生代中的对象移动到老生代中")])]),v._v(" "),t("p",[v._v("在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型对内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。但在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行。")]),v._v(" "),t("p",[v._v("清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象向一端移动，直到所有对象都移动完成然后清理掉不需要的内存。")]),v._v(" "),t("h2",{attrs:{id:"_2-哪些操作会造成内存泄漏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-哪些操作会造成内存泄漏"}},[v._v("#")]),v._v(" 2.哪些操作会造成内存泄漏？")]),v._v(" "),t("ul",[t("li",[v._v("第一种情况是由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。")]),v._v(" "),t("li",[v._v("第二种情况是设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。")]),v._v(" "),t("li",[v._v("第三种情况是获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收。")]),v._v(" "),t("li",[v._v("第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);