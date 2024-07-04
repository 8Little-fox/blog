(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{355:function(s,t,a){s.exports=a.p+"assets/img/mon3.678c15f9.png"},356:function(s,t,a){s.exports=a.p+"assets/img/mon1.9998e2ce.png"},357:function(s,t,a){s.exports=a.p+"assets/img/mon2.3058c690.png"},401:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"monorepo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo"}},[s._v("#")]),s._v(" Monorepo")]),s._v(" "),t("p",[t("img",{attrs:{src:a(355),alt:"Image text"}})]),s._v(" "),t("ul",[t("li",[s._v("模版地址： https://gitee.com/ll3462540450/monorepo")])]),s._v(" "),t("h2",{attrs:{id:"什么是monorepo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是monorepo"}},[s._v("#")]),s._v(" 什么是Monorepo ?")]),s._v(" "),t("blockquote",[t("p",[s._v("Monorepo可以理解为一种基于仓库的代码管理策略，它提出将多个代码工程“独立”的放在一个仓库里的管理模式。每个代码工程在逻辑上是可以独立运行开发以及维护管理的。Monorepo 在实际场景中的运用可以非常宽泛，甚至有企业将它所有业务和不同方向语言的代码放在同一个仓库中管理。")])]),s._v(" "),t("ul",[t("li",[s._v("pnpm的"),t("code",[s._v("Monorepo")]),s._v(" 的意思是在版本控制系统的单个代码库里包含了许多项目的代码。这些项目虽然有可能是相关的，但通常在逻辑上是独立的，并由不同的团队维护。")]),s._v(" "),t("li",[s._v("pnpm 跟 npm、yarn 一样，也内置了对 monorepo 的支持，使用起来比较简单，在项目根目录中新建 pnpm-workspace.yaml 文件，并声明对应的工作区就可以了。")])]),s._v(" "),t("h2",{attrs:{id:"monorepo-好处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-好处"}},[s._v("#")]),s._v(" "),t("code",[s._v("Monorepo")]),s._v(" 好处")]),s._v(" "),t("ul",[t("li",[s._v("规范、工作流的统一性")]),s._v(" "),t("li",[s._v("代码复用和版本依（多个项目公共部分可以统一提取到 "),t("code",[s._v("packages")]),s._v(" 下 例如 "),t("code",[s._v("packages/shared")]),s._v("）")]),s._v(" "),t("li",[s._v("团队协作以及权限控制 根据"),t("code",[s._v("Monorepo")]),s._v("的特点，各个"),t("code",[s._v("packages")]),s._v("之间相对独立的")]),s._v(" "),t("li",[s._v("性能优化:")]),s._v(" "),t("li",[s._v("源码体积优化 （移除冷门的API 引入tree-shaking）")]),s._v(" "),t("li",[s._v("数据劫持优化")]),s._v(" "),t("li",[s._v("编译优化\n"),t("img",{attrs:{src:a(356),alt:"Image text"}})])]),s._v(" "),t("blockquote",[t("p",[s._v("整体是通过 "),t("code",[s._v("monorepo")]),s._v(" 方式进行管理并根据功能的不同在 "),t("code",[s._v("packages")]),s._v(" 目录下进行划分不同的模块目录。我们可以看到每一个目录下面都一个 "),t("code",[s._v("package.json")]),s._v(" 文件，代表每一个目录都是一个 npm 包，每个包有各自的 API、类型定义和测试模块以及 Readme 文档。这样就可以将模块拆分得更细的颗粒度，职责划分也更明确。")])]),s._v(" "),t("h2",{attrs:{id:"vue3-组件库-monorepo-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue3-组件库-monorepo-环境搭建"}},[s._v("#")]),s._v(" Vue3 组件库 monorepo 环境搭建")]),s._v(" "),t("p",[s._v("monorepo 的好处就是可以在一个代码仓库中管理多个项目，可以达到项目之间的资源共享\nElement Plus 最新是采用 pnpm 方式来进行 monorepo 环境搭建。pnpm 的特点，主要就是速度快，还有就是磁盘利用率高，而且使用这个 pnpm 来搭建的 monorepo 环境，是非常容易的。通过 pnpm 我们可以快速的去搭建出一个 monorepo 环境。")]),s._v(" "),t("h2",{attrs:{id:"首先进行全局安装-pnpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先进行全局安装-pnpm"}},[s._v("#")]),s._v(" 首先进行全局安装 pnpm")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install pnpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])])]),t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),t("p",[s._v("然后在项目下使用 pnpm init 进行 package.json 的初始化。这跟 npm init 是一样的")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pnpm init\n")])])]),t("ul",[t("li",[s._v('得到 package.json 初始内容，然后把 package.json 中的 name 属性删掉，并且添加一个 "private": true 属性，因为它是不需要发布的。')])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"private"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"keywords"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"配置-pnpm-的-monorepo-工作区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-pnpm-的-monorepo-工作区"}},[s._v("#")]),s._v(" 配置 pnpm 的 monorepo 工作区")]),s._v(" "),t("p",[s._v("在我们这个仓库下，我们需要管理多个项目，就可以采用 pnpm 的 monorepo。我们在仓库的根目录下创建一个 pnpm-workspace.yaml 文件，可以在 pnpm-workspace.yaml 配置文件中指定这个仓库中有多少个项目。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("packages")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" play # 存放组件测试的代码\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" docs # 存放组件文档\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" packages"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* # packages 目录下都是组件包\n")])])])]),t("p",[s._v("可以在 play 目录中运行我们写好的组件，相当于一个测试环境，在开发的时候可以知道效果是否达到预期；还需要一个组件说明文档的项目目录：docs; packages 目录则是所有组件的项目目录了，在 packages 目录中又可以放很多包的项目目录，比如，组件包目录：components、主题包目录：theme-chalk、工具包目录：utils 等。然后每一个包目录里面也需要一个 package.json 文件进行声明这是一个 NPM 包目录。所以我们需要进入每个包目录进行初始一个 package.json 文件。")]),s._v(" "),t("h2",{attrs:{id:"新建packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建packages"}},[s._v("#")]),s._v(" 新建packages")]),s._v(" "),t("ul",[t("li",[s._v("npm init vue@latest\n"),t("img",{attrs:{src:a(357),alt:"Image text"}})])]),s._v(" "),t("h2",{attrs:{id:"如何设计公共文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何设计公共文件"}},[s._v("#")]),s._v(" 如何设计公共文件")]),s._v(" "),t("ul",[t("li",[s._v("根目录 "),t("code",[s._v("npm init @vue/latest")]),s._v(" 会生成vue模版,将没用的东西删掉，比如 （index.html, public）")]),s._v(" "),t("li",[s._v("每一个模版中都会生成一个  "),t("code",[s._v("package.json")])])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@conferer/components"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模版名称")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 版本号")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.ts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//入口文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("新建 入口文件 index.ts")]),s._v(" "),t("li",[s._v("将组件抛出")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" CBtn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/components/CButton.vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" CBtn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"如何使用components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用components"}},[s._v("#")]),s._v(" 如何使用components")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("我们应该如何使用公共的文件呢？")])]),s._v(" "),t("li",[t("p",[s._v("举个例子我们可以进入到 "),t("code",[s._v("packages/h5-client")]),s._v(" 文件夹中执行  "),t("code",[s._v("pnpm add @conferer/components")]),s._v(" package.json 中 "),t("code",[s._v('"dependencies"')])])]),s._v(" "),t("li",[t("p",[s._v("会生成"),t("code",[s._v('"@conferer/components": "workspace:^0.0.1"')])])]),s._v(" "),t("li",[t("p",[s._v("引用组件")])])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" CBtn "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@conferer/components"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CBtn msg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"引用全局组件"')]),s._v(" @click"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"$emit('click', 'hi~')\"")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ul",[t("li",[s._v("安装依赖")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pnpm install "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'依赖'")]),s._v(" @panda"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("web\n")])])]),t("h2",{attrs:{id:"仓库项目内的包相互调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库项目内的包相互调用"}},[s._v("#")]),s._v(" 仓库项目内的包相互调用")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("pnpm add @conferer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("components\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("├── "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md\n├── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n├── packages\n│   ├── components\n│   │   └── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│   ├── theme"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("chalk\n│   │   └── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n│   └── utils\n│       └── "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n├── play\n└── pnpm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("workspace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yaml\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);