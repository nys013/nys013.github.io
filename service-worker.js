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
    "revision": "ee64e11ce4faf66767e2af6045a05091"
  },
  {
    "url": "assets/css/0.styles.96eac6d7.css",
    "revision": "2ce76b5983071d89ba6cf30dcc840861"
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
    "url": "assets/js/1.521ccd6e.js",
    "revision": "3871d9ed27c2b941109c7e5007ddfb4d"
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
    "url": "assets/js/14.4d29dd44.js",
    "revision": "12bc1192b7e2110983f1fd72ae4703b9"
  },
  {
    "url": "assets/js/15.c7712345.js",
    "revision": "b8c5474ee35d04a2717d2f1647d079ed"
  },
  {
    "url": "assets/js/16.049a9464.js",
    "revision": "423925ff189cc966345fabed31e541a9"
  },
  {
    "url": "assets/js/17.13054a95.js",
    "revision": "eb63954259b3376c936430512e609a6c"
  },
  {
    "url": "assets/js/18.12331aa9.js",
    "revision": "0f1f8128f15a1b14f5d11adf098abbf8"
  },
  {
    "url": "assets/js/19.1c58dc75.js",
    "revision": "1d8fdf3ea2e7fbffab74c6b791adccd1"
  },
  {
    "url": "assets/js/2.e90597d5.js",
    "revision": "0ccee3177dd997d95425745041b94263"
  },
  {
    "url": "assets/js/20.a8edd187.js",
    "revision": "a6629320dfa835513082b0987f94c30b"
  },
  {
    "url": "assets/js/21.3af3d807.js",
    "revision": "a403205a9abb6a6015eae11486b3fdd4"
  },
  {
    "url": "assets/js/22.a9508606.js",
    "revision": "ca37ad03ab77caa579f782248c35a055"
  },
  {
    "url": "assets/js/23.f5fb1632.js",
    "revision": "9f9f683327737643507717d5b77dee4c"
  },
  {
    "url": "assets/js/24.26aed3bb.js",
    "revision": "c444936a4848dfa8bfd7f9ac97860018"
  },
  {
    "url": "assets/js/25.1bcfde23.js",
    "revision": "309acd5fa69e6c5258d36e6a0483a456"
  },
  {
    "url": "assets/js/26.13d07cb2.js",
    "revision": "1e435a0e3b8522b1daf88cf9d2e1ce19"
  },
  {
    "url": "assets/js/27.1f3d3311.js",
    "revision": "26849823a1b8807e6cbeca3d9ba993b3"
  },
  {
    "url": "assets/js/28.20ced7df.js",
    "revision": "f9aa081562ab54c64be9e2aded1d793e"
  },
  {
    "url": "assets/js/29.04939263.js",
    "revision": "e75f83a177e1a715d66f18a72c9e3fe9"
  },
  {
    "url": "assets/js/3.4afbe940.js",
    "revision": "fce5845b47f7a31aac49544e511c60d0"
  },
  {
    "url": "assets/js/30.e9cc54c5.js",
    "revision": "a90d7e7914eb2cf858eea665e5185837"
  },
  {
    "url": "assets/js/31.72f73807.js",
    "revision": "e4f01e2be5444fc4ce1012302d46ef09"
  },
  {
    "url": "assets/js/32.f61657b4.js",
    "revision": "b4f8aa4aeb0cbd835a8f413c90f92064"
  },
  {
    "url": "assets/js/33.3b712625.js",
    "revision": "d7aecfe695f4a76b16696fd9fee5f72d"
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
    "url": "assets/js/36.b717d723.js",
    "revision": "196a3736bb20e1cd2c4b6fcfa432da04"
  },
  {
    "url": "assets/js/37.176f3017.js",
    "revision": "8e0698c8db706b42edb15d0712811126"
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
    "url": "assets/js/4.b880a756.js",
    "revision": "a676c0f8dc23ddf3013277ae321c2d98"
  },
  {
    "url": "assets/js/40.0d89958e.js",
    "revision": "07be2c994b8c29c6efbc21f5232a0c98"
  },
  {
    "url": "assets/js/41.89054b4a.js",
    "revision": "479c0882fde5cd69cdcdb21ddcecd0a0"
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
    "url": "assets/js/48.82c170b7.js",
    "revision": "96a8402e47a35d05d8703cdf6b5c3a49"
  },
  {
    "url": "assets/js/49.5a10e435.js",
    "revision": "e8ee5780e7c9d0046069d61b2a540993"
  },
  {
    "url": "assets/js/5.de09b133.js",
    "revision": "a0163dcdc5f663427d580d2fb0dd0487"
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
    "url": "assets/js/56.cd39a455.js",
    "revision": "71dc1f718155b25575f84b52a75f6cc8"
  },
  {
    "url": "assets/js/57.555527f0.js",
    "revision": "45b2e0f9375d117bfae6a56518d9e215"
  },
  {
    "url": "assets/js/58.0b87c10f.js",
    "revision": "794008b4c5e6620f4218059f7bde94e9"
  },
  {
    "url": "assets/js/59.65bf0cf6.js",
    "revision": "e8771e0aaf194879f3e89966a8aa4739"
  },
  {
    "url": "assets/js/6.bb2f7ccb.js",
    "revision": "ec6ee8bc68e8e10c4d4af864661157b4"
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
    "url": "assets/js/7.fa6d3f25.js",
    "revision": "4f605250c7e00d3f71fa2e99c6c53e9c"
  },
  {
    "url": "assets/js/8.3e8355cb.js",
    "revision": "325decefb2ee6179b781601b70c293d7"
  },
  {
    "url": "assets/js/9.736d8615.js",
    "revision": "f0899be3c3f3f7c2a7a3e0c2efd21a0f"
  },
  {
    "url": "assets/js/app.61974068.js",
    "revision": "366dcd85084a5aa1f14bc28e0b0bd347"
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
    "revision": "e268a664ef13467e932e624437732600"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "a74e8baebcb97f0eb5c7b0fc2507f7d1"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "0572be3ef7322adad7a9a2e2fda038f0"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "06ec06b59b0b20512330df3e50d71df7"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "dbdd43281f1c3e1d0078610ae1579852"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "dba53580b598ac94b936413587dc6d14"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "3996fa7a1f4cafe1e8bc3eee60fd1127"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "34a6e316e14fe4906873be2d94c103e1"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "64cf36fafa98466209285dbd45ab718a"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "6ebb160e2a1007fbecd4d88e5203b7cd"
  },
  {
    "url": "blog/js-useful/index.html",
    "revision": "54b9055da8ee2d223068bf0f1b393ec9"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "cfef0ae749d562169ec024f3eb637fdb"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "7ceea1e3df027c36529017cca4f1c6cb"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "4a70c831fd3bea2a9cedc608436a070a"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "71db54fe287a14d0857a25afe023b0c6"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "c1cfd83640abf204c19ba467b6e00d7a"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "712a866a80ec29a61a6e638acade9708"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "ebdc2b493f5da1d979a812d775a99fcc"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "1e9f04ec6592fc02353212dc3911cfa9"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "78cdad61cd0ba11701657147021c7d3e"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "6644853576984e3c474db15ca187f398"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "b2897d4eb507df0dc93fb8887bd49b72"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "9b72aaa0fe70f3e687b1e222cb3e16dd"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "2532201f23ef4095a1b48b24bc084657"
  },
  {
    "url": "categories/index.html",
    "revision": "5bfb649b4bc00bc17d68c61e69a09157"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "3d0dce79acfaa8b7efa8e1b5b62ba842"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "ad859ec5482bd6661396489a055dd7ea"
  },
  {
    "url": "categories/React/index.html",
    "revision": "27aaabe729228fe03fd08a5ec5217795"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "8d7338fbd81555661fc07e50591731a6"
  },
  {
    "url": "index.html",
    "revision": "0f1610945d23399aa2d7f4b1fa958440"
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
    "revision": "fdab1ff19c5f174ee4fa2146507dfeee"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "b70663b95eb56247bbcf0e684adedd62"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "840ae525ef6ee46cb57b99589a09ba43"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c31ba505e6f25764640e37a71f86db42"
  },
  {
    "url": "tag/http/index.html",
    "revision": "dbb64b6b4e4005d48b148cac4fcc0b7f"
  },
  {
    "url": "tag/index.html",
    "revision": "e3e5bcc6185815ab232f6dd32fbe680d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "819801b6437e4de79cfb6abc38753f20"
  },
  {
    "url": "tag/less/index.html",
    "revision": "31d74c1c293662c9300c0a3bc6e8c512"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "2160f06e68e166f8b77c4156189b60b1"
  },
  {
    "url": "tag/react/index.html",
    "revision": "34796e079df723b972795c06746e74f4"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "300a0a0d5c85fb2202b0a8fd603dcf7a"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "a4788333cd784b3cec6a8274038a57d7"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "700db3d00a215f3a680ed540cc468903"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "93f39e310c42a7bdacfeaff7d6752872"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "51352bae47dedb3d43515ac7a28b9ec6"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "7b7e4cb1a2625cee74a8dcc81b0393e8"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "09ffc8669c4afe418fbd0b0cbe9718ec"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "17d836b2b132e9212a7f05b15a4cecd1"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "26d16808b35cf65025f35b2e8dea6b88"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "d6e64c621e08451d87a2a5010d1fc995"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "828deca7208fc41450ed64fee04cc788"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "c8ac5fce5fa5383ad0b3258d5227f6f0"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "f81215bc9de37c3980fdf5b15a7cd4a2"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "e140c98fa3f45ef3a690cb91482c976d"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "867fae24c9193c2c60b0fc9214ca3439"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "c8326ece91fcfc708474eac9bc02678b"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c8debdb34c573cfa78936b1c1e7063e2"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "d1e6ea4c9197f8584843345fd92b1cee"
  },
  {
    "url": "timeline/index.html",
    "revision": "40fa89af8c505cea8b7ae993e4f9c92f"
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
