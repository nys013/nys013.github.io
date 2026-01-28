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
    "revision": "f33a020e3f59e6d4b6ea2ded668c21fa"
  },
  {
    "url": "assets/css/0.styles.57163f6a.css",
    "revision": "50d969d805c63b2fcfb4dfd6236d89ea"
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
    "url": "assets/js/1.35192a4d.js",
    "revision": "4c438383e52fec8ea9e13d171e03b14c"
  },
  {
    "url": "assets/js/10.ad1a2bad.js",
    "revision": "8062e2b2551885d361af911d1d5d5367"
  },
  {
    "url": "assets/js/11.26fc56a4.js",
    "revision": "95036bd7c54065bec3c5388f20b729a5"
  },
  {
    "url": "assets/js/14.f5429001.js",
    "revision": "f1ba676a54a6f89fae39380a78493313"
  },
  {
    "url": "assets/js/15.dcd2ec26.js",
    "revision": "c074d312f0ef76148c3e461da7dd6df4"
  },
  {
    "url": "assets/js/16.2f9c02e8.js",
    "revision": "5e8250243cc312b27dcbc824e28a003e"
  },
  {
    "url": "assets/js/17.c792927a.js",
    "revision": "5b2b61764a83082e1827afeff0c2a25f"
  },
  {
    "url": "assets/js/18.52757ad5.js",
    "revision": "b11ce45bd81353c5454b47d464767619"
  },
  {
    "url": "assets/js/19.efdc51b2.js",
    "revision": "d4f7d65998c7ab3f611fcb8c1439bbec"
  },
  {
    "url": "assets/js/2.fbfcebce.js",
    "revision": "dedda37c38ad1e1bb2a46eef69b64b97"
  },
  {
    "url": "assets/js/20.403b2b69.js",
    "revision": "f7672df3d4e2055f849d0c9089550b98"
  },
  {
    "url": "assets/js/21.287e2891.js",
    "revision": "676a7ec0c23aa55125d3bca3c761edc6"
  },
  {
    "url": "assets/js/22.c899542b.js",
    "revision": "af3e977df6531cf8a007ba8bc14a1cd0"
  },
  {
    "url": "assets/js/23.8eb8b3c9.js",
    "revision": "8264fdc21a9d2f679425f876081a93c4"
  },
  {
    "url": "assets/js/24.7c5de355.js",
    "revision": "70eaad614b74da81c50557d8f5b98eb3"
  },
  {
    "url": "assets/js/25.7861e861.js",
    "revision": "e00fa8ad21f99652dfc1df528da7dbc5"
  },
  {
    "url": "assets/js/26.06fb628a.js",
    "revision": "9551c83c5082642a9ddca8478d096dc0"
  },
  {
    "url": "assets/js/27.759a9366.js",
    "revision": "f823288f157ed5d661551677d364df89"
  },
  {
    "url": "assets/js/28.10d3c707.js",
    "revision": "d63c0cb06a25a12ef11cefd970231410"
  },
  {
    "url": "assets/js/29.77c83f8e.js",
    "revision": "17db25f276c27da4f3dd71aa68af06d5"
  },
  {
    "url": "assets/js/3.b86f59f4.js",
    "revision": "251905e74c21931366559c8acac0b49b"
  },
  {
    "url": "assets/js/30.17659859.js",
    "revision": "eb2976f39fb41550f607988ec56bc90a"
  },
  {
    "url": "assets/js/31.fb004949.js",
    "revision": "0f6ef0cd5a701dbd7c71118b3545fba2"
  },
  {
    "url": "assets/js/32.cf25b9a7.js",
    "revision": "a3ad50b852b159047517fa329cbb05e9"
  },
  {
    "url": "assets/js/33.42cdfba1.js",
    "revision": "4699d3f21300605b039577a627ecb2d5"
  },
  {
    "url": "assets/js/34.b11d2d4c.js",
    "revision": "27430168f2f392ea7b20857733171ed8"
  },
  {
    "url": "assets/js/35.658726dc.js",
    "revision": "7cb0c2244a5b87a8cda9a9322a08a331"
  },
  {
    "url": "assets/js/36.46cce05d.js",
    "revision": "d3af4f5f6dcaee0d21c992d61d0d5382"
  },
  {
    "url": "assets/js/37.5430f765.js",
    "revision": "81f6a257013469e976d94b0eb471c632"
  },
  {
    "url": "assets/js/38.3b8e9ee0.js",
    "revision": "cc8375da2e8ab4787cf2ec286945cfd4"
  },
  {
    "url": "assets/js/39.eae9e329.js",
    "revision": "7228bcd25457a6414e8a4bb909007286"
  },
  {
    "url": "assets/js/4.c617d1f8.js",
    "revision": "19898e49cc51f958fb084028eeb78910"
  },
  {
    "url": "assets/js/40.b562450b.js",
    "revision": "dc15445d3cad3ce6861f7ae9fc68edec"
  },
  {
    "url": "assets/js/41.f8d074b7.js",
    "revision": "0a275c19cea07d7b3b4e2391a5ce154b"
  },
  {
    "url": "assets/js/42.77ad1c91.js",
    "revision": "170498c4504f99b70f5adcdf9c2c7e24"
  },
  {
    "url": "assets/js/43.4180dda5.js",
    "revision": "03753b42681de816afeae29406b2ad9b"
  },
  {
    "url": "assets/js/44.35e59e43.js",
    "revision": "e2bfe4509e99e9f0e5e8b7ce07006078"
  },
  {
    "url": "assets/js/45.de25d71d.js",
    "revision": "dbb51cf6353e6e5b59dd0e43f3538c07"
  },
  {
    "url": "assets/js/46.fa62c25b.js",
    "revision": "4e4abeba1deb40af07f3a6a93cab972e"
  },
  {
    "url": "assets/js/47.571927e7.js",
    "revision": "505772bd0432beaacff70ebeb840d5a4"
  },
  {
    "url": "assets/js/48.748d71ff.js",
    "revision": "4060b0170f9d820c41e73a96f72f7f1e"
  },
  {
    "url": "assets/js/49.0e67e97c.js",
    "revision": "c654cce774850f6a31abc272d850c07c"
  },
  {
    "url": "assets/js/5.82551c83.js",
    "revision": "1a533cde858a0b0a1fd9447378539ae7"
  },
  {
    "url": "assets/js/50.e02ba4d5.js",
    "revision": "bbb4bb5d8f33798917029072f0c25a12"
  },
  {
    "url": "assets/js/51.1ab6ca18.js",
    "revision": "52840746fdd9a10a61e6912f16b81b39"
  },
  {
    "url": "assets/js/52.bd82bff0.js",
    "revision": "f591b5ba125b09e33dd01155cf130a2d"
  },
  {
    "url": "assets/js/53.47ebf78a.js",
    "revision": "109e488081fc34a96c703821f4450f13"
  },
  {
    "url": "assets/js/54.cef3142d.js",
    "revision": "b09fae7c63267e29bef5ba0d57a8f7fb"
  },
  {
    "url": "assets/js/55.2b02b329.js",
    "revision": "c2dc67a7867a8f95cdb98362234b4b5f"
  },
  {
    "url": "assets/js/56.e807961f.js",
    "revision": "538b1ad437ab8d7adf85bac202dc37cc"
  },
  {
    "url": "assets/js/57.553d2b11.js",
    "revision": "3c3e7b8ca990c7aa8f77fd1c471f5b77"
  },
  {
    "url": "assets/js/58.3e051ccc.js",
    "revision": "7a7092dfbb9e3d4345d62ab19ffdbde3"
  },
  {
    "url": "assets/js/59.473612ac.js",
    "revision": "ac08aa3a99c7ea41fb78054dc92411f3"
  },
  {
    "url": "assets/js/6.ec203a7f.js",
    "revision": "16e84a77193881a0ead4201c3e26a5e8"
  },
  {
    "url": "assets/js/60.f06fb612.js",
    "revision": "5ed0274d71f96b6fa08cba211085de90"
  },
  {
    "url": "assets/js/7.dcb47bf3.js",
    "revision": "8fd3c57abf63bc767377fa5fb4976210"
  },
  {
    "url": "assets/js/8.16775d4b.js",
    "revision": "9bca1595feb39f061e0fd567db5c685a"
  },
  {
    "url": "assets/js/9.74e4f75f.js",
    "revision": "a169e97df46a390fe9d23d35ef951cba"
  },
  {
    "url": "assets/js/app.e54129c4.js",
    "revision": "b2717fa547216c8494ee5510827fd2c5"
  },
  {
    "url": "assets/js/vendors~docsearch.b599656f.js",
    "revision": "0d32c1e58d3a73b77e45e832c04c5d65"
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
    "revision": "b4fdf8b330ba43611195e1049f06d235"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "bc3d8da15ce36691450c56518cf28583"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "45ae3fba8b0e205981eab48074c84bc6"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "03bfe782e27f59e0de91cec3ce46261d"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "dccfed689dbdc127450b2f1481152649"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "53810dfe6800b71c373c713d3af58dd1"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "e9f8d4def31f080a95fe20ce12e594b6"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "ff74984df43fe7eceb0b5f594dd79f80"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "26c0a1a23665f5489e70ce12627854a3"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "899175cf1c117495f48ab0cff907e065"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "eb19a4c533a3e5c74ff42485d0727825"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "d33937942ee5630e5f13d8c2c209e3c8"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "6fcdd6a73b2ac6433e0ebf94cf835e40"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "de31844a1504e2c8bbf58ba04277b8f5"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "c2d9c17079c57818f91d2bf5c5c77a2a"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "8242e79fd02111a42cf7d44e04033896"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "237ba8bcd0539dda7aa10f8b96b667e8"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "875c3ca57cb73fc6b8965fdd5a774702"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "800638e58f9b4086ed3344dd2c862a76"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "ea92965eadf4b8e962f0b5e3857e40ab"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "b79ff32b517bb60f40f246954a66b637"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "aca3b48dab3fd23486fd22dc04c0ee60"
  },
  {
    "url": "categories/index.html",
    "revision": "6ca8ef5e1460377efd2a54719c8839d1"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "df46968f63298feb2f695c9dd398df72"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "b945db9ca77c73e21b2769f3446a79a8"
  },
  {
    "url": "categories/React/index.html",
    "revision": "a21193a0043e52ea6c8d2baf3f06c089"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "5411573afaf9e0167d7474e18058287b"
  },
  {
    "url": "index.html",
    "revision": "544795211a4ff6168e24ff4654feb297"
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
    "revision": "d90e29a4a70c051e5403599464ff5a18"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "05f05da4a7053b196790856f20f0ed10"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "e7cfe85fa2af6c5df9d723694ebf44a0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "10e50c07ff6df1f8ec0e12bccb40a028"
  },
  {
    "url": "tag/http/index.html",
    "revision": "fdb505c8029a0fd68062cb5ac7ad80b6"
  },
  {
    "url": "tag/index.html",
    "revision": "c6ef2be77d32765516bd7c1761aceb33"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "aed45d1016cb0eee7a3c0cedfb0630e4"
  },
  {
    "url": "tag/less/index.html",
    "revision": "692ed91aa71d481627726477bd16e58d"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "1a4c9f8b85a4ab5dedf269d2b201875b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "9ef9bba553e365638e0fd22596b193bb"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "382a79e63e167a9eb6265bcab657568f"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "4a821cbc4dc3f41d0bd2161e8b6730d3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4daec540ca7a77b41f8e3fc2f44c903c"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "14edbbe86708bf6091a3cf734ed27aa4"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "0752e250516bd576f9e0850bd862d240"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "3d1405dc966fa1b0a535e338a7c6c5f1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "47e7f8b0aba3e12bcc4114894dbd5ed0"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "9d71ede302ce1454e6b13ea664103143"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "9284d9d686677af0e98c6294a8767e29"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "94331db1f552f6b0330201a10af8c58b"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "0e06624457395ff05fc6c28d2770b208"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "c418aed21d514870d76d97cd945329bc"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "4b1286833fec666e26b09112c9d7ba7c"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "de79b84ea216a9ec4a9f2720a6971198"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "b7fc8462c63f843c8466a9f152777eb1"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "8d87900267e01b0af96c5122d0aa1c3c"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "7d07f2884d35c36bef03cc40d94a2a82"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb4d4ecf3809294afd722e0f34644c24"
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
