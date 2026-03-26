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
    "revision": "745cd48981ec7a49dfabfe761e7e35e8"
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
    "url": "assets/js/22.a9508606.js",
    "revision": "ca37ad03ab77caa579f782248c35a055"
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
    "url": "assets/js/37.5e8b721f.js",
    "revision": "c2693373d5f02117a19c48ad918ce2f5"
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
    "url": "assets/js/43.0d20d6ab.js",
    "revision": "da0eba9cbd9846c773bb5ca28bbd3050"
  },
  {
    "url": "assets/js/44.dc819bd4.js",
    "revision": "76e9c60d3a9bfea806d87b99f100cf03"
  },
  {
    "url": "assets/js/45.dbb7045b.js",
    "revision": "9aee54395b2ee267c775287cc6818754"
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
    "url": "assets/js/49.5a10e435.js",
    "revision": "e8ee5780e7c9d0046069d61b2a540993"
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
    "url": "assets/js/51.89e2af83.js",
    "revision": "f2d0cb61bc076aec7021ac970e64e26e"
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
    "url": "assets/js/55.2accdeee.js",
    "revision": "96048739d3131d33162c3ed6dec193df"
  },
  {
    "url": "assets/js/56.768dd85f.js",
    "revision": "f90b31ad3f03b6de481d6ffefc5187d4"
  },
  {
    "url": "assets/js/57.15b8e7cf.js",
    "revision": "331bb34a460f897eb8cfe0269143e1c4"
  },
  {
    "url": "assets/js/58.60ea2f7c.js",
    "revision": "24ffa19116c4df3792a52dcd43f82cff"
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
    "url": "assets/js/app.96a9a3d4.js",
    "revision": "a10130cb774df71c4356d441f17eadbe"
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
    "revision": "d5bb1a7256725663f0dd37c9fda2facb"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "0a696409c54be6d8ec3929b277542052"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "9a5c387bda710da5015f39fb5ef37243"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "bd3a26f788e292045fb419c76777f9c4"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "bcd021cb9852b7d6c26dc571d01f8f48"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "9ecdacf3d519d97b5de00b287f5f0c27"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "ec4986cd81b927f47ae9d2ae5f74a4e8"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "5ef10062cabf7ba11a3a115d23f07056"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "26c3ef55077f1cad4f193f43183298bd"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "1b2c217d47e645f2b76a01fca7afff6a"
  },
  {
    "url": "blog/js-useful/index.html",
    "revision": "77bb0f7adb76e1f844bad47a181ac419"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "74b92af5eea5690556e1965c16628eb5"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "1bb568c3a3a2564af6dfaf358ed561e4"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "35f569705b8c635325c5bda1fa0ea868"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "751c973b04e67fa8c817035dd2b3b00d"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "7a03d0ff10ee18591ca76512134c704f"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "553bf87f926a3788b77f87abc79733cb"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "6cb47d88a213ed8677fc883e60d6c856"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "edabf31064077f7c1b382f96142bc887"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "de37d42855e50bb974f077405966a263"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "61e802de31b02c7266d6a7df00d9a76a"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "f9fa3add6f2bd5c38cbf6380a9350922"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "8b907db31c0b6e965eff1c04014e41ac"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "51f123f7bd274ca868d48526873d88a3"
  },
  {
    "url": "categories/index.html",
    "revision": "a35a4c9b2eb5657a32ab31e52c124a5e"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "7f4803cf00bfbf4c894286f20bff7ba8"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "eec6209b5ed5edf4001d4161292262c2"
  },
  {
    "url": "categories/React/index.html",
    "revision": "7380ca25be043b43c75ff3739817112a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "5dd2f1974a2a5e211f2479576dd8a576"
  },
  {
    "url": "index.html",
    "revision": "29971c9418790675c667734f79904870"
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
    "revision": "5fd1ba3047cc4033fb89f2d7b232e4b8"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "99d4546e481429ef40c4c1c77c9c5279"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "7b4fa433b148a2943e598d589cbd4114"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6b6afdd69c3e5b8510c61c95a8421913"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e53931f43dd833f8d350ff2a656fd8af"
  },
  {
    "url": "tag/index.html",
    "revision": "b1ceb1245d53b6cb0bf07b5381264bc7"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a06dcb3c25b6c4d499b1bb23f8101b7a"
  },
  {
    "url": "tag/less/index.html",
    "revision": "0bf95021d27d279bba3c75817e8ac443"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "4f1ba85912bf80270c55f5857cdd4b10"
  },
  {
    "url": "tag/react/index.html",
    "revision": "ffa18f504b1c28d061f464a478b74c54"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "440ff76c1696e4e277236e6ee05cc9e1"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "67eba2e8c61a2b5d16796b62e86c5f3f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "929cd3b9320877e1c035ac3754258ae6"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "2f3fa03327e49f5206453791ffada863"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "53dbfe0aa8e608894b3b4ca8741e1316"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "358d747840aef08412af60166bf2a65c"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "0997862d84d2563ec341a4d4825fcb15"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "b0960ffa1d8cbdabcfcf8360b82f75c4"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "aecb31327eb0c12ffee0079b64d0522f"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "35cf499011b6353b725f5ac3810a99b0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "f9e9d485ccf0d83ac4dbcb04b3283bad"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "f856eb5efe29bb0342214555fcc9fe8c"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "1f12a60c1d69e83a8210879dc9719f98"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "c190888e47cb7572fa7a71b5c9a1a6f1"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "15ef2237a1292e4e42050ea70d6c8d23"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "6f0f2444ce0eefa303bba18760f30fbc"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "28fe298fd502e8997ec2fab69f60d101"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "7b73e577caf7974428e7f3950091e65f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d8511f361c0c4cbbededcbdfffa4bb10"
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
