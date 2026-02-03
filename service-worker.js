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
    "revision": "a8e514e52f2c0e7b687e5e66cfd2cb15"
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
    "url": "assets/js/23.b7aae658.js",
    "revision": "04942f677d882b62e24b64490cb09f18"
  },
  {
    "url": "assets/js/24.7c5de355.js",
    "revision": "70eaad614b74da81c50557d8f5b98eb3"
  },
  {
    "url": "assets/js/25.e24fbeaa.js",
    "revision": "6ecdc1852738618449400326718642da"
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
    "url": "assets/js/43.4180dda5.js",
    "revision": "03753b42681de816afeae29406b2ad9b"
  },
  {
    "url": "assets/js/44.b5a90435.js",
    "revision": "ab0a577bc706c2068fb7fbbd7614e1b3"
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
    "url": "assets/js/47.571927e7.js",
    "revision": "505772bd0432beaacff70ebeb840d5a4"
  },
  {
    "url": "assets/js/48.d5cb0956.js",
    "revision": "7ae5171407c46df7da9ce4756c025501"
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
    "url": "assets/js/55.e8a20099.js",
    "revision": "dc0d9a74928548dcb6c6715c5a5bd9cc"
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
    "url": "assets/js/60.1c1dc4c3.js",
    "revision": "50917c831f9215c07955d2458dd55209"
  },
  {
    "url": "assets/js/61.713fdc96.js",
    "revision": "d764752a27124ee18ee3bddabcf363cd"
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
    "url": "assets/js/app.2ac72448.js",
    "revision": "4fcb097a0e9523bc992ea1a64b863b01"
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
    "revision": "0e953f0ffe7ded810768b070a017f0bb"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "0a71a1fb08b94550e49199b54e55896e"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "51c84c1f2a61ee80e4abf0dbfb29e5aa"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "1981a1cf8cd1194c81079ed337c798af"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "08a7cca47935bd870f0803bf7448074e"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "fd90a7a0363aac1586815f4d418afa1a"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "8c3a21774c9ae32b13d3c5b64229eea0"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "3023cee4ca88153ce7b7c81059a5f1a2"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "24ce206e6cb79142c284f9eaaf6044a9"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "626d05fd11829a2105ab3dbae6c846ad"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "343cff43eef851f7e188eadb9235279f"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "5d122cb81d5d1bcbd3f0390a59df61d9"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "6e0ddc499cfa1b5f404395659c195cc3"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "3292d421a4cbac3d9bcebadd2ed5d9ff"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "a160e0f0fb168291843d73846fac9cbf"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "ba40a0aa0c74abe129a19544bcdf9f12"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "0b9d98a132bbc9caf33f4fecb7b904e7"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "2294407e72aca433f3876c898a930115"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "92d97fca7c22b72ec0c8bc0eb7275122"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "4a7f4f7cd7b8c55184e288fa0eb4effa"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "40359b7f573080e9f41cafc6a039f31b"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "9b00da86f5ac770a8f471c9606cd2d72"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "aa1cbf57aeaf0dfe50c65301e156a1fc"
  },
  {
    "url": "categories/index.html",
    "revision": "cc2e5ea44a8ff5e4eb91066f3dc6d709"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "122e1e93f61851b92f22775ccd3e1734"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "8af89d87fcb91295d882783924fb61ad"
  },
  {
    "url": "categories/React/index.html",
    "revision": "562ef664b98dddc60d759dd1f25b68e0"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "4bdff7a206b23994d7073f0aafef44e2"
  },
  {
    "url": "index.html",
    "revision": "e05dd42ed9620ebf755eb45d2ba18908"
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
    "revision": "ef9ae51d3dba31e90eadbc79657c984e"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "8cf30dafa48b32c985c87aa566dbbe26"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "9b4ef7ad2d61a033c4263dda5175d1bf"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a641f9b1b3777eaf939e1391eb460582"
  },
  {
    "url": "tag/http/index.html",
    "revision": "13c765a2b4d0c3a31040cbac5b9a2384"
  },
  {
    "url": "tag/index.html",
    "revision": "f522d66b6382087a3c95b3aea8abe408"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ffd895a0dd0f3440fba428d81c98e933"
  },
  {
    "url": "tag/less/index.html",
    "revision": "6b38241f1da8e4fb0f803a2beca467a3"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "c811127e82b4a67855c376c1747243e8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a6e9fb5f38b9654f4f083757cf9f7736"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "79f18d4bf9d5d6b19d150fc977e0844d"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "b44672539d59836b76f6eaa17c487fa3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "52d5bc0a52622b537fd02db12b83a193"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "7c99a30a990ce1024f2db9e73137cff7"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "5997d6cc31df9f4cb8c43df63bb8a3b6"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "93bea9e05a29da1344866bd6de04fc76"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "773ede7668f9a79aba44ac667f93d307"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "c90e5fe51af58f8b6d1db078bd53504b"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "f939fbf7a3c73de279e880f0e31947bd"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "2479bb69a60fccf8828bf576f4b13e9c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "2d801c2e6d99ce8d43528064d2da76f3"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "4e73b4631d94f8c28121f5996a2087ab"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "2a1a7dbd3d0095d5ad7ece5281d9a365"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "db978ad0bd2be2077aa53af207f005ec"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "0bbc76cc6c24010519823b4fb8aeeb12"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "605d8cda1ae474608b4f11d8ca0c6f51"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "00a6ae359e47cf3bf2110d8385f6f46c"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "0c635dbb1e046cf0f5f33baebcfcad24"
  },
  {
    "url": "timeline/index.html",
    "revision": "a43a09505db78c7375e13ef1d55f77ad"
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
