(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{623:function(t,s,a){t.exports=a.p+"assets/img/005.0adbaa28.png"},723:function(t,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-v-if、v-show、v-html-的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-v-if、v-show、v-html-的原理"}},[t._v("#")]),t._v(" 1.v-if、v-show、v-html 的原理")]),t._v(" "),n("ul",[n("li",[t._v("v-if会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染；")]),t._v(" "),n("li",[t._v("v-show会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display")]),t._v(" "),n("li",[t._v("v-html会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值。")])]),t._v(" "),n("h2",{attrs:{id:"_2-v-if和v-show的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-v-if和v-show的区别"}},[t._v("#")]),t._v(" 2.v-if和v-show的区别")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("手段")]),t._v("：v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显示隐藏；")]),t._v(" "),n("li",[n("strong",[t._v("编译过程")]),t._v("：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；")]),t._v(" "),n("li",[n("strong",[t._v("编译条件")]),t._v("：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且DOM元素保留；")]),t._v(" "),n("li",[n("strong",[t._v("性能消耗")]),t._v("：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；")]),t._v(" "),n("li",[n("strong",[t._v("使用场景")]),t._v("：v-if适合运行条件不大可能改变的场景；v-show适合频繁切换的场景。")])]),t._v(" "),n("h2",{attrs:{id:"_3-data为什么是一个函数而不是对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-data为什么是一个函数而不是对象"}},[t._v("#")]),t._v(" 3.data为什么是一个函数而不是对象")]),t._v(" "),n("p",[t._v("JavaScript中的对象是引用类型的数据，当多个实例引用同一个对象时，只要一个实例对这个对象进行操作，其他实例中的数据也会发生变化。")]),t._v(" "),n("p",[t._v("而在Vue中，更多的是想要复用组件，那就需要每个组件都有自己的数据，这样组件之间才不会相互干扰。")]),t._v(" "),n("p",[t._v("所以组件的数据不能写成对象的形式，而是要写成函数的形式。数据以函数返回值的形式定义，这样当每次复用组件的时候，就会返回一个新的data，也就是说每个组件都有自己的私有数据空间，它们各自维护自己的数据，不会干扰其他组件的正常运行。")]),t._v(" "),n("h2",{attrs:{id:"_4-nexttick-原理及作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-nexttick-原理及作用"}},[t._v("#")]),t._v(" 4.$nextTick 原理及作用")]),t._v(" "),n("p",[t._v("Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。")]),t._v(" "),n("p",[t._v("nextTick 的核心是利用了如 Promise 、MutationObserver、setImmediate、setTimeout的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。")]),t._v(" "),n("p",[t._v("nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理")]),t._v(" "),n("p",[t._v("nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因∶")]),t._v(" "),n("ul",[n("li",[t._v("如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM 的渲染，可以减少一些无用渲染")]),t._v(" "),n("li",[t._v("同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要")])]),t._v(" "),n("p",[t._v("Vue采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作DOM。有时候，可能遇到这样的情况，DOM1的数据发生了变化，而DOM2需要从DOM1中获取数据，那这时就会发现DOM2的视图并没有更新，这时就需要用到了nextTick了。")]),t._v(" "),n("p",[t._v("由于Vue的DOM操作是异步的，所以，在上面的情况中，就要将DOM2获取数据的操作写在$nextTick中。")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取数据的操作...})")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("所以，在以下情况下，会用到nextTick：")]),t._v(" "),n("ul",[n("li",[t._v("在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中。")]),t._v(" "),n("li",[t._v("在vue生命周期中，如果在created()钩子进行DOM操作，也一定要放在nextTick()的回调函数中。")])]),t._v(" "),n("p",[t._v("因为在created()钩子函数中，页面的DOM还未渲染，这时候也没办法操作DOM，所以，此时如果想要操作DOM，必须将操作的代码放在nextTick()的回调函数中。")]),t._v(" "),n("h2",{attrs:{id:"_5-vue-中给-data-中的对象属性添加一个新的属性时会发生什么-如何解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-中给-data-中的对象属性添加一个新的属性时会发生什么-如何解决"}},[t._v("#")]),t._v(" 5.Vue 中给 data 中的对象属性添加一个新的属性时会发生什么？如何解决？")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li v"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value in obj"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"addObjB"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("添加 obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n       "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n              "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("obj")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n                  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj.a'")]),t._v(" \n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObjB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n              "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj.b'")]),t._v(" \n              console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("p",[t._v("点击 button 会发现，obj.b 已经成功添加，但是视图并未刷新。这是因为在Vue实例创建时，obj.b并未声明，因此就没有被Vue转换为响应式的属性，自然就不会触发视图的更新，这时就需要使用Vue的全局 api $set()：")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addObjB")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj.b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("$set()方法相当于手动的去把obj.b处理成一个响应式的属性，此时视图也会跟着改变了。")]),t._v(" "),n("h2",{attrs:{id:"_6-vue-单页应用与多页应用的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue-单页应用与多页应用的区别"}},[t._v("#")]),t._v(" 6.Vue 单页应用与多页应用的区别")]),t._v(" "),n("p",[t._v("概念：")]),t._v(" "),n("ul",[n("li",[t._v("SPA单页面应用（SinglePage Web Application），指只有一个主页面的应用，一开始只需要加载一次js、css等相关资源。所有内容都包含在主页面，对每一个功能模块组件化。单页应用跳转，就是切换相关组件，仅仅刷新局部资源。")]),t._v(" "),n("li",[t._v("MPA多页面应用 （MultiPage Application），指有多个独立页面的应用，每个页面必须重复加载js、css等相关资源。多页应用跳转，需要整页资源刷新。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(623),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_7-vue-data-中某一个属性的值发生改变后-视图会立即同步执行重新渲染吗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue-data-中某一个属性的值发生改变后-视图会立即同步执行重新渲染吗"}},[t._v("#")]),t._v(" 7.Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？")]),t._v(" "),n("p",[t._v("不会立即同步执行重新渲染。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。")]),t._v(" "),n("p",[t._v("如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环tick中，Vue 刷新队列并执行实际（已去重的）工作。")]),t._v(" "),n("h2",{attrs:{id:"_8-子组件可以直接改变父组件的数据吗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-子组件可以直接改变父组件的数据吗"}},[t._v("#")]),t._v(" 8.子组件可以直接改变父组件的数据吗？")]),t._v(" "),n("p",[t._v("子组件不可以直接改变父组件的数据。这样做主要是为了维护父子组件的"),n("strong",[t._v("单向数据流")]),t._v("。每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。如果这样做了，Vue 会在浏览器的控制台中发出警告。")]),t._v(" "),n("p",[t._v("Vue提倡单向数据流，即父级 props 的更新会流向子组件，但是反过来则不行。这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解，导致数据流混乱。如果破坏了单向数据流，当应用复杂时，debug 的成本会非常高。")]),t._v(" "),n("p",[t._v("只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。")]),t._v(" "),n("h2",{attrs:{id:"_9-vue模版编译原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-vue模版编译原理"}},[t._v("#")]),t._v(" 9.Vue模版编译原理")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("vue中的模板template无法被浏览器解析并渲染，因为这不属于浏览器的标准，不是正确的HTML语法，所有需要将template转化成一个JavaScript函数，这样浏览器就可以执行这一个函数并渲染出对应的HTML元素，就可以让视图跑起来了，这一个转化的过程，就成为模板编译。模板编译又分三个阶段，解析parse，优化optimize，生成generate，最终生成可执行函数render。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("解析阶段")]),t._v("：使用大量的正则表达式对template字符串进行解析，将标签、指令、属性等转化为抽象语法树AST。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("优化阶段")]),t._v("：遍历AST，找到其中的一些静态节点并进行标记，方便在页面重渲染的时候进行diff比较时，直接跳过这一些静态节点，优化runtime的性能。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("生成阶段")]),t._v("：将最终的AST转化为render函数字符串。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);