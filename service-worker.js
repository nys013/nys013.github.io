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
    "revision": "2265132123cfd603fa4d2db94215ad25"
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
    "url": "assets/js/22.04fa794f.js",
    "revision": "5b03c0a3b1541cacaa1aeabe50a223ef"
  },
  {
    "url": "assets/js/23.4b2f26a9.js",
    "revision": "5da6034d6c8a4974d805c1fb01906d0c"
  },
  {
    "url": "assets/js/24.1e70d406.js",
    "revision": "01bb8784a0c217f440acdf95a07d1ee6"
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
    "url": "assets/js/37.ec134fe5.js",
    "revision": "decd770e8d29e23ce197096d2c96d6a5"
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
    "url": "assets/js/42.3458e61c.js",
    "revision": "9373d9151f042ac781011b05e4a66623"
  },
  {
    "url": "assets/js/43.0d20d6ab.js",
    "revision": "da0eba9cbd9846c773bb5ca28bbd3050"
  },
  {
    "url": "assets/js/44.fa42b651.js",
    "revision": "d49ddddfa72baf688c643012a9814680"
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
    "url": "assets/js/47.017d0212.js",
    "revision": "b22b071439d0e2406d8de634ee58ed42"
  },
  {
    "url": "assets/js/48.20e8b326.js",
    "revision": "1184696443b538a7cf5c97f9b5d849a2"
  },
  {
    "url": "assets/js/49.46cb61ad.js",
    "revision": "72fbcadac6ab8bb7983ee0f70fd5e2db"
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
    "url": "assets/js/51.8355ad87.js",
    "revision": "00206be0fb8e797342c39e01a65cec89"
  },
  {
    "url": "assets/js/52.573466d5.js",
    "revision": "51fa88634c025c9cf9cc5085783b1045"
  },
  {
    "url": "assets/js/53.71e0456b.js",
    "revision": "f7d180353d41ffc9192088a8076c9dc6"
  },
  {
    "url": "assets/js/54.175acbf5.js",
    "revision": "147860509e3ede0c8b507cada960a936"
  },
  {
    "url": "assets/js/55.2accdeee.js",
    "revision": "96048739d3131d33162c3ed6dec193df"
  },
  {
    "url": "assets/js/56.3a8d5313.js",
    "revision": "ec7e0a235ca694943f1b4e73a875e3fa"
  },
  {
    "url": "assets/js/57.cec4f9cf.js",
    "revision": "419aead60cad9e4473ecf5cd9a7342b2"
  },
  {
    "url": "assets/js/58.7a5f5993.js",
    "revision": "48202d9d9933da3367a5f7b0ad4897aa"
  },
  {
    "url": "assets/js/59.7f0392a9.js",
    "revision": "efb2d6494364875c8ebd0d2905ebcf65"
  },
  {
    "url": "assets/js/6.bd57a8c8.js",
    "revision": "a3c7c5fd853cfa13eda7d2daa94bc89d"
  },
  {
    "url": "assets/js/60.b9bac814.js",
    "revision": "cf887d2163cec9a20006542c015ef517"
  },
  {
    "url": "assets/js/61.5ffd33a3.js",
    "revision": "7bc7babdc799bcabeb5c2548b4abf55e"
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
    "url": "assets/js/app.e33458dd.js",
    "revision": "0b2f1b8014a4d91006b2e4224d2f907f"
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
    "revision": "8b88d3075c6a43c625e99fbac0904395"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "838765492452953abd8d22131220a145"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "478a1b16260730f7f74651eae90218e8"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "13c4fe97e0af9ec549f53e8b4cb2c2a8"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "05df823c050a47ce0ad23aa37139f2b9"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "0c2ba2a09ab61dd36e26d469e3af1a8d"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "eee1b0771946925a1c1846ecc42de01b"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "6866fd68e1b73e9abe442d82496e78c6"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "b0ba191c4b58a875a5f1ec7b4006ea57"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "d14f811007c6148cf9649d4bce0b7135"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "6c2662ba67cd8b8715e0a69bab76667c"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "359c51df84414bf1c532b68ff27d77cc"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "ed04e7bb706023ef635fe5c02bc0f9ce"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "461c2d10dea10c2dc6a800c69c921de6"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "d9d925c8456644613385f16bb5bcd431"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "57b14cb9cb94300adf864ae0a24d7d0f"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "61906306bdc06f3ac6e7b791998f5510"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "33b876a7ca5c96b0b7848b62374eaf9d"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "84d9b94966a6ae21abd3c6dfe27468ec"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "80c1d29f14664868c52da7f89932e29a"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "2483374f1fc3c20c9b264549d2af6706"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "55ee543c90e780fff37f7977177f8231"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "4e4774e9c9a4070f252a5b1cf846451b"
  },
  {
    "url": "categories/index.html",
    "revision": "cbd39f39522370bd9b4f61ceee89ca49"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "ffd835c6ba1b751119943cceb1489672"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "d1aa887c61d12c71a765b8bcb4a63762"
  },
  {
    "url": "categories/React/index.html",
    "revision": "dda8ded05d1e6aa746947975e0729562"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "f886042ace745fe58c6e1548ac630718"
  },
  {
    "url": "index.html",
    "revision": "66ce737deff310ba6d7e720d7b8596d9"
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
    "revision": "e2d55343a0da55bca60f2c96a7dfe63a"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "b0a491a53d5080dee225468ce590d695"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "2c18f0473da1c3fc816366f8c65aa57b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e2515608528c50d9c0e2d96d8133a5dc"
  },
  {
    "url": "tag/http/index.html",
    "revision": "37bf60396e81a3274f96cb92c7d507b9"
  },
  {
    "url": "tag/index.html",
    "revision": "2d6bd36ff4c1f1a1a933cb7c414c4e78"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "870321b4b459ca5bac3881822e63cf00"
  },
  {
    "url": "tag/less/index.html",
    "revision": "8aa2bcf0193020f556e256618bddb01a"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "135ff2b53bb0d2a20fe611ecf6a5fa8b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1653c03ca1a1228758b0915174ab86a6"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "c57fb037ce6c2ef353842057b863dec2"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "668715477042647ac8a95851dd11e2f4"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "36fcbf0109415a020ba291dd3e456b85"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "21fc54b19bc7c23a2ac3cd78b0537f95"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "2e953a4e3223efa5a956d97824cbee48"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "6b9b732eb37cc27c542cfbe764de6c27"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "a6826bc8f3ddb06a29dfc43c3f825960"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "85c801d6988c6877415980bf32a692a6"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "97f310589c5691c0dbcf2a48a0dfd3b5"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "623596ff54f9bd31e2653424ad73dfa1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0e90686553d42dea38920e8efb3e9f33"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "d5154c0ae12352c61f66ede3125e1cd0"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "ef7817729bd2de5b0d0b87e59e1a07f0"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "87737faf5e43c864edf89bd181ffa9d2"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "cf7e23b15be0a70b7459b5df2b34634f"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "e02f6b50cde61faeda46ef1c4ae1ea1c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f8afa49aa7cdf1ad9db597f50ead683b"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "8ee4935cfb88a972a463122b282682c0"
  },
  {
    "url": "timeline/index.html",
    "revision": "9680be3faac8f9186a9e9f639533d4c5"
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
