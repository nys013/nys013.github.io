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
    "revision": "a005df11e8ffba53f274884dce7024ce"
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
    "url": "assets/js/1.5b153a59.js",
    "revision": "df1be4438b2aa5e855273d91e67df8c5"
  },
  {
    "url": "assets/js/10.b6968fc7.js",
    "revision": "be49bf8ab290f849108fab9aa46c4341"
  },
  {
    "url": "assets/js/11.ded73fde.js",
    "revision": "fe9dfc4c46acbe8fc16b80316ae512f1"
  },
  {
    "url": "assets/js/14.f5429001.js",
    "revision": "f1ba676a54a6f89fae39380a78493313"
  },
  {
    "url": "assets/js/15.30311d8e.js",
    "revision": "069f91033fe1caa3d8dcc0fefc136d27"
  },
  {
    "url": "assets/js/16.f8ce1792.js",
    "revision": "17487be4c67c6a8569d9d6e270e6c28a"
  },
  {
    "url": "assets/js/17.f5b6338e.js",
    "revision": "9a612ad4092b88fb64ff002cdbfc7097"
  },
  {
    "url": "assets/js/18.0bdf42ee.js",
    "revision": "ea35dd26c790e6d70f82fa808634cb2b"
  },
  {
    "url": "assets/js/19.efdc51b2.js",
    "revision": "d4f7d65998c7ab3f611fcb8c1439bbec"
  },
  {
    "url": "assets/js/2.a46e8bf2.js",
    "revision": "1063f4d11bf117d08b58fa0a6b7daa51"
  },
  {
    "url": "assets/js/20.db45cc0e.js",
    "revision": "91e10f40cfbd447a422f3c1d6d2f60ce"
  },
  {
    "url": "assets/js/21.58724472.js",
    "revision": "a05c43419850e81e970f38f929e7964b"
  },
  {
    "url": "assets/js/22.08d50cca.js",
    "revision": "2d577ef28992b3011c97bba825eee4b9"
  },
  {
    "url": "assets/js/23.5f77afab.js",
    "revision": "1e7f41b763f4f4e1b6e7b506dc15960d"
  },
  {
    "url": "assets/js/24.3e9b8e82.js",
    "revision": "ea98a68de67b9eec8e52b16fe37a8b08"
  },
  {
    "url": "assets/js/25.fcab5dc8.js",
    "revision": "0bebfb405ac41d8a423c44956946ee50"
  },
  {
    "url": "assets/js/26.9f10882b.js",
    "revision": "6d0a60300635a355af6c5ab9176f11c1"
  },
  {
    "url": "assets/js/27.2de9fa4e.js",
    "revision": "7c9285330f5c6b89a07a860361cbeb11"
  },
  {
    "url": "assets/js/28.89a26e7c.js",
    "revision": "76d48c46c6a8b599424c28fb58fd229a"
  },
  {
    "url": "assets/js/29.e91008d5.js",
    "revision": "140d8d029b37ada3dbfce36dbd0e95a8"
  },
  {
    "url": "assets/js/3.e652b85c.js",
    "revision": "349ba37d2dd12c18b36b0c6722999931"
  },
  {
    "url": "assets/js/30.54ee8df1.js",
    "revision": "114214d0f204969d81b0b816fc369d63"
  },
  {
    "url": "assets/js/31.f1ce39e9.js",
    "revision": "b8f169c7a52c3c53823da1f4b97e1260"
  },
  {
    "url": "assets/js/32.bc3f1fea.js",
    "revision": "74b1712baea5c1cbe3b1609314a01dd5"
  },
  {
    "url": "assets/js/33.d82483e8.js",
    "revision": "4414f71dc8d1d0546af9dd83e93fb425"
  },
  {
    "url": "assets/js/34.0cb35083.js",
    "revision": "d22199f73a17cc4dd34c21ef7954fa5c"
  },
  {
    "url": "assets/js/35.4d32c264.js",
    "revision": "4ca47fb01af6bc9abc41a45d8c875b5a"
  },
  {
    "url": "assets/js/36.7406fecf.js",
    "revision": "f1375237e2c46292f0455116794a0a93"
  },
  {
    "url": "assets/js/37.426a77a5.js",
    "revision": "26390311e6ba9f2a44085f2f1226b4bc"
  },
  {
    "url": "assets/js/38.80fff056.js",
    "revision": "b2e44ca5da0c90965e45ebe682ed547d"
  },
  {
    "url": "assets/js/39.c4006678.js",
    "revision": "64299ec95da8113cd064242d62787e71"
  },
  {
    "url": "assets/js/4.a4e6fdcd.js",
    "revision": "2856a9ab7851d186293fe1d62a937756"
  },
  {
    "url": "assets/js/40.ebc1fac2.js",
    "revision": "5bfd2d653eb5a47e8fa3864d7b1f519d"
  },
  {
    "url": "assets/js/41.c5f8d235.js",
    "revision": "03229e0a85cd8aa0ee05bed1da1627c8"
  },
  {
    "url": "assets/js/42.761220a9.js",
    "revision": "772393222e01f22fd159f05def3eae9f"
  },
  {
    "url": "assets/js/43.51f358d1.js",
    "revision": "472347915e1539cb77f5ae7d876c9203"
  },
  {
    "url": "assets/js/44.4d9419d6.js",
    "revision": "6b16b8121532229075aec64b33308beb"
  },
  {
    "url": "assets/js/45.53b5b814.js",
    "revision": "f1a43563a3fff3485d658baca8562b77"
  },
  {
    "url": "assets/js/46.5f005955.js",
    "revision": "615f7f6c211635a046bb69d3f692e149"
  },
  {
    "url": "assets/js/47.a0a79ebf.js",
    "revision": "aa893c4e102ad35b7fafda4c458a8f73"
  },
  {
    "url": "assets/js/48.847440f9.js",
    "revision": "b2668e01521d99a4d791c525ea94069a"
  },
  {
    "url": "assets/js/49.3b57f15d.js",
    "revision": "7e7ecd88c3776c9fb8a49614669bc946"
  },
  {
    "url": "assets/js/5.5f09f97a.js",
    "revision": "fc4f0f049de16a02044b3a2c02d2cd88"
  },
  {
    "url": "assets/js/50.52f9a5eb.js",
    "revision": "5112cbfc37669406759074b72c281036"
  },
  {
    "url": "assets/js/51.5dabbaa5.js",
    "revision": "bb092a711c805d68d7b12de75392d6d1"
  },
  {
    "url": "assets/js/52.3c284d41.js",
    "revision": "f939f5030cd4dd292d1afff9b600850d"
  },
  {
    "url": "assets/js/53.da2d15ea.js",
    "revision": "184bf940ef4411576bcf5e3ac38d0c0d"
  },
  {
    "url": "assets/js/54.cbf8a213.js",
    "revision": "745ac2e9ac836ef89fc0d5c970f6e1f8"
  },
  {
    "url": "assets/js/55.8f3aa592.js",
    "revision": "0b68c4e4f71e3f1691da2f00f84bf984"
  },
  {
    "url": "assets/js/56.f8e2c386.js",
    "revision": "3ee2e84ca4b3f093410569a1bc4321ed"
  },
  {
    "url": "assets/js/57.c1ab23ad.js",
    "revision": "6c0af5d5479a50457e7bf00a5775e3da"
  },
  {
    "url": "assets/js/6.4ab9f81c.js",
    "revision": "50e7b9b6a4169f440da36901d392d6b3"
  },
  {
    "url": "assets/js/7.c50e985e.js",
    "revision": "f43bd26b29bc704bbd294e3e276d068b"
  },
  {
    "url": "assets/js/8.ebae01f5.js",
    "revision": "cb0b4a20db02af3356b07e08c838bdf3"
  },
  {
    "url": "assets/js/9.c060e669.js",
    "revision": "1f17326a1669aa17e5e4a3c19b178924"
  },
  {
    "url": "assets/js/app.c59efe59.js",
    "revision": "e121f04fdc344b4463618186b6351795"
  },
  {
    "url": "assets/js/vendors~docsearch.53b54dbd.js",
    "revision": "c177b6ec71fcf253bf783b095f7f0caa"
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
    "revision": "e5e9a5d4edbc7a2ad9a5a83e799dab33"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "361d0d7ca5de34e08f4f6b799fa117c8"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "0023a0239566c050e0f1191ad521ed48"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "8bf6471928744df4e0b25ece973ad6ec"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "709bcc3f64804dcd4e3b0b0665239224"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "5c8aa025d9d6c23beeb6939e88fc52f0"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "6d1f20986ba97b3ac512921fb83108d4"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "db94dc9e6a9ade1e8de59ab74595dab1"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "6096afa836ae6bd0770db92c9be17267"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "ee90933f8902a3d65c00acff00633948"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "d6b23db73126c31dba51a1b26bacf7b1"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "059eacb2546b1d8baf90dcdf0cb02e73"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "44b0e6cbeff7b1316aa24b9f7d5d4eb4"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "4bc76ff9452198c76d5dddd5be8d475d"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "580d1f70c06abdfc41259255f9e6ad2d"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "b0bd058fec883f6e538231394a2a151c"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "7831b1f0f98bed43c866ecbbf31df221"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "4fc6e2d8d425b133459e208c37770016"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "fb2ad5bb3b0602911c1ea9dbe235319e"
  },
  {
    "url": "categories/index.html",
    "revision": "08a44a262b0292968053ea5d38f9a842"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "3714fcc87539acc87c68f7ac91d16a2d"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "fe1a8098ceb9e5889452e875f387dccd"
  },
  {
    "url": "categories/React/index.html",
    "revision": "9ebbaf6ff984aaa92f5a4f1783d041f4"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "6ee34eac4fca07ec6ddcc71c2cd994ac"
  },
  {
    "url": "index.html",
    "revision": "20a50a4d7ee6ab1e23c001d343c03964"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/ant-design-vue/index.html",
    "revision": "bc86956c423fcdfb1614c5050bedac9e"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "625bfb4b54ff929c3b599be73eeed899"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "1143dd8c47ec4d8fb1e5107236d27e0b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bef1c69861abc6e432c141db0f7322ef"
  },
  {
    "url": "tag/http/index.html",
    "revision": "72b2b66e3d15f7022ff7f648eb55c269"
  },
  {
    "url": "tag/index.html",
    "revision": "a5bf19e72412f5ad0f35c6deac671a4d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "de38854906438ea233465bf02fe2c740"
  },
  {
    "url": "tag/less/index.html",
    "revision": "fdfecca1c01042c7e5b2cf30511ed5ea"
  },
  {
    "url": "tag/react/index.html",
    "revision": "80a3b8d98ae7ff504c353532eb31890d"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "d3b6080eef5b69de3be6bcef0ad75dcc"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "87df96166cd03f34cbc542b6fae86ed8"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "8f25904ebd7ca8364ebf2ea17c5cb452"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "305b8857d4ea2689981cd685c37d0326"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "2af543611dadd0433638b2cfab74a62f"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "eea376962879c666787d38c7eb53b75f"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "ad9c1a23b82c343327ea5926671c5481"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "747b59a7cb64084265b2077cc07f6cea"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "7fc05fa82eea2780e7bdb28335407e24"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "41dc58b599c9d26a1504b3496b878640"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "a96819652ad5ce8af5dba54e04591923"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "f3757548da1799f5d70c6c707b623cd7"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "564a92902dc09e4e61f6dcb9451d085a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "bdf1f7f2a9de332c57cb8886691aefd4"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "1522ffe68f2274b9ec386f3d2cf17292"
  },
  {
    "url": "timeline/index.html",
    "revision": "128658a5a45b09a26c020d813498a80d"
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
