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
    "revision": "b412b987e440f7d567d186de30f03df8"
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
    "url": "assets/js/28.f619c3d6.js",
    "revision": "80e8faf1b3ae4488f42bc4cca2e9c37f"
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
    "url": "assets/js/42.d09c570b.js",
    "revision": "8ec04c63fef6fe1227283fc3554f82db"
  },
  {
    "url": "assets/js/43.4180dda5.js",
    "revision": "03753b42681de816afeae29406b2ad9b"
  },
  {
    "url": "assets/js/44.c84be640.js",
    "revision": "7d720237018454e7efb93524ae4fa870"
  },
  {
    "url": "assets/js/45.c84df4c7.js",
    "revision": "a5e69d1b65f9d98996ed79f0db57aeed"
  },
  {
    "url": "assets/js/46.fa62c25b.js",
    "revision": "4e4abeba1deb40af07f3a6a93cab972e"
  },
  {
    "url": "assets/js/47.1eff79df.js",
    "revision": "9c90f195a29750974e454c5a54504979"
  },
  {
    "url": "assets/js/48.d486358d.js",
    "revision": "1d82b0ed09c6ae82ef551f75a14ae184"
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
    "url": "assets/js/51.c8d56912.js",
    "revision": "568f05f9b4949fde4d22d643b5a01c52"
  },
  {
    "url": "assets/js/52.2a1459e9.js",
    "revision": "5cbc6c410da785d1c48575819a974fe0"
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
    "url": "assets/js/55.edd28d91.js",
    "revision": "32c98c8fc47c91407e8da855eae34ca9"
  },
  {
    "url": "assets/js/56.e807961f.js",
    "revision": "538b1ad437ab8d7adf85bac202dc37cc"
  },
  {
    "url": "assets/js/57.b2713169.js",
    "revision": "0ec8700d2d266b63cb399c830e6b0eb9"
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
    "url": "assets/js/app.ab1bc22e.js",
    "revision": "6393ec98a77079e389573b5f80564b2c"
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
    "revision": "5ebda406288c73046a72335253355185"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "c9f326ed8e3b7e142f41797186c26385"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "20b3f30ac6d90ee64bb13c958248b702"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "0222f146064f3fa79f8735b6597b1c9e"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "ff028e9e00d7d39022c6004d730cabeb"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "ac7ffac2da56b67c952760ed82da194a"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "96d993b65f79a89308f3150e1aba92a5"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "2e5f058b16e022849afd05615bdb30ee"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "2e9986c74997acfb08d4eb93414c3904"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "5a478643dd3e2257cc30b7f707bfedd5"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "ab2b97e5597e43b60227cc1247933286"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "09e4484e08686a10353e42087a07f447"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "b8d415d9404ae25470fd2c553dcd6a2c"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "ec2032d38418cd45817d5c45b9ef3515"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "e34df9675c08ab900b6aa774e8316d30"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "8b4b19e9908536968afe5aa1af240682"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "7eef95d20b53bed94501d78d95ff1477"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "039ce204f92d3b3aaa18b6aa2b667de3"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "69d0711a431e66609f6c30d1a6518b4a"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "b425bc3013942d05b51c74116d0cec3a"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "d85983b6fd3bf862c86e08a95c36275a"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "a1cf2c8ede2c15e6a91924e336824903"
  },
  {
    "url": "categories/index.html",
    "revision": "7f85d7e5e603252fcc81700eb0b2f077"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "949153b54257d7f7ba785d013f5ae441"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "310ad91b9669c60d91b7a23ac5907e17"
  },
  {
    "url": "categories/React/index.html",
    "revision": "3854eb6549e2eeb3ef831d21b98c2216"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "0c4dbde7c737b24aa01522ea224ee12a"
  },
  {
    "url": "index.html",
    "revision": "2efe911174a620d2afd41327595f2834"
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
    "revision": "596a77270b5c4a802a6309d54527502d"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "ba42fde20fb815ea2723af3dd2c47e08"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "6d88cc661350032f012e95c64c7984ff"
  },
  {
    "url": "tag/html/index.html",
    "revision": "26b4d7ba6764c29d42ccab2cd17fbd70"
  },
  {
    "url": "tag/http/index.html",
    "revision": "4b8986ae08a5e6643c7d710bbcc9b13f"
  },
  {
    "url": "tag/index.html",
    "revision": "c803da9f56e1468bf58f1a4e759d1593"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6ae293c04f767b789e58047b802a2342"
  },
  {
    "url": "tag/less/index.html",
    "revision": "757feec37d5ec40c818931b8634b20c0"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "ad5ed4b6bf5aa8481d2c847d53884463"
  },
  {
    "url": "tag/react/index.html",
    "revision": "59b6ee331e97a2ca5420193992ddcd98"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "69ffc3b2a22a30c80df98daa34dd8f94"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "342ff506c7fb0da69469c7d19a61e9cc"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "57a85e71f553adabce55bbdbc0de5d92"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "2beeacdc5eabe5513bb6464b3d38f458"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "688400a5dc0283d6f3902649233b9385"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "24dd7dc67e0733f90dc72de5dc4b7a3f"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "132b2a8a786adf42941d8b653c13c5c4"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "35f73bb4505178ceb809d25035f3c154"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "28d8fa22212f78be76ad55b3cf10f02e"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8fa7bd8c629f47a70bc606cf63d385ee"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "53f33baace93f9ce264a4372ca41f886"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "bc49068db38f1184acb72380b3bdd2d7"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "7a5bb439fa0875e951a19a787a1b94e4"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "5e24e89f7adb03248fe7ad71dbaf8791"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "3d8548ba7f1e73f5ac5a7ee7fcadaf55"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "b0cc79e344bb6a8e262d707d2afdb064"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "fbf82fcc4185e56d3ba0b72f982fea44"
  },
  {
    "url": "timeline/index.html",
    "revision": "6157328575a7aa8079f1c71e2d803a80"
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
