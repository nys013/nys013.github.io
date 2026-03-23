/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "05dad4e51deb75ea1e3f88afc620693a"
  },
  {
    "url": "assets/css/0.styles.7f85ec95.css",
    "revision": "e6554553a3c657a3ec61df0828c7bd3f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/1.1.4bfb1d62.png",
    "revision": "4bfb1d622dce1f657a4caaaba36addf1"
  },
  {
    "url": "assets/img/1.2.977f4b4a.png",
    "revision": "977f4b4a5d35917b9d48f04bc99c5a9a"
  },
  {
    "url": "assets/img/1.3.452bd24d.png",
    "revision": "452bd24d7143b887e3a42ec09ae191b4"
  },
  {
    "url": "assets/img/1.370c7499.png",
    "revision": "370c74994777eeeacd49831fec560b7c"
  },
  {
    "url": "assets/img/1.4af0d81f.png",
    "revision": "4af0d81f56856c14bdb8c2c74d15b332"
  },
  {
    "url": "assets/img/1.642a315a.png",
    "revision": "642a315a18948ab45e2293db3297eedf"
  },
  {
    "url": "assets/img/1.699855ca.png",
    "revision": "699855ca455eb55cc37b1d28118f36bc"
  },
  {
    "url": "assets/img/1.9f59b3ed.png",
    "revision": "9f59b3ed42702b1a2aa6cb64168fc844"
  },
  {
    "url": "assets/img/1.c8eb150a.jpg",
    "revision": "c8eb150a90800b2b0d5e05555dcbd40b"
  },
  {
    "url": "assets/img/1.cdf724dc.png",
    "revision": "cdf724dca8902770171845151e2ba3cc"
  },
  {
    "url": "assets/img/1.d69bfd24.png",
    "revision": "d69bfd24ab1ddb5090df25439aaf15ec"
  },
  {
    "url": "assets/img/10.7daffe4c.png",
    "revision": "7daffe4c4243d4173e8edcd58d38532e"
  },
  {
    "url": "assets/img/11.688a0a58.png",
    "revision": "688a0a5821e1c6a7f58079e2b144500c"
  },
  {
    "url": "assets/img/2.0247d3b3.png",
    "revision": "0247d3b3d7fe4da230481d30ea57ea0f"
  },
  {
    "url": "assets/img/2.1.1e3c6782.png",
    "revision": "1e3c678226415fa42b44811da764961c"
  },
  {
    "url": "assets/img/2.2.1e6636a5.png",
    "revision": "1e6636a53052644d9895a590e9f4fd72"
  },
  {
    "url": "assets/img/2.3.1.662df673.png",
    "revision": "662df67320efc726c009535633db2597"
  },
  {
    "url": "assets/img/2.3.2.df431189.png",
    "revision": "df4311890936146690dcdb320be5b350"
  },
  {
    "url": "assets/img/2.4.1.c879993a.png",
    "revision": "c879993aad1ef798f51c6a367038b2dd"
  },
  {
    "url": "assets/img/2.4.2.58d8abdd.png",
    "revision": "58d8abdd8fea95059a54fc099dc3738a"
  },
  {
    "url": "assets/img/2.7fef36d8.png",
    "revision": "7fef36d8f480d7a34ef11a939cbcda3c"
  },
  {
    "url": "assets/img/2.ca0b43f8.png",
    "revision": "ca0b43f8d8a739090982a72bfca46e7a"
  },
  {
    "url": "assets/img/3.8e3750cb.png",
    "revision": "8e3750cbf6f6c1ae536c4230debe0ea7"
  },
  {
    "url": "assets/img/3.adc16344.png",
    "revision": "adc163449fc17f3bf8013615401941e7"
  },
  {
    "url": "assets/img/4.88690f09.png",
    "revision": "88690f098d9cd97472f5653bf032b228"
  },
  {
    "url": "assets/img/5.0472ac89.png",
    "revision": "0472ac8921387cb77f4c5734b6e6a822"
  },
  {
    "url": "assets/img/7.e8d73465.png",
    "revision": "e8d73465351e9c3b859de58ed2455940"
  },
  {
    "url": "assets/img/8.4d9f08e1.png",
    "revision": "4d9f08e16dd21466a3068729f2b8ea17"
  },
  {
    "url": "assets/img/9.36cf77b6.png",
    "revision": "36cf77b6c2dc0c156916d460912d6dbd"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/error.34760baa.png",
    "revision": "34760baac26585d27646492503aa3405"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/secrets.a8a61d76.png",
    "revision": "a8a61d76a6b2c62fcda67b9603a172f7"
  },
  {
    "url": "assets/img/style.b1b87f26.png",
    "revision": "b1b87f26be0871e63c8ca0944386dfb1"
  },
  {
    "url": "assets/img/token.e7a5a31e.png",
    "revision": "e7a5a31ee8829bff46df9a54639a8c1b"
  },
  {
    "url": "assets/js/1.ab3aad20.js",
    "revision": "9e2923fa46038729848fb0a942790a5b"
  },
  {
    "url": "assets/js/10.885b57d3.js",
    "revision": "afe7528fbce2d190c781d1ede20cd023"
  },
  {
    "url": "assets/js/11.fc0b794d.js",
    "revision": "863431a46693e78725ede4b074768fdb"
  },
  {
    "url": "assets/js/14.cd4c3e65.js",
    "revision": "fdd78db06069a8cf6a1676e3e7cfa29a"
  },
  {
    "url": "assets/js/15.8bf90aed.js",
    "revision": "c6e778a402effc9e060ec3f5d0e7cd99"
  },
  {
    "url": "assets/js/16.dc3f0c6a.js",
    "revision": "e909af3d4a6ceac259d9825a15a230d9"
  },
  {
    "url": "assets/js/17.1f3b2664.js",
    "revision": "31b40bf6d2467a3fd4e59578d7b41716"
  },
  {
    "url": "assets/js/18.168aac67.js",
    "revision": "9d37c78582bfe931f601635a6a98e350"
  },
  {
    "url": "assets/js/19.6345dc49.js",
    "revision": "5d823c3ee84d168dbc0150c034406512"
  },
  {
    "url": "assets/js/2.e90597d5.js",
    "revision": "0ccee3177dd997d95425745041b94263"
  },
  {
    "url": "assets/js/20.e1aefcd9.js",
    "revision": "920cbdd94a9ffd67ab5fd72bc05cb28b"
  },
  {
    "url": "assets/js/21.85b7be0a.js",
    "revision": "256d6c8c767133ecc89c88f7f456492e"
  },
  {
    "url": "assets/js/22.8e7946de.js",
    "revision": "8ab28a167ba694a7f350bb2719d47922"
  },
  {
    "url": "assets/js/23.4b2f26a9.js",
    "revision": "5da6034d6c8a4974d805c1fb01906d0c"
  },
  {
    "url": "assets/js/24.26aed3bb.js",
    "revision": "c444936a4848dfa8bfd7f9ac97860018"
  },
  {
    "url": "assets/js/25.f07a94a6.js",
    "revision": "891b08d1ab1dacc7262fac0a98992d6e"
  },
  {
    "url": "assets/js/26.ac25dc97.js",
    "revision": "f899047f3cded9cce65dfc0dba4c8833"
  },
  {
    "url": "assets/js/27.1f3d3311.js",
    "revision": "26849823a1b8807e6cbeca3d9ba993b3"
  },
  {
    "url": "assets/js/28.faad8ecc.js",
    "revision": "c64ebb301f78c718cdfb208e8eca9363"
  },
  {
    "url": "assets/js/29.a26d0ba3.js",
    "revision": "42e938362d3c8b3e90c9ac60d12bf648"
  },
  {
    "url": "assets/js/3.28a25cd3.js",
    "revision": "33d11913122100b19a6da3123370b8f4"
  },
  {
    "url": "assets/js/30.117e08b8.js",
    "revision": "fc75046497845448f81b68f07e672069"
  },
  {
    "url": "assets/js/31.dbd464f9.js",
    "revision": "9830cba6440ce6b6478780fcbd9f766b"
  },
  {
    "url": "assets/js/32.c7f175e6.js",
    "revision": "df5b10eed65769fe21b556ffb36a1868"
  },
  {
    "url": "assets/js/33.57f25105.js",
    "revision": "90193bf2b119302786a52e403516ceaf"
  },
  {
    "url": "assets/js/34.5c640ad0.js",
    "revision": "cb01803648ec3107bb795893f41eedf3"
  },
  {
    "url": "assets/js/35.a62d205b.js",
    "revision": "59c7e1dcd8cbe398156d29dbea66e043"
  },
  {
    "url": "assets/js/36.8f4747ef.js",
    "revision": "a39e83346c5510b50063ecf6c60ba49f"
  },
  {
    "url": "assets/js/37.cd1a0fe1.js",
    "revision": "4fb287956fd880dd72893cea6ca39b3f"
  },
  {
    "url": "assets/js/38.b09a3dd1.js",
    "revision": "72ac3bcd7646c34e4fd323127f057dad"
  },
  {
    "url": "assets/js/39.a31dcdfd.js",
    "revision": "07ae7a8703c6f3d108d58adcb7b5e185"
  },
  {
    "url": "assets/js/4.3909c337.js",
    "revision": "0a662dba7e7adf67acd87c567da79201"
  },
  {
    "url": "assets/js/40.0d89958e.js",
    "revision": "07be2c994b8c29c6efbc21f5232a0c98"
  },
  {
    "url": "assets/js/41.db3dc937.js",
    "revision": "3f3640983a86e627880093355b4cab8a"
  },
  {
    "url": "assets/js/42.13ef2f71.js",
    "revision": "6ae426e2d6c2ef2ccd2c74b6430c03e4"
  },
  {
    "url": "assets/js/43.4447a8c1.js",
    "revision": "eaa8bf8dfa705b23ad4c95b478290012"
  },
  {
    "url": "assets/js/44.0624a426.js",
    "revision": "4dc3d78af172f617cd3adbae02821765"
  },
  {
    "url": "assets/js/45.05d8fa47.js",
    "revision": "87d9cc71fee3f97866cb7f95b07cc496"
  },
  {
    "url": "assets/js/46.81d86237.js",
    "revision": "4c2d4615a4cad19bbcee523f7300c137"
  },
  {
    "url": "assets/js/47.5b1f50e3.js",
    "revision": "e4a4858fb05f573f4cc7338f2b175c23"
  },
  {
    "url": "assets/js/48.e8c0d776.js",
    "revision": "61c60b4f611dea571736a30bd061c804"
  },
  {
    "url": "assets/js/49.d9e13625.js",
    "revision": "4aec4b433e94c3e3ee2b12a5ebe1abb6"
  },
  {
    "url": "assets/js/5.69dfb404.js",
    "revision": "50d4e242ac090484cd870d26125ecd72"
  },
  {
    "url": "assets/js/50.db82e5df.js",
    "revision": "ba52fdb5bc896602f7c154790447f7ca"
  },
  {
    "url": "assets/js/51.5a453361.js",
    "revision": "cc6dd076ef41d4b8053f9c478cd2aeb9"
  },
  {
    "url": "assets/js/52.141333f6.js",
    "revision": "5b4260b9f97d3eb42df7657a8288ed1f"
  },
  {
    "url": "assets/js/53.b0352c7e.js",
    "revision": "e775d5d8971f6ed74fc389d61dac982c"
  },
  {
    "url": "assets/js/54.fc97cc89.js",
    "revision": "f49329cce53a6898de187a6eae1b5966"
  },
  {
    "url": "assets/js/55.c2774453.js",
    "revision": "4d5285ce63cb6cedcc6c424922b2fa10"
  },
  {
    "url": "assets/js/56.66bdb485.js",
    "revision": "9defa204b1f9ac96e5b1bb13d37f46e1"
  },
  {
    "url": "assets/js/57.c51717e9.js",
    "revision": "edb3d6e27c91a56e321c51f6839f5bac"
  },
  {
    "url": "assets/js/58.5dce4850.js",
    "revision": "e7aa2ba2b03a0ab630f960c557862acd"
  },
  {
    "url": "assets/js/59.65bf0cf6.js",
    "revision": "e8771e0aaf194879f3e89966a8aa4739"
  },
  {
    "url": "assets/js/6.bd57a8c8.js",
    "revision": "a3c7c5fd853cfa13eda7d2daa94bc89d"
  },
  {
    "url": "assets/js/60.d39aca7c.js",
    "revision": "de9aab2867cce9dbbdfca457b51fa327"
  },
  {
    "url": "assets/js/61.1d11c4e2.js",
    "revision": "01596018b3fe2dea48f6fb236dc94346"
  },
  {
    "url": "assets/js/62.7261e33b.js",
    "revision": "b5c1824294db30d712811cb657edacb5"
  },
  {
    "url": "assets/js/7.e616c818.js",
    "revision": "4d30b15c4510566da2ee2f3b2b774d6c"
  },
  {
    "url": "assets/js/8.4175e4ab.js",
    "revision": "96db51023fcc0ce1d50a09386eb250db"
  },
  {
    "url": "assets/js/9.736d8615.js",
    "revision": "f0899be3c3f3f7c2a7a3e0c2efd21a0f"
  },
  {
    "url": "assets/js/app.209c1bc2.js",
    "revision": "1c7dbfe0e4f834c0e4e24957334f8ee8"
  },
  {
    "url": "assets/js/vendors~docsearch.4454e11c.js",
    "revision": "113c2751e3e5670173bbc5c3bc537a77"
  },
  {
    "url": "avatar.png",
    "revision": "53b3547ed161baeebc3c2bd1950806db"
  },
  {
    "url": "bg.png",
    "revision": "1356de2d4cff6b5a9b28e1d210e66b07"
  },
  {
    "url": "blog/about-recursion/part-one.html",
    "revision": "4fe250159329f469230bc6d6b6ff5b22"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "f7648be8b78e5072612a023560a490b9"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "fa99926f1fc3b606e3f9bb703c0990a4"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "6926b6d1d79f5b99513f7448f51bf20d"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "cc72b6ba92b9e38e080596b4f661a202"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "cfb04e7e3d8775b1a70ee9008fe34078"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "87be4ec5116252e9a1ee171d4a2dfb29"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "d098653c51449fd5feea61243f106772"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "559241f84d372fa32ea71b3c9e9ec9b2"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "88d68b48c3b39697ec2e21217a591349"
  },
  {
    "url": "blog/js-useful/index.html",
    "revision": "238dca2ecdd050a337c01d0bdd1efaaf"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "39021a3d499a7bb75f7554ea1ed6de6a"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "d0644a6a1fe7d726673e0343748f9952"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "85b0fc02dc79a74870ec7147bae74602"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "ef0da5c0d7d1e6a0cfe7b9098620adab"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "8130f8efa2dc743004ca005b8e3b6734"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "78e3443e0cc3e176fb55ff5d30b06dce"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "32809b07469c4757cbaa0b242aedfdb8"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "b8db5ea399544f11ac1b1b53f37985d1"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "6754f6aad7292559b1ae112cd1a263da"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "f28183b57f594b9d50700d647ae43557"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "63aa8024a1a9500571cdbd9cec30ebeb"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "e47886df6087b7e8019f34025d591fd8"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "5a66704c0ce474aeb05a0bf3565d481d"
  },
  {
    "url": "categories/index.html",
    "revision": "848cd72cca2bc52fa3fa397f0737adb5"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "b9158afef1bd62f9fd688f182aa07f27"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "5254a6cd78ba364ee709f4826a528f34"
  },
  {
    "url": "categories/React/index.html",
    "revision": "28ca558594d6d1cfc9da6b2382f9ef47"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "2a6b639f1920875755fdcf6697023100"
  },
  {
    "url": "index.html",
    "revision": "74e09380ddb294c824b4aa850290fa7f"
  },
  {
    "url": "musicCover.jpg",
    "revision": "8bc04c64341a89c47ab3a2e25fde801a"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/ant-design-vue/index.html",
    "revision": "9f173400386a5b18a76aae0c3781e8da"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "6da02a96efad3dc26b287a3472ae3eba"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "6daef73795b895331cc9eecef91a6f87"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e7dfc8ecd0115680ea97d66b42d59f71"
  },
  {
    "url": "tag/http/index.html",
    "revision": "b8d4272eca1601b8f19482936dfa3bc3"
  },
  {
    "url": "tag/index.html",
    "revision": "5a836c20ee071f7c2413b40338d15c73"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "42609b9d56c1533e3f22b551c60f5125"
  },
  {
    "url": "tag/less/index.html",
    "revision": "834f410c250c6d89d1d6a1f4e7378b2b"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "6f0330ddd159a573f064a26760bae854"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3b5c71766288346a02e0513d5da14e7b"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "da349b368abac7fd30d1920110f727ca"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "98256198b929d74090244e5fd72cc470"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4d2525ed265efcea22698ddb98f1ac88"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "ab755f504bf7233baf83cc0856443d57"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "4736cb7c5951ba9f05eab63da556eb43"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "25543e81eb10df2a1a8d54915a6878ca"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "59d9b7af407f1ac9d5f381280bf1b5a8"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "4c7d965669b71b7fbc1e6883762b3365"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "d605d418c0b198b9f09b3525ff842660"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "793945cc6566a3f149b80889082a5fe1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d9470a871750f721ff251f7ff1456f00"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "cbbf29391d3215bf57561fcadecbb11c"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "9975b3a3899415fc40da05d39f0f6bc0"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "bef767918cfc3265d1b2791565f80e5c"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "1ac448cc829f917992321d9035070b5d"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "b88cd9f55d6b551db85da3d3b872eed4"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "40f1641de2cdbc81f017dc55ec3f85e4"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "743e69ab197446d58dd93734b993b22d"
  },
  {
    "url": "timeline/index.html",
    "revision": "9818458be5819266c2ebfb8e2d4474d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
