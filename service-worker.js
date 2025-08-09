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
    "revision": "e2d43606746d8d2f980f68a4f87ba394"
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
    "url": "assets/js/42.e9dd6e52.js",
    "revision": "1710c28e09268c947215f273a553ffc6"
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
    "url": "assets/js/48.35fad39f.js",
    "revision": "9597d83de867f3267b62ea701b901dd4"
  },
  {
    "url": "assets/js/49.614a270a.js",
    "revision": "a7e5f8c019a19aec985e99e4fbcbd288"
  },
  {
    "url": "assets/js/5.5f09f97a.js",
    "revision": "fc4f0f049de16a02044b3a2c02d2cd88"
  },
  {
    "url": "assets/js/50.0c940961.js",
    "revision": "3fccced04c9afbb0c3d16b0f30fb0f19"
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
    "url": "assets/js/app.0a3b286f.js",
    "revision": "798170a515956bfb28c702333c265080"
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
    "revision": "0cb6db77a99e56a7826a5360cd533368"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "8853993d81d016ee16a74db335956991"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "4057dd4c6bd67c1ecd6fa9e0ddf82b8c"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "399743c742ad24c42f29a58bb9b7f08b"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "1db7f83ca05e9cf8c79b3b7d8ef41c85"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "b70f26559ba6bbdc8ea948ec2f53dc14"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "8ab9165239126721e52c7ff9186ccfa3"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "14dab16eaa6cddf5a59f3ef99f9828cb"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "87069d9db38ce643f979663f6ab50739"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "02debf2a6715dd3f5425c71d784d4521"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "de53d1a3395b7d9c5385e8db760ed2ca"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "fb4324eda0a91d87fde807573bdd2d85"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "4039080d9f84f0ef4e0412d3881c1956"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "da11d70b005f97dac2ee0ebba50f02c5"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "5fc87ad453543069279ddf4039b2b1be"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "e19c8fa015f355b79e88a35c18804c3d"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "c414af4c0462622d3540d341f590466b"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "7c25a6854b1d0bcb90fe5ee649586e79"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "d4dfaa91e6860c2255b9912739332976"
  },
  {
    "url": "categories/index.html",
    "revision": "29744b0023f4a8a78d0c67df764f966e"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "d9f895120479dcb13015d2e4a66992dc"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "39c1148b478fcab71c45302da5b5a401"
  },
  {
    "url": "categories/React/index.html",
    "revision": "8727da3a1b1e208f7e2591fef3fccc2e"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "abd88fc91d7225fe9049eb20af5e355d"
  },
  {
    "url": "index.html",
    "revision": "0954a776885466a44d4cd9fc2cfaa650"
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
    "revision": "1ba76adf2d481cc043f7cd31537dff27"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "1c10962d56fe2cd49ed58aef5c346bcb"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "e7e185e68e0e1ac93a02b102d59a8e1d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "6b35d676a55fe0be50cc04db4e1f6dff"
  },
  {
    "url": "tag/http/index.html",
    "revision": "94a85e74541d9be243586749c2e983f6"
  },
  {
    "url": "tag/index.html",
    "revision": "2f1cff9d17b277d17a05793374d3191f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3a996cc0c5358112a7fc7e0bb567d790"
  },
  {
    "url": "tag/less/index.html",
    "revision": "5035b0a6ad73bdd71a24943c77d9d660"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fab65176102bb63442510f82a9b92be3"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "727e0f04d0a600549d2032c47cd4e14f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b24c39840a448260703d6e3a08d6b623"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "5b7c3679b2235a2b3987537b6e81c427"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "7ab7a2fb951686441830c13d514d667f"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "4ec5696a3b57f2f48e2d6e021f6b43cd"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "bc0b33183a304b160584f7bbffd2478f"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "0ed8d8e1782f7cb241d64689de2b7b13"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "962af80a7beda749f97e2d01f3e8300f"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "8af5c667a95ec9f95abab016927f8305"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "62e0bda2d0d00cb9d5f1bf82d5ed6e1b"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "a79a1f54569d8a1098b722896fcdcb61"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "f1df17ace6a2c31e79c1a18a6ef259b5"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "15408874d57f9507e6c45e514a7a1270"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "f49fbe7ac20fb033c2df7c339a4171e0"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "f51c74a47c527e10b9c4389df178b0ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "2bd90ba618ba12bbc9304fbfc34d23b6"
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
