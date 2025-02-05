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
    "revision": "7a2b532410e41612dbafe18e1210a24c"
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
    "url": "assets/js/40.2ba8b8bd.js",
    "revision": "c8e192b4ca804850a88b81e7cb4cf9a2"
  },
  {
    "url": "assets/js/41.2ca026d7.js",
    "revision": "5b0d400f944f044b3a89edfb7eab3edc"
  },
  {
    "url": "assets/js/42.761220a9.js",
    "revision": "772393222e01f22fd159f05def3eae9f"
  },
  {
    "url": "assets/js/43.92c5d87f.js",
    "revision": "857a9966270ee5cbf49c553e8ba47e85"
  },
  {
    "url": "assets/js/44.47517ef8.js",
    "revision": "9841a713e60ec9115f1a77f800c56284"
  },
  {
    "url": "assets/js/45.090201da.js",
    "revision": "72da6c5ab08fb0c0810d871d9eebf18d"
  },
  {
    "url": "assets/js/46.dce2ae5f.js",
    "revision": "150e4232a7df99331f1ae8267848a316"
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
    "url": "assets/js/50.f41e9599.js",
    "revision": "ae9b0936345d0eba8d4ee9df30109d43"
  },
  {
    "url": "assets/js/51.95dae51c.js",
    "revision": "cbdb07ddc63a450739541f1bd7a314e1"
  },
  {
    "url": "assets/js/52.9a0ca926.js",
    "revision": "2766560606d5ea59ec510b0bafb32fac"
  },
  {
    "url": "assets/js/53.1b0ae5aa.js",
    "revision": "d0a99ebab815af67efc67c18756d9e1b"
  },
  {
    "url": "assets/js/54.5dcbd5e3.js",
    "revision": "875dc97be882df047cdfa5df12ac51d3"
  },
  {
    "url": "assets/js/55.b160a5fa.js",
    "revision": "ee61331240d4deab005cf2251a68a91b"
  },
  {
    "url": "assets/js/56.4c060f67.js",
    "revision": "594b725e61933101a6308828c16c09a0"
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
    "url": "assets/js/app.5c622dfa.js",
    "revision": "9c70968ce3c9379ae103c9da33b419e5"
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
    "revision": "bcf34229ed3915bf3e837b1a4466d67a"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "cf2f59a9f92e6b5cd687ccb05fcbbdb9"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "6950e9332d175a9546493be053524fb4"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "990250890f9bebfe5e8e54a2c071bc52"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "df1acb0962caa7a5e98891a3fd29722b"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "f165015535df6bde63fd43846e5ee6f9"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "5a7b0e3cb7bea1667f45fe49d4685da0"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "5e0bf5b4aee2795149d9bedb6dfcc34b"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "21e2ff3346874a2a95ee06f3168180e8"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "03dc0d0e3391b2a313b320c6e1ff4a76"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "98e9ad0d7a68687d411b36468b7f55aa"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "d6066bca18bacae1659b04927a52ca17"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "9a55d5d0e27af76810ea1b55197c04b6"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "47ff4c0283cb78eaf6e083d65b63a5d3"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "e0576ed5e677afca6fb59f4adee296b5"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "c1e412ca48cbbc97e6bef191c746fd07"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "d184e6fe37ae1b9c8b6d059651182c5e"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "6ed8c5c0704129782e43ff4605a1d413"
  },
  {
    "url": "categories/index.html",
    "revision": "a613287d49a5e9762301d38e98abe170"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "37971baf1077dce5b2d25252441033e4"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "d66e8c1d5fb1ef75d9b28170765053fc"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2718c2927d7105425253ba8bcd7b71eb"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "9343100463a5099a7e54eeebe8ece120"
  },
  {
    "url": "index.html",
    "revision": "e8844f1367b64a86934226e516513108"
  },
  {
    "url": "musicCover.png",
    "revision": "166ab759d88f3df9ef26bcd6ca31e0e5"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "2114f8d3a6e6090ed244f62b7762ddbd"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "81582a15dd5a0e718a8586c779b27971"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2eb8d1c06ac2c8732fb5d416c0b031e7"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e18ceb025b1acd771b6d1df40cfec34b"
  },
  {
    "url": "tag/index.html",
    "revision": "81cea7ab14ebd074e294597114e98827"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "57e587ca4281b5f76f8aec29c6b63d8a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "779a8ba2d7ac3fb98027911f9a150b94"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "f15e72ac8251a7d2eeb7125031ce8ccc"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "b32dcd47f1d81c3090f0f901c36946d2"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "84e872c4ecf08ba22fdce8acbf8f862d"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "bd905f9376242ff8436890b3f1c9be50"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "60c09bdc4567a7269ceabdec7c518281"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "84c1b46ec2d901227dece79e25f252b7"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "253185d992728ede25c91937bf3fa4a8"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "9b74eda0e8f6a7884c7a60f325245692"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "d1278700ea1fadc876c4cadf7f7b0f9a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "4f89b038fce6db31621640b5180cf381"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "44b45f750b84a939914bb1e14b3e9204"
  },
  {
    "url": "timeline/index.html",
    "revision": "36c6e3bbf272813cde91d02ba1039c43"
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
