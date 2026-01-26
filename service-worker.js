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
    "revision": "f00cea3f8538a4627cffe7608df309f6"
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
    "url": "assets/js/23.b7d1fb0c.js",
    "revision": "0b67c53f15c52c6ad353c970269758e8"
  },
  {
    "url": "assets/js/24.7c5de355.js",
    "revision": "70eaad614b74da81c50557d8f5b98eb3"
  },
  {
    "url": "assets/js/25.85d3b1d5.js",
    "revision": "c398e3916e14eec5f384d662ec000a53"
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
    "url": "assets/js/28.91093683.js",
    "revision": "206b13e9a497766ea6696366ff9bae79"
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
    "url": "assets/js/37.e54aa387.js",
    "revision": "fcf60d1410810eb5fbb18c697906b108"
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
    "url": "assets/js/43.56ea5eb0.js",
    "revision": "0fd8adbf9a42c41faf2209e153dd5f23"
  },
  {
    "url": "assets/js/44.c84be640.js",
    "revision": "7d720237018454e7efb93524ae4fa870"
  },
  {
    "url": "assets/js/45.de25d71d.js",
    "revision": "dbb51cf6353e6e5b59dd0e43f3538c07"
  },
  {
    "url": "assets/js/46.ef9fbad6.js",
    "revision": "0e2a3b9265500637699dad0737eb5335"
  },
  {
    "url": "assets/js/47.8ca92aef.js",
    "revision": "762dd0de441aa61936dfc4efe2a95306"
  },
  {
    "url": "assets/js/48.748d71ff.js",
    "revision": "4060b0170f9d820c41e73a96f72f7f1e"
  },
  {
    "url": "assets/js/49.84924975.js",
    "revision": "814caacb6043d510810cef9bc20a4c3d"
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
    "url": "assets/js/53.71e0456b.js",
    "revision": "f7d180353d41ffc9192088a8076c9dc6"
  },
  {
    "url": "assets/js/54.3f69a195.js",
    "revision": "49f966c5659d7af0d67a0ee52905d7cc"
  },
  {
    "url": "assets/js/55.edd28d91.js",
    "revision": "32c98c8fc47c91407e8da855eae34ca9"
  },
  {
    "url": "assets/js/56.e807961f.js",
    "revision": "538b1ad437ab8d7adf85bac202dc37cc"
  },
  {
    "url": "assets/js/57.388786ee.js",
    "revision": "20bbbbd95791d6e193d10fc6e5afe19d"
  },
  {
    "url": "assets/js/58.0871d4f6.js",
    "revision": "b63614a47534f5d986b4579e6d2e48f7"
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
    "url": "assets/js/app.88cc9df8.js",
    "revision": "d2a881d1c489370afbec5eab223b347b"
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
    "revision": "fc33663e207334e4f5a85344178c690a"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "06b8015cbc5165d74e7aec8fb5c310e7"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "294306d83adc3af839a40b23877cfdd7"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "193632c3366c09d29466776f52c7186c"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "8231a7fae15c4d2fc953aeafd6c76ea6"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "034c720ee15d989ead59674ede76bb87"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "aa9fdb5427fe058bcd2119aed5f6d0f4"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "95ef309bbb9c79502d84a40b894b042b"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "78478b4df4f996f6b0581f41459e96aa"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "e370db3c0767386ce738961fbff20f8e"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "5fcc62e9fade27097568fe4485da43ca"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "a5467d29189f752a3f418a11dd874ac0"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "261ecaad86c5a3e77fc61dbf9510450d"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "a2df75955b1c219639536db15544e09b"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "2a2bd888a2f4859d33ddba3cc64327d8"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "5ac7b793685d21aa283729df6d9311d0"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "d0bf12c908e1a4b87445d25d6739db08"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "785e4f24fc73455ac98e50fbe5a4ac46"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "e60c1bab3de0dd9b427a4b35b4374c12"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "3a6989a3ad9c68ac5a67ed71a0ad84c7"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "f3d313699b6f189fedf60a2a364ba118"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "d90cb4a579fd1b1959e41f1ae520f3b1"
  },
  {
    "url": "categories/index.html",
    "revision": "1ff127f1f6aed8adc97892620e4c04e6"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "7d9f4aa1c0a6a36089ac47e0cea64943"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "1752e02feab62e933c174c302872e012"
  },
  {
    "url": "categories/React/index.html",
    "revision": "9d494d0feb5bbb28df35cafb6fb5e6d5"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "18e65fbe3276212a9a4ac0afd58bb848"
  },
  {
    "url": "index.html",
    "revision": "83b974d12c556ce4de23a3c5cb31eb77"
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
    "revision": "206e60238d7519f81a5a7ca6935ab5ad"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "8be26496a3ce10b95be44896b04f4cbc"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "d49ed445dbb19212fb6fed4b712b7ae9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9e96bdf56c0c1d18e52fd22506df29f7"
  },
  {
    "url": "tag/http/index.html",
    "revision": "1ef55875b4ebaa602b580bfd16d302c6"
  },
  {
    "url": "tag/index.html",
    "revision": "dfb2d3e6b9339dfa07f63e38d52d4e24"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "56a0c32fdede74a912f7bf6ccb6e7572"
  },
  {
    "url": "tag/less/index.html",
    "revision": "623079374075fca33e9cce6741556ee1"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "48b29294b6970799862638733b95bdcf"
  },
  {
    "url": "tag/react/index.html",
    "revision": "61130f091ab5adfa0b36e8135f842b3e"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "fdc73aeed3f1386b94b222971b390e08"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "710fc509cd2a3215f5391d7c5adf33fe"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4e804bc2ce27335174a1492b454db401"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "d5d370a57746022108f551a30f2e29a1"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "ed9cb77cb3144f740be2df7cf371f68c"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "3906f24a0bb7031373d1659fa524e3da"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "b9fcce208436d434e9e36e37ed82c8d1"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "86e9fcdc8e8adbd899bb3a4156ca6354"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "5646db8b7f675926bb66fb3f29b12a1e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "aa12cb7302bf27bc958658b1b496011c"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "9d113bee7a031f3a2ec8dd4dfd6f849c"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "325986f683ea34a2e6b313697eacaef2"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "88d25c321ec8c758b88ba84f5bbab800"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "570512f6f6120d98dfde34db9168a60f"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "d93e21073bbc74c16a1decacdc759a04"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "7ae64d8176f51d321e243bd7c7031783"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "6a758c799f44567d86ff8afb48525d94"
  },
  {
    "url": "timeline/index.html",
    "revision": "2b631bfe24b533dcdca29dbcda28110b"
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
