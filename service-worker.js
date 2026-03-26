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
    "revision": "617e329f58a768b04feab23b62d9780b"
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
    "url": "assets/js/22.5ddf1c0e.js",
    "revision": "936c66062231cf1c96dc96f779acd0ca"
  },
  {
    "url": "assets/js/23.4b2f26a9.js",
    "revision": "5da6034d6c8a4974d805c1fb01906d0c"
  },
  {
    "url": "assets/js/24.53ae8364.js",
    "revision": "3c87a88313676c6a4f16a6bf88ae6e40"
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
    "url": "assets/js/37.e6d9da91.js",
    "revision": "7b545ffa90552904d7cdab9e56c8512e"
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
    "url": "assets/js/43.b5baa54e.js",
    "revision": "2fd79a0a6e29256215244a21670cdfd2"
  },
  {
    "url": "assets/js/44.dc819bd4.js",
    "revision": "76e9c60d3a9bfea806d87b99f100cf03"
  },
  {
    "url": "assets/js/45.05d8fa47.js",
    "revision": "87d9cc71fee3f97866cb7f95b07cc496"
  },
  {
    "url": "assets/js/46.71474517.js",
    "revision": "fe23261c2c6f1f18e1f6f1fdbca40af3"
  },
  {
    "url": "assets/js/47.226f2b9b.js",
    "revision": "ff08c984285df9ffd6c8db0d34ccddec"
  },
  {
    "url": "assets/js/48.a50532ba.js",
    "revision": "bb08c366be4d8f72cb3a1ad2e2c648a6"
  },
  {
    "url": "assets/js/49.35bcb98a.js",
    "revision": "21596ddae336230608ef05f775ce21b8"
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
    "url": "assets/js/53.71e0456b.js",
    "revision": "f7d180353d41ffc9192088a8076c9dc6"
  },
  {
    "url": "assets/js/54.d33946b2.js",
    "revision": "aae70adc672fad8a33502a8ca19416f8"
  },
  {
    "url": "assets/js/55.2f9e082a.js",
    "revision": "2342596aa495f7f0aaa2225581856c1c"
  },
  {
    "url": "assets/js/56.20cb2524.js",
    "revision": "5ffe846bd3a30ab0bea53855ee4dd566"
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
    "url": "assets/js/app.40ae6783.js",
    "revision": "e22a89ed12900087af6653fe8644eaf1"
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
    "revision": "3bf3e0140cf78899b2f63b36e494d734"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "0801ca0253ce930001aa6a0d25fa0d99"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "46e95f716fec02f69d2d8254f96e0154"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "e5c473d10a815c8d6a65fe77674df454"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "5f96708e764de249d60439e96b9910f4"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "7e41b57c2b7be8a9c3965606d30c44be"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "a41b91c970694e473dc67040d52c73bc"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "4ccc13dc7a41096ee508da54f3a7e842"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "a725e7c905e5b297d7e6c1a1751bf9ce"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "25d86bd2f9b5e094071df1b75bb8d40c"
  },
  {
    "url": "blog/js-useful/index.html",
    "revision": "00d6a2f667bd60da4c11b636bd00f93d"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "07f0b15a0a4f99f15d3da694a9199264"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "bc5e5e53b692ff79371f0cb3242752a2"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "76240643e3e67a46aedd6b4858100b67"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "12315a21e5a48c77fbf63959b9165088"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "7c17be5574e2a0496c94218fe3dc0021"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "c1625944267c2ea730d9735d94a8e243"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "5ba40553ba3b379620cfb29c66de6bcd"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "4c42e630cd1fc09238c0a9f543f3b3cb"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "45a6d20e4b169fe289f49bdcf647ad1a"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "ca1677863b350bd0803fc5caeead1e39"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "c96bbdc0188e3b17e70dfafaba7c0616"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "b1cb437a1b6d084186197be84f9e4264"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "f47a29e794343ecd17f780161b0e7d8f"
  },
  {
    "url": "categories/index.html",
    "revision": "ebd2a794dd4fabc82e36a04bc1e4b421"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "9e954d47523bccd9dd69bd27fae89e8f"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "cd7a7958f1202f063ea5dbdd094df338"
  },
  {
    "url": "categories/React/index.html",
    "revision": "d625e9f4979810d24679fe5f59cd0b12"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "4988a29833be99b2159ad7bfae71bd4b"
  },
  {
    "url": "index.html",
    "revision": "e43323e331ee9ed4f38b78081160c278"
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
    "revision": "9e1f29e234e95f8661929149c264fedb"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "dd0c4b5d91b3bdf908613923492fefc4"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "f5f7aff0803bfbafd1ebf0f88d4f5eba"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4727309ecb0d319158237cb7f7d03abb"
  },
  {
    "url": "tag/http/index.html",
    "revision": "d14aca1bc586cea10f2dd90e73cfc86c"
  },
  {
    "url": "tag/index.html",
    "revision": "3842c32304b441ea5032541ebb2b916f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "682fdfd549ab17b9faed97fdf738f6f3"
  },
  {
    "url": "tag/less/index.html",
    "revision": "6a927bcdb78aef7a27b7367f3c861cc7"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "0045303d3feb70e243fe5a8293aa31c8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a608d87be3e6a56b261e3ff399acdc4d"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "3be47e4ef684c066a8ed7af74160b7e5"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "b5b2e2ce01cf242e6a8a08e3284ee343"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b967c000b6944dee345ffddd65559a98"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "0ce48577448b12198aa36b5d163de4f8"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "c16a174f54964759503e45f00d06977e"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "8766a5cb3126dbc5b3080251788a8f38"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "8e092ce0fb3fb1b3e00dd41b41a569de"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "d26c5fa9cc767995dfe5f93f80740f15"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "baf01d2f7dd0d43f0d88ec71c423b3ad"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "e4d400fe3d0c9f15358bf054d9786704"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "4894fe65df6eef99fee1fc3c016785dc"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "6856ccc257e18bdd74ff67b4626f18a5"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "85c278719c3bdb0acaa3bc534e2afa8a"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "08a79d0401e72ecb0113c27982a2d86a"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "84ab228937bdeee96e5635e9207fa150"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "7c64887197e241b5f4a8cc355841032c"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f2cafaada0cd91882bf9c9c123e6ca03"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "de5369683ef1162eb63842b3a33b99ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "3c07630fd7f419cdbf38824ded549ed4"
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
