(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{526:function(t,s,a){t.exports=a.p+"assets/img/token.e7a5a31e.png"},527:function(t,s,a){t.exports=a.p+"assets/img/secrets.a8a61d76.png"},562:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("我将介绍两种部署方式，推荐第二种。")]),t._v(" "),s("h2",{attrs:{id:"一、半自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、半自动化部署"}},[t._v("#")]),t._v(" 一、半自动化部署")]),t._v(" "),s("p",[t._v("在根目录创建deploy.sh文件，内容如下代码：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pnpm")]),t._v(" run docs:build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" git@github.com:nys013/nys013.github.io.git master:main\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),s("p",[t._v("只需要在代码写完后，运行这个脚本即可，一般我是在package.json中配置scripts，然后bash中运行"),s("code",[t._v("pnpm run deploy")]),t._v("即可。当前你也可以直接运行"),s("code",[t._v("bash deploy.sh")]),t._v("来跑这个脚本。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deploy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("不过代码要push上去，需要建立ssh链接，具体操作上网搜下，也可以参考这篇的"),s("a",{attrs:{href:"https://blog.csdn.net/qq_36631076/article/details/144825533",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客"),s("OutboundLink")],1),t._v("。如已建立忽略。")]),t._v(" "),s("p",[t._v("这种方式不一定要将源代码push到仓库，是在本地构建最后推上云端的。但需要你手动自己执行这个脚本，所以我称为“半自动部署”哈哈。这个脚本的步骤就是：本地构建->进入构建文件夹->初始化git并提交->最后push到仓库里。")]),t._v(" "),s("h2",{attrs:{id:"二、自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、自动化部署"}},[t._v("#")]),t._v(" 二、自动化部署")]),t._v(" "),s("p",[t._v("如果你想push到仓库后，就可以自动部署，那就通过github actions实现，这是在云端构建并部署的。")]),t._v(" "),s("p",[t._v("首先在根目录下创建.github/workflows/deploy.yml文件，内容如下代码：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .github/workflows/auto-deploy.yml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto deploy 🚀\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 监听push操作")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" main "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里只配置了main分支，所以只有推送main分支才会触发以下任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个选项可以使你手动在 Action tab 页面触发工作流")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# workflow_dispatch:")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permissions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许对仓库的内容进行写操作。包括创建、修改和删除文件、目录以及提交更改等")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里只配置了push，所以只有推送main分支才会触发以下任务 ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许管理 GitHub Pages 服务并对其进行写操作")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write\n\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务ID")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行环境")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# runs-on: macos-latest")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# runs-on: windows-latest")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("concurrency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" github.workflow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" github.ref "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 官方action，将代码拉取到虚拟机")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v3\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup pnpm\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pnpm/action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("setup@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择要使用的 pnpm 版本")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 pnpm 安装依赖")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run_install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup Node.js\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v4\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择要使用的 node 版本")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 18.20.2\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存 pnpm 依赖")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pnpm\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖并打包")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install dependencies and build\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pnpm i "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" pnpm run docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署 https://github.com/JamesIves/github-pages-deploy-action")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy 🚀\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@v4\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.DEPLOY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署分支")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" main  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default: gh-pages")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署目录为 VuePress 的默认输出目录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到的仓库")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nys013/nys013.github.io\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  \n\n")])])]),s("p",[t._v("需注意"),s("code",[t._v("secrets.DEPLOY")]),t._v("是在对应的仓库中配置的secrets，首先需要在全局developer settings中创建一个token，设置参考地址https://github.com/settings/tokens/new，然后勾上workflow权限，有效日期根据自己情况设置，过期了需重新生成。然后页面往下滑点击生成token，生成后复制token的值。\n"),s("img",{attrs:{src:a(526),alt:"token"}})]),t._v(" "),s("p",[t._v("在对应的仓库中配置secrets，名称为"),s("code",[t._v("DEPLOY")]),t._v("（叫别的也行，和上面脚本一致就行），值为刚才复制的token值。\n"),s("img",{attrs:{src:a(527),alt:"secrets"}})]),t._v(" "),s("blockquote",[s("p",[t._v("第一种脚本自动push到部署的仓库/分支是全覆盖更新的，第二种只会更新实际修改的")])]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("p",[t._v("文中的脚本是我blog部署的脚本，都是直接部署到github.io上的，如果要部署到其他pages上，其实也是差不多的，具体可参考"),s("a",{attrs:{href:"https://github.com/nys013/vue3_template",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue_template"),s("OutboundLink")],1),t._v("的脚本文件，这是vue3项目的部署到对应的pages上")]),t._v(" "),s("Vssue",{staticClass:"theme-default-content content__default"})],1)}),[],!1,null,null,null);s.default=e.exports}}]);