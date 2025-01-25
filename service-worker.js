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
    "revision": "e988f6ffe970f969db9a250675bf9d4b"
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
    "url": "assets/js/26.885e37cb.js",
    "revision": "cb1bca84d96a3251a976eeacd449a833"
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
    "url": "assets/js/39.1476e53d.js",
    "revision": "3ca9b8005b9582e9f26e2bd1c9032c35"
  },
  {
    "url": "assets/js/4.335bce45.js",
    "revision": "b586225d2b2beb6874caa2a759b19e01"
  },
  {
    "url": "assets/js/40.b4cac3f8.js",
    "revision": "dee0f92bd24372c909d3e1494157c2cb"
  },
  {
    "url": "assets/js/41.ecd132e0.js",
    "revision": "1745ebb516373f94911473d0bf2c1b96"
  },
  {
    "url": "assets/js/42.40bc36c4.js",
    "revision": "82bac72d56f594a86f8c9981223ebd32"
  },
  {
    "url": "assets/js/43.96cb0aac.js",
    "revision": "4c311bde0750bbf71393cf519a6e1938"
  },
  {
    "url": "assets/js/44.a52c1868.js",
    "revision": "0575c5d4e15e7add87be042c9ee32322"
  },
  {
    "url": "assets/js/45.93ea5506.js",
    "revision": "a03c776e586c5c95ca54e9e7aa89b56b"
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
    "url": "assets/js/49.cf2c214b.js",
    "revision": "df8b25b94cfbe04d23d8b3735bfb9dad"
  },
  {
    "url": "assets/js/5.21cdcfb6.js",
    "revision": "4ad9d9c0cde073508edf1de47c901cdc"
  },
  {
    "url": "assets/js/50.a8d52fa5.js",
    "revision": "b41dfde7430b1baa9a4c0bdd70127c8b"
  },
  {
    "url": "assets/js/51.ed353d03.js",
    "revision": "f797dc241c9f8a62bd858e77d41a9ba4"
  },
  {
    "url": "assets/js/52.5195860d.js",
    "revision": "28b9f4d058ba566a28a5382a79a1d35b"
  },
  {
    "url": "assets/js/53.53913b10.js",
    "revision": "bd230b691db449351854ac259b8d58fa"
  },
  {
    "url": "assets/js/54.3868f842.js",
    "revision": "dc022d5a965c76248ef548521bd7dd4e"
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
    "url": "assets/js/app.48844e10.js",
    "revision": "8d8acb99e7f6c4b284ae2a04adad8c1b"
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
    "revision": "a2b39099b2a75a8b40a1601b4754e961"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "c69fbd3a1e180db518bede878bfe024f"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "4b460f9f74896222a1e1a9ceb44aac59"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "078994a0a15d73985f4f31ae42297695"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "49399116760df0da59e3ee85b1a4f5f5"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "ee6c586bc8a51b00e9347aafc881e3a6"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "afdea3c26dba809ff24232bab8295643"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "51b200bdbfece534e2c27067d4e926d3"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "068c1cef69cb2922a688edcf8a86c754"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "64ac8a864ad7ef809ac18cbea0419636"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "a421c3d80fe13d4deb0412ef6e5480dd"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "09dc81931db9a36626ba6ac5224032ac"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "4797a830394ffe11d830929395d74cb4"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "58956d46d3764710342a4f54bd903bea"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "82e301258fe4d71cbc88616eef045718"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "a30aeba429c4930f42e6d3d51d91c949"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "2ae5ba0bafb0f9f66d7a32a6bbe33760"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "b525ab35d6be258550c9ded60ce7c4d0"
  },
  {
    "url": "categories/index.html",
    "revision": "5f169d1f34fea1ffba21d4b8e42a672c"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "ba1f75a115fab38d4ddca4ce14e4d10c"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "addd2fe943e4d2db80fd38f2e4893a70"
  },
  {
    "url": "categories/React/index.html",
    "revision": "54386515ebc8d63271dd31a023393a6e"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "7aad4910178afb93f5b2f8ba97de2aef"
  },
  {
    "url": "index.html",
    "revision": "9ab67a0e63e6544bb296b81f77db91fb"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "9ac6e2a00792992607f9bee23fac29b6"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "c72d08f07e32cf33aee68c6c09a062a3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2d19207d74c1556928f73cc72814636c"
  },
  {
    "url": "tag/http/index.html",
    "revision": "626bb5a596d3cb60408a901a4046fc72"
  },
  {
    "url": "tag/index.html",
    "revision": "ba69ac852d5501da06d8d11485f4b26a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9dcfb1573ee360ebd6062ebc63fbffe1"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8628d85b486918c81ea57cf83f7aa166"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "d0acf5310a8aba03ab9c2031ee78f0b5"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "ed05703d23b89776c9caacb7bad13648"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "d4663cde27fd61fc88ed82a16d4ff3d0"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "80cdc33a4644bc0ee6e414f117b393b6"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7cb29ccc6dce1a0720ba1014151c411b"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "1ab0689d20c891ab9da54c167e597825"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "052f487a0e75843e56b822e0d2a8e4b3"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "655064771bdf8da92a615633bea182aa"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "1d88a1ec6a3b011c975279294f6e5631"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f9fe5cc8213a8f89e7d3e3e652b7dab0"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "3c29eaf91b448fa11c1f23fc9528f4ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "5975a71b73d4d687856c76b7974b9b21"
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
