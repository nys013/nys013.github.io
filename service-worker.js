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
    "revision": "0bfe04db3128af70161b7236a4851937"
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
    "url": "assets/js/22.04fa794f.js",
    "revision": "5b03c0a3b1541cacaa1aeabe50a223ef"
  },
  {
    "url": "assets/js/23.f5fb1632.js",
    "revision": "9f9f683327737643507717d5b77dee4c"
  },
  {
    "url": "assets/js/24.1e70d406.js",
    "revision": "01bb8784a0c217f440acdf95a07d1ee6"
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
    "url": "assets/js/27.177e410d.js",
    "revision": "8abf672b53219cc94da1c22e3b644bc8"
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
    "url": "assets/js/37.09b6f41e.js",
    "revision": "1b6964cfbf7f9d7cf877306582c66ceb"
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
    "url": "assets/js/42.5be56166.js",
    "revision": "ac6f5fa414369c6f95a1c1f7f1a12fda"
  },
  {
    "url": "assets/js/43.60038bea.js",
    "revision": "7345b479a806beb133e5804a62585843"
  },
  {
    "url": "assets/js/44.fa42b651.js",
    "revision": "d49ddddfa72baf688c643012a9814680"
  },
  {
    "url": "assets/js/45.dbb7045b.js",
    "revision": "9aee54395b2ee267c775287cc6818754"
  },
  {
    "url": "assets/js/46.b59ab622.js",
    "revision": "5833602b97bcda2b818c9b3e0b73b65e"
  },
  {
    "url": "assets/js/47.a28f9fde.js",
    "revision": "8151a6eabcc702a2ead355a5ed277e54"
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
    "url": "assets/js/5.de09b133.js",
    "revision": "a0163dcdc5f663427d580d2fb0dd0487"
  },
  {
    "url": "assets/js/50.db82e5df.js",
    "revision": "ba52fdb5bc896602f7c154790447f7ca"
  },
  {
    "url": "assets/js/51.c6e1298b.js",
    "revision": "ba5fc1abb56d1be70140615fff0e66d4"
  },
  {
    "url": "assets/js/52.141333f6.js",
    "revision": "5b4260b9f97d3eb42df7657a8288ed1f"
  },
  {
    "url": "assets/js/53.d82757fe.js",
    "revision": "a6eecbdaa20d393b03213158271d20bc"
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
    "url": "assets/js/56.1b7aa92f.js",
    "revision": "bf63cb70eb55ea22f59551381e7be5f0"
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
    "url": "assets/js/59.fb73f455.js",
    "revision": "d5b5bb881ffa4a00219da6cfca624e71"
  },
  {
    "url": "assets/js/6.bb2f7ccb.js",
    "revision": "ec6ee8bc68e8e10c4d4af864661157b4"
  },
  {
    "url": "assets/js/60.9ba675ba.js",
    "revision": "328149864b79260bd0fbbc76b1fb8d38"
  },
  {
    "url": "assets/js/61.fe0af2ae.js",
    "revision": "f17ba87e1eda80c5174aa55626aedb8f"
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
    "url": "assets/js/app.51fed0c5.js",
    "revision": "18f2e08e65d382b269c245f8715567ab"
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
    "revision": "41c61c5cc0a11c2793b7c2a2157534e7"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "e1e916b84e59ab7d3f13719fdc1e6b20"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "c2753ed956cb0c4846eea80b0db6f89b"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "4f61be8c4db27963cfc69b6ed7ba0133"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "2cd4708c197e1efdcf4813db1b354326"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "5ded322617f38213e0917baf5d91fcc9"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "292a72ddd127ab58606e4634d6a3b71c"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "31df97d9fd41a8d1b19dc84818805871"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "b866dbda6234e0c1f5dda31dbe8f4988"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "cf68d053060f5f150191ecb6808ff91a"
  },
  {
    "url": "blog/js-useful/index.html",
    "revision": "f9621b01d5a9ebc4e479cea45a2a18ae"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "9ad3c4307d4433adcf18cb3cc80a481b"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "91d3bae82a794be1a2c07e7fb6b525b3"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "1d2e79ebc87ce01d57223d14216ef9a5"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "83bce3c02132259d0993c6f80d08c0b2"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "52202c58a79b8aef4ef8a0d1aa79ee85"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "2372cc03829bfbed0e60eae7cadff48e"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "e5952694dff1f76b70ceab41541d16b8"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "ff545d793da314906f1513ee8b9bc52e"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "c763866d6b442f6ac7f59fbddd8968e8"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "5505570dc38d1fa92f6d8c62ec0b8552"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "9729dfe0b93298b399a9523616ee40b5"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "89de1339c324f383d550c9e8b8285f8c"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "6ff153e77f1f52a723522da651e72152"
  },
  {
    "url": "categories/index.html",
    "revision": "1d3597bb7d3fa3e26307dadec531575b"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "290e8de6d58168e8636d48bb6efcd3de"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "a1de67dbf0d9ebcf1d5912d811c97817"
  },
  {
    "url": "categories/React/index.html",
    "revision": "6112fe9b628576758dbd2c9746eadecd"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "ec15a92b27e1b7e620b1df3ba3c9ade0"
  },
  {
    "url": "index.html",
    "revision": "624e4f309600511326a4a9c67fad5d2b"
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
    "revision": "7537d6109ba4cad768cae8832bc46819"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "e50fda8b5703c72827463d141a0d01da"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "8adb0b5e0fc6bf2539939589facac38a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "91a79d9d3a9434a0bb349890989ff48d"
  },
  {
    "url": "tag/http/index.html",
    "revision": "710debe5ef9d5a398dce7dc053c0dbeb"
  },
  {
    "url": "tag/index.html",
    "revision": "9e84a931d47ee94bce8025180c2fc11c"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6185d17e75abb2f0a429b74adaecec35"
  },
  {
    "url": "tag/less/index.html",
    "revision": "5c149929e9fb50429e75d19f091b812c"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "a3394426d61c6c539a1ed6e77222fa13"
  },
  {
    "url": "tag/react/index.html",
    "revision": "eaa4e33114f907f165e9870a86e97ddc"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "dd753f4d7b5a2ec35e2c2d249d67c7fd"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "4e60a3b198f35433aa7fda4922574b33"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "06636a0d26cb1510e9b58960eea21604"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "34d528de949a2134e880c5f4d614c93e"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "fcac2d7e82af35b7e6a550bfc579f391"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "8575976335a160841ac9c294dbcf6d14"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "2fa1f8cc3581792d9d9816c16b322c65"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "4c262b1f38311dc4fce9cb20dfd751ef"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "d3b17231752dd03bf57eaf9ae55f4531"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "e99df8a7b8d7997d1fac75e6d9e5abb7"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e23876dc90f33bc97d2c1a087f5a5e5c"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "ad02f9edff3dbed813aea57afd8392c2"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "800f8670c062ced4d801a1eb15bb7c56"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "02f347a78dd5e440e89525eab399de1c"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "c44704482314f0fc48bfda5c65a23720"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "43bdae9194f4932b3537ac8653da4a1b"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "21370f78bb7455931f7f86a9a51bae63"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "96a51e105194401a39e7bdb2ec70bcb5"
  },
  {
    "url": "timeline/index.html",
    "revision": "fffbf22f004271e26cf0fd1148dc4268"
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
