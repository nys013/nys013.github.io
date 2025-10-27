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
    "revision": "865df97b7b5ee6b88e3b3161a0a4d8d5"
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
    "url": "assets/js/27.180c7207.js",
    "revision": "7215d8fd11bf76e253e0586c0d3f6c25"
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
    "url": "assets/js/42.8195e6cc.js",
    "revision": "e0e700dd2dffe4218a81aa100445868d"
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
    "url": "assets/js/app.af5b48a0.js",
    "revision": "f451ee56f0b904b4d744442bf3a10152"
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
    "revision": "214f925a086f13ed3c2c045e4c851a82"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "9e05b6747f606680e2c404b88028b926"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "e16e791d615869521e123d8cd7944a99"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "b1f161bdd50a20bab84dda6e6a30fe61"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "4edc920e98a87aacf767054ea193b8ea"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "872327674908c4eff451582514c1b4ec"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "029afe4a1499e645f2918dbf835d5c97"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "68997b1f8f5da7211a9aff6a1b5aa140"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "af9db717785b95d3857f115f5cf98248"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "188ecd55562a8c8731d13ba33671aec9"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "8053f62cdabcda7b4bf0c5e1014da939"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "61bc6b8b757ed23c59bf5a71d8760d4d"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "90392c7f121af3cc55249c90cce8cbbc"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "62ce33c577310593ef64f6c1c93c11c1"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "bcc2daa03f78055efc76c1936d61c88c"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "254a51eb16d0cd7fe6648f631c7ff646"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "228bd4b94a3f6f0612405aa52e3cf064"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "766f2be6190f5ebc37ec52da52fbc6d1"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "9527e0350f4564462f449c96522c7549"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "bc96c2209ffb0012bb3806a61e842c27"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "e0c4158ba2b4d5c82775d6b5f0f2380e"
  },
  {
    "url": "categories/index.html",
    "revision": "483dd2d377dbb20feb1ab23b96c31899"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "67c428e9ba8d18acb5f9a8df44a498fc"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "fea04c6f411f89f362c432fb203fe181"
  },
  {
    "url": "categories/React/index.html",
    "revision": "b7d523b54d75131ad1b280021ca8f256"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "e3bca0d31e2cad92c3241e96bd40d107"
  },
  {
    "url": "index.html",
    "revision": "cd13cb349faef8572be8790f8487d313"
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
    "revision": "c37489a113d5143ab4e56ba24a5139c0"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "97539141b69aaf2cbc81b90512ddb546"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "4e26208c9a78b5df74575cac070528ad"
  },
  {
    "url": "tag/html/index.html",
    "revision": "851408a6852cc25763fb75ef85215e15"
  },
  {
    "url": "tag/http/index.html",
    "revision": "584bc5ae1c5b83fba37dfc83a99273f0"
  },
  {
    "url": "tag/index.html",
    "revision": "7546cb5935b92f95e9cda120162f9e03"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c2e21607a7669650e0c73b676a13c956"
  },
  {
    "url": "tag/less/index.html",
    "revision": "6d6704025bb7cd4b38f2f9c8e97cae14"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "f18e42da3101c72d657cf6d6978b9ee1"
  },
  {
    "url": "tag/react/index.html",
    "revision": "a662a159fd23ebdd0bc5dcef7c452af2"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "11a9ca65802854b7c0ee39ad7ebee174"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "939667d8bcffddaca9db9cc28f0e4002"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "38d12b0672dc37b8e7de4ec6107a4e8f"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "01f4256b0e34e0731b579c48c0e2d918"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "39e808ecb32dc4da74978921cdfc3f61"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "379833566796390696ec22c723fcf2c9"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "160ce29587db30537e8c5d250ab1e2ca"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "bea74801181cacc2ce312646b19d33f8"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "0a4dbd3aaa2846947d0b5769b75cbb5f"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "8510c93447d3dc0e82805e1414a5850a"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "4dad5f7ce67085b8aaa450cef22d9b37"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "6d20993be86c21db2b3467f21832d2a5"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "6a5a2e2ada1476e6fc8bce0a548ebc5a"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "01dda72df29e5839e63bee46ba79c08f"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "7897f05777bfbfdb529ea66108d25b74"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "7761cd9fb87a51574d1c9d122bc7db01"
  },
  {
    "url": "timeline/index.html",
    "revision": "b73ec028f0b4c46f048a18c63b1b9fb9"
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
