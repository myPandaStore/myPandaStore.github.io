(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{608:function(t,v,_){t.exports=_.p+"assets/img/009.884b32b5.png"},699:function(t,v,_){"use strict";_.r(v);var s=_(15),p=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[t._v("TLS/SSL全称安全传输层协议（Transport Layer Security）, 是介于TCP和HTTP之间的一层安全协议，不影响原有的TCP协议和HTTP协议，所以使用HTTPS基本上不需要对HTTP页面进行太多的改造。")])]),s("p",[t._v("TLS/SSL的功能实现主要依赖三类基本算法：散列函数hash、对称加密、非对称加密。这三类算法的作用如下：")]),t._v(" "),s("ul",[s("li",[t._v("基于散列函数验证信息的完整性")]),t._v(" "),s("li",[t._v("对称加密算法采用协商的秘钥对数据加密")]),t._v(" "),s("li",[t._v("非对称加密实现身份认证和秘钥协商")])]),t._v(" "),s("p",[s("img",{attrs:{src:_(608),alt:""}})]),t._v(" "),s("p",[t._v("(1) 常见的散列函数有MD5、SHA1、SHA256。该函数的特点是单向不可逆，对输入数据非常敏感，输出的长度固定，任何数据的修改都会改变散列函数的结果，可以用于防止信息篡改并验证数据的完整性。")]),t._v(" "),s("p",[t._v("特点： 在信息传输过程中，散列函数不能都实现信息防篡改，由于传输是明文传输，中间人可以修改信息后重新计算信息的摘要，所以需要对传输的信息和信息摘要进行加密。")]),t._v(" "),s("p",[t._v("(2) 对称加密")]),t._v(" "),s("p",[t._v("对称加密的方法是，双方使用同一个秘钥对数据进行加密和解密。但是对称加密的存在一个问题，就是如何保证秘钥传输的安全性，因为秘钥还是会通过网络传输的，一旦秘钥被其他人获取到，那么整个加密过程就毫无作用了。 这就要用到非对称加密的方法。")]),t._v(" "),s("p",[t._v("常见的对称加密算法有AES-CBC、DES、3DES、AES-GCM等。相同的秘钥可以用于信息的加密和解密。掌握秘钥才能获取信息，防止信息窃听，其通讯方式是一对一。")]),t._v(" "),s("p",[s("strong",[t._v("特点")]),t._v("： 对称加密的优势就是信息传输使用一对一，需要共享相同的密码，密码的安全是保证信息安全的基础，服务器和N个客户端通信，需要维持N个密码记录且不能修改密码。")]),t._v(" "),s("p",[t._v("(3) 非对称加密")]),t._v(" "),s("p",[t._v("非对称加密的方法是，我们拥有两个秘钥，一个是公钥，一个是私钥。公钥是公开的，私钥是保密的。用私钥加密的数据，只有对应的公钥才能解密，用公钥加密的数据，只有对应的私钥才能解密。我们可以将公钥公布出去，任何想和我们通信的客户， 都可以使用我们提供的公钥对数据进行加密，这样我们就可以使用私钥进行解密，这样就能保证数据的安全了。但是非对称加密有一个"),s("strong",[t._v("缺点")]),t._v("就是加密的过程很慢，因此如果每次通信都使用非对称加密的方式的话，反而会造成等待时间过长的问题。")]),t._v(" "),s("p",[t._v("常见的非对称加密算法有RSA、ECC、DH等。秘钥成对出现，一般称为公钥（公开）和私钥（保密）。公钥加密的信息只有私钥可以解开，私钥加密的信息只能公钥解开，因此掌握公钥的不同客户端之间不能相互解密信息，只能和服务器进行加密通信，服务器可以实现一对多的的通信，客户端也可以用来验证掌握私钥的服务器的身份。")]),t._v(" "),s("p",[s("strong",[t._v("特点")]),t._v("： 非对称加密的特点就是"),s("strong",[t._v("信息一对多")]),t._v("，服务器只需要维持一个私钥就可以和多个客户端进行通信，但服务器发出的信息能够被所有的客户端解密，且该算法的计算复杂，加密的速度慢。")]),t._v(" "),s("p",[t._v("综合上述算法特点，TLS/SSL的工作方式就是客户端使用非对称加密与服务器进行通信，实现身份的验证并协商对称加密使用的秘钥。对称加密算法采用协商秘钥对信息以及信息摘要进行加密通信，不同节点之间采用的对称秘钥不同，从而保证信息只能通信双方获取。这样就解决了两个方法各自存在的问题。")])])}),[],!1,null,null,null);v.default=p.exports}}]);