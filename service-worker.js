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
    "revision": "026958b700b2949c4cdd356a6ff591ce"
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
    "url": "assets/img/1.b17f9ec3.png",
    "revision": "b17f9ec30e59c565be0a01b511dbf717"
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
    "url": "assets/img/2.699855ca.png",
    "revision": "699855ca455eb55cc37b1d28118f36bc"
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
    "url": "assets/js/1.e974a691.js",
    "revision": "56243ec6959b9098ac110c01c8c979e7"
  },
  {
    "url": "assets/js/10.b9feec65.js",
    "revision": "239bda7c96264496b135d3c44fb0fd6b"
  },
  {
    "url": "assets/js/11.4c790a09.js",
    "revision": "1888923b1ed8bb39ae17e4cd1ff50a41"
  },
  {
    "url": "assets/js/14.f5429001.js",
    "revision": "f1ba676a54a6f89fae39380a78493313"
  },
  {
    "url": "assets/js/15.7381c236.js",
    "revision": "0ba6f807c6739cc4a65364068dfbfd20"
  },
  {
    "url": "assets/js/16.191c8fea.js",
    "revision": "06c5fbdc86f00d9f5284ebe7db246e0d"
  },
  {
    "url": "assets/js/17.338713e4.js",
    "revision": "61934ab85b53f63eb307395a9c7ffbc2"
  },
  {
    "url": "assets/js/18.d2b5a19a.js",
    "revision": "0d5388ffd67f77b17c2cc8ca3fc8d8fb"
  },
  {
    "url": "assets/js/19.efdc51b2.js",
    "revision": "d4f7d65998c7ab3f611fcb8c1439bbec"
  },
  {
    "url": "assets/js/2.aec69e45.js",
    "revision": "7413c9d3c9424bfb10a34432574d007c"
  },
  {
    "url": "assets/js/20.19eb7095.js",
    "revision": "f3e864924c5afaeb84d88d81231bdacd"
  },
  {
    "url": "assets/js/21.236b2097.js",
    "revision": "c7a75b5d465c2063e13e0ded91938116"
  },
  {
    "url": "assets/js/22.22ab0da9.js",
    "revision": "ad54f0537c75554d47cab8a27d82473c"
  },
  {
    "url": "assets/js/23.e0f5b9b6.js",
    "revision": "5e54125321e04cd735ed206851c88916"
  },
  {
    "url": "assets/js/24.423695ae.js",
    "revision": "2b7c4891f7dba2dd08638b2ec7965952"
  },
  {
    "url": "assets/js/25.486d26dc.js",
    "revision": "ca9ff4fea451b660f880d618bc931075"
  },
  {
    "url": "assets/js/26.6bfef53c.js",
    "revision": "f70b03f569326279f6aa7e9179ae999b"
  },
  {
    "url": "assets/js/27.87316042.js",
    "revision": "3fb64d0283e2d57eb3de6fbc74d2f424"
  },
  {
    "url": "assets/js/28.c94d3732.js",
    "revision": "ce04c4f0a39312edb55fda85bf9b122a"
  },
  {
    "url": "assets/js/29.5469175e.js",
    "revision": "7769c455d0ebb014179857ba7003f921"
  },
  {
    "url": "assets/js/3.6342636c.js",
    "revision": "d9f3f84a91e131625822efaed062a76f"
  },
  {
    "url": "assets/js/30.324655ed.js",
    "revision": "11ef56fd0ffae2c83df47516205db01d"
  },
  {
    "url": "assets/js/31.ea86827b.js",
    "revision": "a4df9034e83c8ecaabfaf7c428e188dc"
  },
  {
    "url": "assets/js/32.9839f596.js",
    "revision": "54ee94a966e57d15be2e0694256e4f30"
  },
  {
    "url": "assets/js/33.95a5fdfb.js",
    "revision": "c28d4aca9ba2e8998ac6d7c0b0a6e64d"
  },
  {
    "url": "assets/js/34.526c6a35.js",
    "revision": "14f6092b0f960f534fadcb962f0c0aa2"
  },
  {
    "url": "assets/js/35.7c0460ae.js",
    "revision": "211f2997884d8940296010a4fe1a18ad"
  },
  {
    "url": "assets/js/36.3dfb2dfb.js",
    "revision": "afd54efa6477e3ce889a5f8c7502f69d"
  },
  {
    "url": "assets/js/37.54958430.js",
    "revision": "01d1118366d5d95eb5966d981bf68ffa"
  },
  {
    "url": "assets/js/38.1fd14d60.js",
    "revision": "3fb6ff0657cfe92b5063016c206ab4bf"
  },
  {
    "url": "assets/js/39.bf8e8c73.js",
    "revision": "d7f150ebb744d5369d59df787e959254"
  },
  {
    "url": "assets/js/4.228b665a.js",
    "revision": "20ca2e5f56f5517c669b0d994186bc6f"
  },
  {
    "url": "assets/js/40.54050163.js",
    "revision": "b5288363de6d12db5bb42fa9c5a19699"
  },
  {
    "url": "assets/js/41.a6a0b957.js",
    "revision": "07527e72e46a367650f1faf7e54cf374"
  },
  {
    "url": "assets/js/42.8615a285.js",
    "revision": "d53d6ad0ed8ba276e79704a6d7903e27"
  },
  {
    "url": "assets/js/43.3dd6bd3a.js",
    "revision": "d5a6446c89ce2a35b535ee0192fd245d"
  },
  {
    "url": "assets/js/44.4e1df8e6.js",
    "revision": "d5d92187e828fa649be6957a48a50d93"
  },
  {
    "url": "assets/js/45.f467be8f.js",
    "revision": "c61016eb913bd13b3538ced3f4565f58"
  },
  {
    "url": "assets/js/46.85e4e21f.js",
    "revision": "78e2a65332cc7283b636346c8b3dc548"
  },
  {
    "url": "assets/js/47.65442839.js",
    "revision": "79b1b77bb59faab1d22201833cf002c9"
  },
  {
    "url": "assets/js/48.4e7b168b.js",
    "revision": "ed35d53ffe94d47005cfc6380429539b"
  },
  {
    "url": "assets/js/49.eb4dc541.js",
    "revision": "dc0f815d0bcac11d353646badd28e5fa"
  },
  {
    "url": "assets/js/5.bd4a311b.js",
    "revision": "a83c34f5707a3e48394d65ec530bb972"
  },
  {
    "url": "assets/js/50.737be4ae.js",
    "revision": "08282e593b3f348637f78b97c83a1982"
  },
  {
    "url": "assets/js/51.abbb4eb7.js",
    "revision": "664e0f64ef25b0a18093f2634c9dc6fc"
  },
  {
    "url": "assets/js/52.5264ebf8.js",
    "revision": "80a3c5421cd7af33d5fc19df6a69000a"
  },
  {
    "url": "assets/js/53.f523a9ec.js",
    "revision": "ecb2734a451163473ddf1458a1637927"
  },
  {
    "url": "assets/js/54.6c42b9d7.js",
    "revision": "6504647ed5a37e20b0ae5b2569351b02"
  },
  {
    "url": "assets/js/55.1bf781a5.js",
    "revision": "d4e70206c8449330043e5dba02bf5e53"
  },
  {
    "url": "assets/js/56.48a9c4af.js",
    "revision": "c0acee1d69059d436ca1fe3816926c36"
  },
  {
    "url": "assets/js/57.7f974e94.js",
    "revision": "dff211e613c6486467ed71745279ae44"
  },
  {
    "url": "assets/js/58.1a3003e8.js",
    "revision": "ef4930de39a75ca93589b8d82a757f9b"
  },
  {
    "url": "assets/js/6.831d282b.js",
    "revision": "3b2833cc32a0349a8b165dde416a8930"
  },
  {
    "url": "assets/js/7.3f6392b0.js",
    "revision": "91ac25b9c40e6c431fd4309d96176f7a"
  },
  {
    "url": "assets/js/8.de2df9e6.js",
    "revision": "8f3c276543899fd7da3944f8239bc2e9"
  },
  {
    "url": "assets/js/9.67ebf9f4.js",
    "revision": "8d970b524e3f0838e9295102637c0253"
  },
  {
    "url": "assets/js/app.d16803fa.js",
    "revision": "d7dec57fc18ef48b7bdc79836e4004ff"
  },
  {
    "url": "assets/js/vendors~docsearch.c89c081b.js",
    "revision": "1c9eda7c218d3fdfb2b0f7be60f7a183"
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
    "revision": "49cd6312c22bdea908536e1d98252589"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "ea20c7c5f1faa4a07a8071fbc939b240"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "0bd88c62ff9a39917a19d7833349953e"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "fc1f9a3e42f854553580e74d9d250714"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "8f6b29b2e0f722c2b8037ed872837c02"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "065a481ccc483af4fba499a29e64b375"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "ebf0c7ccf362bcd23dd7470d18069ee9"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "c81ba55f68611396da7fee77db65091d"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "419db25e3ef5424184bec63fc09e574d"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "813b2cd5908a3d8c4be07dd49bb2510d"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "7c5e4969c31d60b592dcf18424e7c0e8"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "673e1568204f3120d561fdfa6b4a5c66"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "abe9a2c104b0f8ec4c14340d5c22fd33"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "72975103ab7a50648babcd025510ce37"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "3f67819c3fa06bb86f62fcd5bb93de49"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "84a2d46c7aa983033ad920634579047f"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "9bfc9413aeb3023842fa5249c3ddfb3a"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "324c84025ec66e9f4da2d4879c5500ca"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "0ed7d663842d1124ee69236603b7daaf"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "940cf180ea994d6e80296eee591b93f2"
  },
  {
    "url": "categories/index.html",
    "revision": "d06db94d9e4fc501ce0a92adb51340d5"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "a91156c08baf3bde35b37f7dca9055e7"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "e192d5cdeac42490a722b68f027a0c74"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2b4dfaafa18a652f6410bad2eed8c3b0"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c32108b5ef41372cc72890f7e85861f4"
  },
  {
    "url": "index.html",
    "revision": "8ac495a85145ba5efc7f7c2118db4246"
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
    "revision": "792ec75d50be1abe3c0aabd619a7c827"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "7723731bcb24b42d1ea11beab35a49e8"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "05a5bb43665e31de7e581e24ab88a133"
  },
  {
    "url": "tag/html/index.html",
    "revision": "896afedf9c28591f6c2adfaa55537669"
  },
  {
    "url": "tag/http/index.html",
    "revision": "3ee6ea678c88d75a3586b8d250a223a3"
  },
  {
    "url": "tag/index.html",
    "revision": "67648e95d14f1674211bb10d8fead4be"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "aa871d7604dc0bb104ef17e250df776f"
  },
  {
    "url": "tag/less/index.html",
    "revision": "5073a20bef926bc1824a4d8cdcbd0c5c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b458310388c0dbdc6e2e6a836c5760ec"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "f1bc176cf9d1df74541862e9d5244d2c"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "86e7c73fb709f5fa91045dfeb2d35857"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "f8ac3e91c643f8740c26c79ac18bd2db"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "80e2cfbb02326f7c97efe153319a0477"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "4af64709a10346dfa83ba9a6bc7a48e1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "c7429b5f5dff22e413f183ef5a252ab6"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "99005c68812a4af396072fac333f6b49"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "ca9faa7fc67d3de4786172b3c533f755"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "8768501a9384ae6237c421a914ba71f0"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "adff4866f2354e602793f70b477b8679"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "1397649b83cc51f6292d56dc071ef23d"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "13df8fa2f6f9d6f1b2ebcf524772f517"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "0a1f4a9596b0bc08e30a808a3821350d"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "99af4e70a5b5046456426524d1f71b82"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "4d940d5b6e3e624115affd9734570b1d"
  },
  {
    "url": "timeline/index.html",
    "revision": "9b18c3b7eeda1169c08278c8cbbf1c07"
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
