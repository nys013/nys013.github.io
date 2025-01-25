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
    "revision": "40bb5a908d1b2c06d73506ac6db59644"
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
    "url": "assets/js/26.3a820059.js",
    "revision": "0ec8b1bb1ba00a71d6873604f00262d1"
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
    "url": "assets/js/39.44219182.js",
    "revision": "d388cc18eb97b454b3861dc90ed9a038"
  },
  {
    "url": "assets/js/4.335bce45.js",
    "revision": "b586225d2b2beb6874caa2a759b19e01"
  },
  {
    "url": "assets/js/40.9f9f260e.js",
    "revision": "17f31da702934ab38c6e64723fb96bcf"
  },
  {
    "url": "assets/js/41.46c0444d.js",
    "revision": "ebd74e83f96e82337c06fd599f8e77d0"
  },
  {
    "url": "assets/js/42.773f48cd.js",
    "revision": "532ce4303dfa10cd14c2d2e25f357f13"
  },
  {
    "url": "assets/js/43.96cb0aac.js",
    "revision": "4c311bde0750bbf71393cf519a6e1938"
  },
  {
    "url": "assets/js/44.ef79bd94.js",
    "revision": "ddb49727d7cdc72dc53733836b3c12df"
  },
  {
    "url": "assets/js/45.d00dc332.js",
    "revision": "d600326d3dd270bca63470fbbf79dde0"
  },
  {
    "url": "assets/js/46.bcff5878.js",
    "revision": "d49c1255a8b45bd6fc5b50d825bfdff2"
  },
  {
    "url": "assets/js/47.9ad27355.js",
    "revision": "62bf6a0aed5fd0c032e661e6f61a38e4"
  },
  {
    "url": "assets/js/48.02cbfd85.js",
    "revision": "64521092805bbb2908146aaf6fc34d59"
  },
  {
    "url": "assets/js/49.e95a7cec.js",
    "revision": "9fe687c91bde9e6b69a100ef0073b8dd"
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
    "url": "assets/js/51.2478af19.js",
    "revision": "db53091f329c0f962d4afb8242da2bc1"
  },
  {
    "url": "assets/js/52.5195860d.js",
    "revision": "28b9f4d058ba566a28a5382a79a1d35b"
  },
  {
    "url": "assets/js/53.92c304c8.js",
    "revision": "c8878e7e3975cd27356cea84b19c482b"
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
    "url": "assets/js/app.b16605a6.js",
    "revision": "8f9365884356edeb2e9852be0373d179"
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
    "revision": "8c8e70bb9a785e2eec114bbe2cf176f7"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "d90001c6e3800ba8409834b4889cc7d4"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "ba5596e3d15f61f279bbc04a32318dc1"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "3e9f9bc129c900b6a6d57f482c4a38d7"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "7dc84561c059f63fb7e57e532bdebe11"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "9085616ea990650a9a662661b9d86024"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "da85f09f03afa1fcb5d120c9f466fcb1"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "8d62b3f71874aea2f3502b9414aeff8c"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "e75da50e674e1bdaa495ba0e1daf4ae8"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "c74c01ea17e33dbf23687f5fbe63e477"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "c69f7f5ba109d15627507df5340f3245"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "b5951bed7262e6024d6849277ab29395"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "44d17e6ecdff4e6b6558067e10eab233"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "93a4787ac18ae682589ae1b91e9107b5"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "ed824f084b034206de18f8cf43232199"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "3de0e405d45fb6322449e973c9023126"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "889e00bfc47fcf044207af23fe7c56de"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "09a642bb88bcd0288a9c8d29c3f2d67d"
  },
  {
    "url": "categories/index.html",
    "revision": "244986d32e78de85f60c5e5226de0559"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "dfc564f2098a02dfaa20a5e09f4ff3b8"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "1466c24bb679d135371d706e2373a699"
  },
  {
    "url": "categories/React/index.html",
    "revision": "0690ccd7f42f91698de0b616ee928a98"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "568ed420e877ce7e23f83c939fb408ef"
  },
  {
    "url": "index.html",
    "revision": "ba6b0b1cc3c8388d1380c02d30c59438"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "b5a4ebad864bcedce625e89ed5ce59cb"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "e1f263d4cde95fd4e9d662411c1c897c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3857893be7886d9d2bc1df4d0f18818e"
  },
  {
    "url": "tag/http/index.html",
    "revision": "46c8add68047d0157baf184a82f114ec"
  },
  {
    "url": "tag/index.html",
    "revision": "43fb9f6dd670a187553e819e22222d13"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1ed006523af45006ffddaf8e82c55d2e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fe34dc7c642d5758e8d1dea6b87891a7"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "0fddc2901ef4f7f36e05f05efb8653e8"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "65548c7681a1b9672668c83762c10cc0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "209bab6439e4d43f8e5d2bcd826f7899"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "bc28526ea013d7eed97e9c7a2c339d66"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0ac078ed2f5a420f15b5a64e7c58326e"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "44a369decf1a279056bf36d2d4376d08"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "8671b5bdcd23374b35cc377b1e521efb"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "fb9716a368dc5388f024a9a172b2e886"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "e73cb2e21f907d3f17fab3175cf465f2"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c24ab603939e9020dcf6ab276bd04422"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "55e74d8b1367a481e965db7b3727ff26"
  },
  {
    "url": "timeline/index.html",
    "revision": "3cff568144092d1a0cf772dfebac8faa"
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
