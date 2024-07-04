(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{394:function(t,v,_){"use strict";_.r(v);var s=_(7),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),v("h2",{attrs:{id:"为什么https-更安全"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么https-更安全"}},[t._v("#")]),t._v(" 为什么https 更安全")]),t._v(" "),v("ul",[v("li",[t._v("https 在传输的过程中经过了一层加密/tsl安全层，http属于明文传输")])]),t._v(" "),v("h2",{attrs:{id:"跨域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),v("ul",[v("li",[t._v("什么是同源策略及其限制内容？")])]),t._v(" "),v("p",[t._v("同源 : 协议+域名+端口")]),t._v(" "),v("p",[t._v("缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击\n"),v("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/23/1638b3579d9eeb32~tplv-t2oaga2asx-watermark.awebp",alt:"Image text"}})]),t._v(" "),v("ul",[v("li",[t._v("常见跨域场景")])]),t._v(" "),v("p",[t._v("当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。常见跨域场景如下图所示：\n"),v("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/23/1638b3579dde630e~tplv-t2oaga2asx-watermark.awebp",alt:"Image text"}})]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("特别说明两点")]),t._v(" "),v("ul",[v("li",[t._v("第一：如果是协议和端口造成的跨域问题“前台”是无能为力的。")]),t._v(" "),v("li",[t._v("第二：在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL的首部”可以理解为“协议, 域名和端口必须匹配”。")])])]),t._v(" "),v("p",[t._v("这里你或许有个疑问：请求跨域了，那么请求到底发出去没有？")]),t._v(" "),v("ul",[v("li",[t._v("跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。")])]),t._v(" "),v("p",[t._v("跨域解决方案：")]),t._v(" "),v("ul",[v("li",[t._v("JSONP")]),t._v(" "),v("li",[t._v("cors")]),t._v(" "),v("li",[t._v("postMessage")]),t._v(" "),v("li",[t._v("websocket")]),t._v(" "),v("li",[t._v("Node中间件代理（两次跨域）")]),t._v(" "),v("li",[t._v("nginx 反向代理")]),t._v(" "),v("li",[t._v("window.name.iframe")]),t._v(" "),v("li",[t._v("location.hash + iframe")]),t._v(" "),v("li",[t._v("document.domain + iframe")])]),t._v(" "),v("p",[t._v("总结")]),t._v(" "),v("ul",[v("li",[t._v("CORS支持所有类型的HTTP请求，是跨域HTTP请求的根本解决方案")]),t._v(" "),v("li",[t._v("JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。")]),t._v(" "),v("li",[t._v("不管是Node中间件代理还是nginx反向代理，主要是通过同源策略对服务器不加限制。")]),t._v(" "),v("li",[t._v("日常工作中，用得比较多的跨域方案是cors和nginx反向代理")])]),t._v(" "),v("h2",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("ul",[v("li",[t._v("1xx: 表示目前是协议处理的中间状态，还需要后续操作。")]),t._v(" "),v("li",[t._v("2xx: 表示成功状态。")]),t._v(" "),v("li",[t._v("3xx: 重定向状态，资源位置发生变动，需要重新请求。")]),t._v(" "),v("li",[t._v("4xx: 请求报文有误。\n405 Method Not Allowed: 请求方法不被服务器端允许。\n414 Request-URI Too Long: 请求行里的 URI 太大。")]),t._v(" "),v("li",[t._v("5xx: 服务器端发生错误。")])]),t._v(" "),v("h2",{attrs:{id:"http-的请求方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-的请求方法"}},[t._v("#")]),t._v(" HTTP 的请求方法")]),t._v(" "),v("ul",[v("li",[t._v("GET: 通常用来获取资源")]),t._v(" "),v("li",[t._v("HEAD: 获取资源的元信息")]),t._v(" "),v("li",[t._v("POST: 提交数据，即上传数据")]),t._v(" "),v("li",[t._v("PUT: 修改数据")]),t._v(" "),v("li",[t._v("DELETE: 删除资源(几乎用不到)")]),t._v(" "),v("li",[t._v("CONNECT: 建立连接隧道，用于代理服务器")]),t._v(" "),v("li",[t._v("OPTIONS: 列出可对资源实行的请求方法，用来跨域请求")]),t._v(" "),v("li",[t._v("TRACE: 追踪请求-响应的传输路径")])]),t._v(" "),v("h2",{attrs:{id:"get-和-post-有什么区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-有什么区别"}},[t._v("#")]),t._v(" GET 和 POST 有什么区别？")]),t._v(" "),v("ul",[v("li",[t._v("名字区别")]),t._v(" "),v("li",[t._v("从缓存的角度, GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。")]),t._v(" "),v("li",[t._v("从参数的角度, GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息")]),t._v(" "),v("li",[t._v("从TCP的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)")])]),t._v(" "),v("h2",{attrs:{id:"csr-和-ssr区别是啥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csr-和-ssr区别是啥"}},[t._v("#")]),t._v(" csr 和 ssr区别是啥")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ssr 服务端渲染 SSR输出的是一个渲染完成的html，整个渲染过程是在服务器端进行的。例如传统的JSP，PHP都是服务端渲染")])]),t._v(" "),v("li",[v("p",[t._v("优点\n有利于SEO，由于页面在服务器生成，搜索引擎直接抓取到最终页面结果。\n有利于首屏渲染，html所需要的数据都在服务器处理好，直接生成html，首屏渲染时间变短。")])]),t._v(" "),v("li",[v("p",[t._v("缺点\n占用服务器资源，渲染工作都在服务端渲染\n用户体验不好，每次跳转到新页面都需要在重新服务端渲染整个页面，不能只渲染可变区域")])]),t._v(" "),v("li",[v("p",[t._v("csr 客户端渲染，渲染工作在客户端（浏览器）进行，而不是在服务器端进行")])]),t._v(" "),v("li",[v("p",[t._v("优点\n前后端分离。前端专注于界面开发，后端专注于api开发，且前端有更多的选择性，可以使用vue，react框架开发，而不需要遵循后端特定的模板。\n服务器压力变轻了，渲染工作在客户端进行，服务器直接返回不加工的html\n用户在后续访问操作体验好，（首屏渲染慢）可以将网站做成SPA，可以增量渲染")])]),t._v(" "),v("li",[v("p",[t._v("缺点\n不利于SEO，因为搜索引擎不执行JS相关操作，无法获取渲染后的最终html。\n首屏渲染时间比较长，因为需要页面执行ajax获取数据来渲染页面，如果请求接口多，不利于首屏渲染")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);