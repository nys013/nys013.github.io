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
    "revision": "3818a09a42f677b95009acedcf95cd30"
  },
  {
    "url": "assets/css/0.styles.5cd103bf.css",
    "revision": "82cedf4e131e7d4d1a8ef1cf57bc36df"
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
    "url": "assets/img/2.ca0b43f8.png",
    "revision": "ca0b43f8d8a739090982a72bfca46e7a"
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
    "url": "assets/js/1.3a208dcb.js",
    "revision": "a29793cecca74e733b454ba110a67ff3"
  },
  {
    "url": "assets/js/10.ff7b0688.js",
    "revision": "3a8e7036c8b6e416b6b979a373785710"
  },
  {
    "url": "assets/js/11.4172cf6c.js",
    "revision": "6b9e4c0675d963cb7fa1c5a1ff86ec07"
  },
  {
    "url": "assets/js/14.8d2ff28a.js",
    "revision": "f7c1093aec800b4c3f9422f032e84d4a"
  },
  {
    "url": "assets/js/15.870b541e.js",
    "revision": "64d3d298083750a2b416010f5d34989d"
  },
  {
    "url": "assets/js/16.7ad55957.js",
    "revision": "dde42a168bfbdda9a8869153e439fd2e"
  },
  {
    "url": "assets/js/17.b734c01b.js",
    "revision": "78602e67e2d6599169cce11c36d221e2"
  },
  {
    "url": "assets/js/18.585b98e9.js",
    "revision": "4ea141ec1713e5719d3f389c6ea8ae04"
  },
  {
    "url": "assets/js/19.6a4ab7db.js",
    "revision": "98abf792704c1e231a6239a473cfa3e6"
  },
  {
    "url": "assets/js/2.d18e0f7a.js",
    "revision": "d2821d50dc739d675030cefccd8f8447"
  },
  {
    "url": "assets/js/20.b9adacc8.js",
    "revision": "fcebb730592d835dc9e314038ede5c95"
  },
  {
    "url": "assets/js/21.320348dd.js",
    "revision": "7bbfe5c3cbdf3e9b6a5dda3dbf8b0dac"
  },
  {
    "url": "assets/js/22.c5d106d3.js",
    "revision": "1fb4f262ebaf7f7a584d502c7edf2f19"
  },
  {
    "url": "assets/js/23.24dd6901.js",
    "revision": "82b247041c06c3e3dbbda76500784851"
  },
  {
    "url": "assets/js/24.b543e343.js",
    "revision": "9ead7db8533a5737f136d26567a89179"
  },
  {
    "url": "assets/js/25.880ddcad.js",
    "revision": "7ea118fc7e5e309730d276b37a3242f6"
  },
  {
    "url": "assets/js/26.95b86c16.js",
    "revision": "adb3bf710241b1365fcbd748c950eadc"
  },
  {
    "url": "assets/js/27.bc126fa5.js",
    "revision": "cc9571ed07d4a7c883b7ac28ab86f193"
  },
  {
    "url": "assets/js/28.f0a0addc.js",
    "revision": "89fbe95d6e206c4e38ac36c7d74dabb1"
  },
  {
    "url": "assets/js/29.f859d667.js",
    "revision": "15c5c089da1fed081d82d59043d5ce2e"
  },
  {
    "url": "assets/js/3.8a368ec4.js",
    "revision": "d924f9e65f4acae27b1a542aa1a1a23f"
  },
  {
    "url": "assets/js/30.84922b46.js",
    "revision": "4ee9f7be197849a757c05e5405bf8b5d"
  },
  {
    "url": "assets/js/31.ab38d4c4.js",
    "revision": "fa4f1830f32fa81120861548ac28f7c1"
  },
  {
    "url": "assets/js/32.985cf05b.js",
    "revision": "7e95a120895eb5db1c9033e4ff710180"
  },
  {
    "url": "assets/js/33.695bcb2b.js",
    "revision": "e6eca8903c73bab1fcfed148b9fa5950"
  },
  {
    "url": "assets/js/34.aa933e56.js",
    "revision": "7cfba650068b2f9c889646889a4c0ae6"
  },
  {
    "url": "assets/js/35.aade292e.js",
    "revision": "589afc44f29ae217524f785878848e10"
  },
  {
    "url": "assets/js/36.436a60dc.js",
    "revision": "1cbdb5987b56b26a2dfc8258c15f73dd"
  },
  {
    "url": "assets/js/37.d07d6ca7.js",
    "revision": "ed37f540adbbae5887c93edd61732dc2"
  },
  {
    "url": "assets/js/38.73747e59.js",
    "revision": "adf0089d06a95d9317240dfee7234956"
  },
  {
    "url": "assets/js/39.27e9e17a.js",
    "revision": "7bfeeab742eace6af02e3cd942c0ca76"
  },
  {
    "url": "assets/js/4.335bce45.js",
    "revision": "b586225d2b2beb6874caa2a759b19e01"
  },
  {
    "url": "assets/js/40.2282fac0.js",
    "revision": "e2e3e4b3c9377789264ac7193862c0eb"
  },
  {
    "url": "assets/js/41.dd6b73c7.js",
    "revision": "a585f89efeb7327dad5c5d41067ee407"
  },
  {
    "url": "assets/js/42.e78e5669.js",
    "revision": "d6fc6f76499cc7d4615b40bd4f2f7d15"
  },
  {
    "url": "assets/js/43.2c294db2.js",
    "revision": "947a3473f113f8abe6e55f965c5751ae"
  },
  {
    "url": "assets/js/44.65c4e13a.js",
    "revision": "8369f5aa3cb6e57e9c687538c97a88aa"
  },
  {
    "url": "assets/js/45.16cc3065.js",
    "revision": "deaa2bd02bf0a8a513dd9d70b05d19c0"
  },
  {
    "url": "assets/js/46.e2047fe8.js",
    "revision": "70701b2ce4af1187c0b3d7c786a1aea1"
  },
  {
    "url": "assets/js/47.9ad27355.js",
    "revision": "62bf6a0aed5fd0c032e661e6f61a38e4"
  },
  {
    "url": "assets/js/48.2a31df32.js",
    "revision": "a024c34326d8587e6d8c95a01844e2b5"
  },
  {
    "url": "assets/js/49.ac1ab4c0.js",
    "revision": "e6d5754952e48e0b3d6b65842e39d893"
  },
  {
    "url": "assets/js/5.21cdcfb6.js",
    "revision": "4ad9d9c0cde073508edf1de47c901cdc"
  },
  {
    "url": "assets/js/50.95ab23e9.js",
    "revision": "3ca5d3560d6b357520ef0a134bc2b20b"
  },
  {
    "url": "assets/js/51.7e5d1aa9.js",
    "revision": "5e7a08d77f8d7df10a9d5b465f63e706"
  },
  {
    "url": "assets/js/52.fb46c2fb.js",
    "revision": "64ae133219e0d9a16961e750a2d6fede"
  },
  {
    "url": "assets/js/53.d299ae9c.js",
    "revision": "b9cfb034fc7b21f8587b4fa81e9ed1ad"
  },
  {
    "url": "assets/js/54.f287e018.js",
    "revision": "bd09850726b10e403e2ef13519dae2e6"
  },
  {
    "url": "assets/js/55.a8708785.js",
    "revision": "ded1d9f326fb766380aeca5630c322d6"
  },
  {
    "url": "assets/js/56.b82e01ae.js",
    "revision": "868ee14432a422bd48f99dfe8bbae77a"
  },
  {
    "url": "assets/js/6.02137c96.js",
    "revision": "cf3001d46e64cc7f9fcd8683e899e1ec"
  },
  {
    "url": "assets/js/7.d427135e.js",
    "revision": "cc20125a0bd11937b993a6e8d24f3e13"
  },
  {
    "url": "assets/js/8.19c0b65e.js",
    "revision": "d894201c7132aba7cc5698ee7dd303ff"
  },
  {
    "url": "assets/js/9.20579b6b.js",
    "revision": "0067861e972301ffbfc8c458fd68f90e"
  },
  {
    "url": "assets/js/app.b7fbce58.js",
    "revision": "de4ea47b73362c18a1b18d701d8b06c7"
  },
  {
    "url": "assets/js/vendors~docsearch.6bfdef0f.js",
    "revision": "c99413db44d29e8ff4e4cc59f0c3b614"
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
    "revision": "ec760be7cf50d1052986ff6805008ea5"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "ac3998f69b7f2d6d51b13e1e3e873ac9"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "f4b2f58b15bc7d986a4ef1cac075a41c"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "c28e659ebb8276bc8d03edfc3f05c16b"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "499403adb33bd7268662e65570661473"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "1a5211aa12f9bc6436efcb2841e8cac5"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "e75ee8a7948f9f152b0655c33405a074"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "fc0e5d77242e3f27c0bc90564bf27f01"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "cd3c1377394476c5a5f3e86ca24f86b7"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "e621e927d21e622dd63d2c35ffaca24e"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "33f710eb4bdfb4621afbb1bfd5f830ac"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "b3aae90f5e69a5a91971ef61a6dd9475"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "6eb267c56c0115ed410e138a9b545278"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "66ecde58614de7442077ca7cdb70d733"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "016e369e53e8b9df99341298477c93f2"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "e8414cae80c4c11a7e813c189c22b76a"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "6bad639c691dbc87748e0c150819e7ca"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "07251a0d62e3b15d448fb2236eeac877"
  },
  {
    "url": "categories/index.html",
    "revision": "81882f4a74f9e858bdcf5ca9353245f4"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "04fc2c914542ed644b247cdb16264076"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "c3c24f9a960b79c4fd8e322f9e705455"
  },
  {
    "url": "categories/React/index.html",
    "revision": "08ad15e5603682d8ad4e7afa161ed0ad"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "d9b1e6ae1c3a0d0fcc14b137ac56f1f8"
  },
  {
    "url": "index.html",
    "revision": "f2828ccc0baa34ac91499aec1cf0141e"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "713b3c09186590c9cfae032c59ffbe8a"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "59a9fba339a3159a26f9548b6de86988"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a64c09fcf030d558e4d8782cfebf85a8"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8fa2d5079722b1e77867e0524e9fd07e"
  },
  {
    "url": "tag/index.html",
    "revision": "f3a80c05c7fa78d3048e85d45a772c0b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9031933d65efe29cbff3d36fa22ae77d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "0bb95d31117387c0141b9ad846555a5f"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "15db41b84f1d7b5e084d3031dfdd5b4a"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "e69f09859d55868a0142e21bfa3f765b"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "8b10c8e975ca522a783f26282d436132"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "63a3b63196ace9f713c4dc81f1ee51fe"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6f2d2af0aab6ea33214afa5ab814cb19"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "81b44599d24d818721c98ff3a38669c0"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "dfca492ee586d7f99ee792ac5f7df2d9"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "5e0802da009b7e995706ebcade4bf6d6"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "4534dc997b665bdcfe6c3d95de25f16f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "9194b63cf226d860f6d58af55b1d204e"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "fe623f0dccb1c279647524b46c1ba3a1"
  },
  {
    "url": "timeline/index.html",
    "revision": "355c85b07069c3a684888e9cafc8af98"
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
