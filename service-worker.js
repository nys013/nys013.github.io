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
    "revision": "c9020325db331be1d4a869c846bb7f58"
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
    "url": "assets/img/2.0247d3b3.png",
    "revision": "0247d3b3d7fe4da230481d30ea57ea0f"
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
    "url": "assets/js/10.959b2732.js",
    "revision": "8958554f46258a5e7cb4842e3246dcbb"
  },
  {
    "url": "assets/js/11.a9601a55.js",
    "revision": "0e27677e13c9272068c785dca2cf0ec9"
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
    "url": "assets/js/16.34bf58ae.js",
    "revision": "d2d98dd910744dee8932204f3ae1dfad"
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
    "url": "assets/js/2.c1d82861.js",
    "revision": "507b841cbac8af6691fa0aaf305394e1"
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
    "url": "assets/js/24.3e9b8e82.js",
    "revision": "ea98a68de67b9eec8e52b16fe37a8b08"
  },
  {
    "url": "assets/js/25.ded36434.js",
    "revision": "4462a703b1fa5675e29e17e68f4c70c4"
  },
  {
    "url": "assets/js/26.5290a49d.js",
    "revision": "df81a5417218e084dda0bcb6648cc866"
  },
  {
    "url": "assets/js/27.8d5b3839.js",
    "revision": "c56e8bfba3dcf432f8427ee5e027a9bf"
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
    "url": "assets/js/3.aa3c5688.js",
    "revision": "6d26e6edf2cfca899a22dd9c2b02d044"
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
    "url": "assets/js/36.1599787c.js",
    "revision": "0898ab377a18f49f64fb2b1ea88c103e"
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
    "url": "assets/js/4.444cc811.js",
    "revision": "be50b599a1326f19555742a98c3f8142"
  },
  {
    "url": "assets/js/40.2340b55d.js",
    "revision": "9259f9184dc2bcc6f53e1d3391a3adcc"
  },
  {
    "url": "assets/js/41.7cffc669.js",
    "revision": "6b2c7233e527b50b5c63ee403c957d80"
  },
  {
    "url": "assets/js/42.d0d15f17.js",
    "revision": "00bbda7c0e745c5ad4284ab58d072654"
  },
  {
    "url": "assets/js/43.a4818628.js",
    "revision": "888803fc73e4fb3e9234cd6e27288ad7"
  },
  {
    "url": "assets/js/44.dcdf828c.js",
    "revision": "ab48fe355c3a73c407d0181389c87438"
  },
  {
    "url": "assets/js/45.6c127a67.js",
    "revision": "75f2e4586afc89edee99a3cf4e92c8a6"
  },
  {
    "url": "assets/js/46.02da5993.js",
    "revision": "132309ffe08b1cbaa6d2c997073dbb7b"
  },
  {
    "url": "assets/js/47.5bf2cf42.js",
    "revision": "201aa1fae2c15b0c93600243f8a4e9d8"
  },
  {
    "url": "assets/js/48.2a7bab24.js",
    "revision": "843aefebae6a1b6dcaf788ef1874197c"
  },
  {
    "url": "assets/js/49.5ee59e1b.js",
    "revision": "fa9aa1606b3d952e494feb31237d05e3"
  },
  {
    "url": "assets/js/5.a4a05c4e.js",
    "revision": "75c332ce80be1fe5d06ee10dbb45518d"
  },
  {
    "url": "assets/js/50.2eb4f0be.js",
    "revision": "3462c1a5b670b627489ac5876bacdd2b"
  },
  {
    "url": "assets/js/51.2c89bf8a.js",
    "revision": "3f9f2700d281ec4a853fae202d7f85d1"
  },
  {
    "url": "assets/js/52.9bf1d615.js",
    "revision": "cfe8de94b24bfcc18c5e1709533df77e"
  },
  {
    "url": "assets/js/53.f3d78578.js",
    "revision": "a848dd4ecb65e3856c1757d6fd0e15f5"
  },
  {
    "url": "assets/js/54.c1011f26.js",
    "revision": "2ca47c742951ab7810edd114e3e8a2fc"
  },
  {
    "url": "assets/js/55.ce74bdd6.js",
    "revision": "54c59487037c84e1419ae78d5db8ece5"
  },
  {
    "url": "assets/js/56.9bccb96b.js",
    "revision": "03e0aa44abf64b53ff4499d9b5d3bb2e"
  },
  {
    "url": "assets/js/57.132b660a.js",
    "revision": "6f54790a0d7de13f5162da2115b00d17"
  },
  {
    "url": "assets/js/58.fc269ea7.js",
    "revision": "6b213a4162783284061dc09b98cce7df"
  },
  {
    "url": "assets/js/59.65abf4be.js",
    "revision": "6df433539b17b5f5ab6cbf05f9eb8dd3"
  },
  {
    "url": "assets/js/6.05aa93da.js",
    "revision": "8926fa86ae8e5cbbe4d4ac791575f959"
  },
  {
    "url": "assets/js/7.b750f803.js",
    "revision": "f49fcc4fedb16afb138ea7ce5b274ee4"
  },
  {
    "url": "assets/js/8.de2df9e6.js",
    "revision": "8f3c276543899fd7da3944f8239bc2e9"
  },
  {
    "url": "assets/js/9.19d570e1.js",
    "revision": "d0cd0db9f7c2e63c20e4eac04b9401e5"
  },
  {
    "url": "assets/js/app.cf69f195.js",
    "revision": "343e8933db7b76c5abe4f293088eabf7"
  },
  {
    "url": "assets/js/vendors~docsearch.51cd4a88.js",
    "revision": "f215d7f8dd7da2e560de1e961f6dacac"
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
    "revision": "ad0a68889c765d1c2891b5509ef3030a"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "31e67e5d9ec090a56a6cb4ec30f7b7ab"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "54047f5ed6c13bf39ba3f320188062a5"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "1317c82b00be26565878b1a5c2ec4528"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "580840ec5ad0c18b8f3dd4fe04ee0bcf"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "77c0dd2e38fb031edda68af7a6f28e39"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "217f3198e96b47e7ede8e59cea11770b"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "9e505394165e82cf4e78f538c177e6bb"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "b87d2ae018fa6093f0717054c6533c0d"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "c48cc7b1169efddb36d5b47732e863d1"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "aa5462a1483fb21cf1c2dee55f1ca252"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "9b0c148af95856e3fe4333db0efafda2"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "e7eec4ef2d499097b346f8508b3b5d49"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "7be9f867611aa1f17d78013b6d219c85"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "45df9e808d056b34a25bd94e3b48ab14"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "3b7988453425ab7a85e656667d3ddc4a"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "6b96ce4667b4c2e30a625b2b95934565"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "683786336d5bb3c2beaab2f37d48185c"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "aa24826fa5eb68753bdc1d9c4f7f4356"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "e351eea0903641d72caf7c79e1fa69c5"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "fed0d237222a8e74fce722bb34346608"
  },
  {
    "url": "categories/index.html",
    "revision": "5e79df87ecddf1a6b9b323984d4cf006"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "be5dfc5e064eebcef248c601abe11344"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "778c567c9e9d227c1bc0edf194aceba7"
  },
  {
    "url": "categories/React/index.html",
    "revision": "460ce9112ea55f62c16e7d39b6be249a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c8666f971d12cce328f8ab60eebebd43"
  },
  {
    "url": "index.html",
    "revision": "572aa65a051567edf1a4d333c01a05fa"
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
    "revision": "d976859ffc24846c3a3ac60abcfa9f73"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "c99a74ad6bdfe334ac46a60811f6f598"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "654a8e7c09b01ecf35f9dc8535a3c0ca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "540f14507b9491863f8a288ad040719d"
  },
  {
    "url": "tag/http/index.html",
    "revision": "30f4115164e14755922ff15574aae5f7"
  },
  {
    "url": "tag/index.html",
    "revision": "6b8d046865e46f19bb1b642d0cdf6afd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ea22439664f40054a647a0371522293e"
  },
  {
    "url": "tag/less/index.html",
    "revision": "f07adc02e734a675ce4e28abfb181b0d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "c636adecabe9911c914f88e064d9988e"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "7e1d623e65d45bf2a7b41fa84a2d291e"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "359022d4d3976e85b64bc171546a79c3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ea1f21a82648c991f19a3aec9a34e523"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "97c44f6f2a3f6ae0eabee84330152ab3"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "00875e20ad2f149ed5620b632ff60986"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "06242ff7b8d657a118b9fdaf90d22943"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "dec818963026cf8b543d6ac48f28cc52"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "3086b444c6eb9c8c39945ed4205c1cf9"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6ef0b6c0ff6902c7a3f85d18ea165e93"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "f1f9b3076221bad81df2b4d96d4c352b"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "735cbfc4bbf9b66ebecd5c7ce6cc8197"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "ec152df76ba80c7e21f145d94c2f3453"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "efa9c2424732b8f41bb68fc042d5ed8b"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "6abc17b252f74b7e5a6974988f89bd80"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c9e3743f51207e6d0a0c778b457181d2"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "0e78915ff66bbf79ad5ffcc251f5859e"
  },
  {
    "url": "timeline/index.html",
    "revision": "7938c700bfb3baf9d9ac574a96f8fa35"
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
