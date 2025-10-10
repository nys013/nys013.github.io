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
    "revision": "b04a9a9d0598b568a679a4226a07d48b"
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
    "url": "assets/js/27.95c7a12d.js",
    "revision": "6111f57fbe9c1fe80d33d1a9379b0c52"
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
    "url": "assets/js/42.d57c7d78.js",
    "revision": "b39be41e7f14c4d07599eeceff7fdd50"
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
    "url": "assets/js/48.113482b2.js",
    "revision": "347a66b08339eed3cc19fef2caedba8b"
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
    "url": "assets/js/52.5dc5c14b.js",
    "revision": "0fe5fd0dbd54a80b424c71f87c55f9c3"
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
    "url": "assets/js/app.31ddafb4.js",
    "revision": "e0e2ba9f92dd62929dd9bb19c9665e1f"
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
    "revision": "a448de4bf7bed2fa4ce49e5a0105ecd7"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "4ec5073b196673cce211274b785e23c2"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "597226c15bbb05597adb458e13d57fbf"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "e272b84fad569cc8023eff1e5ebcfbc0"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "34e56cbdac4a883e57ad347ff664209e"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "583919e8194d040f99238e6288ca2dee"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "220e583314c2639e75c42ba0c706e77c"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "56b414f7fbe2bdfbb58d196c57b1ff95"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "675ee7e53436fe02693455f0fec651ca"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "945a9c92da6c2ac5060e89181a914062"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "bac3132ecec40d72dfa58f0fea026eaa"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "f673aaa93aa72be7e64aae398b53fa07"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "3afbba9d4eb274bdb252d1581d625fc0"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "8a11ae2e8e83df8503d5a28dd95d5bdc"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "eead15e96c59df5a3c22f4c70b81281a"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "533e89d3d4337c2546c65329a9a2a765"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "90989e28d3843406ef33dbab6d8b60fc"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "e1b631f40dafe86f1520f64cd0f68c98"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "45c6536108bf154210eb1e591ce49f9a"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "1830c0df1a9476db4e5f362b9e7331ed"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "16b5d9be5de42982953e08063e5609b8"
  },
  {
    "url": "categories/index.html",
    "revision": "f4da245e00908b54d0f015605654994a"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "86d13dcbc4f19f199260aff462ec1e70"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "8674f96ebda69110decc9ac5a858399c"
  },
  {
    "url": "categories/React/index.html",
    "revision": "179687e0978e3a3210d728c5390d6109"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "d09c30c6ac39d7fbbb88604f654385ed"
  },
  {
    "url": "index.html",
    "revision": "0625e5998545b68320faf5e205386c27"
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
    "revision": "bcc57c5acf1fa4d42004035beb2feb42"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "1eedd63bf8dfc29abd9fad23678a5fc7"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "c6e5a9df61bc9920ea3d61b660676388"
  },
  {
    "url": "tag/html/index.html",
    "revision": "df175919c0b71053daf68dbcc6ef62d7"
  },
  {
    "url": "tag/http/index.html",
    "revision": "f3d1ffb9a399d5426c25c737c6fcc721"
  },
  {
    "url": "tag/index.html",
    "revision": "93ee3d0d7dd6b06b79d63319b8e897db"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "fc49498dfce9fe0a6c715ad3da2b5c13"
  },
  {
    "url": "tag/less/index.html",
    "revision": "72141033b76dc7df6d0048c41c2f9388"
  },
  {
    "url": "tag/react/index.html",
    "revision": "29ef6c05b7699fdb4207010cb9b4026a"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "cecfefce63746bd163f4c3e3ae2b7be6"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "c89105b92855138250fbf265a1f46c80"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "9e854ee69cea1f3b0df62ef027decf7e"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "c840ba328a1b16fc92daef32dc22ce47"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "ab9131393c8b4b0b2b03f2dfecf1065b"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "20d7da99b1cd6c1cb9666abda2b74549"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "a60e41bef4e08d71865ad0672d6d47d8"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "7356ad4a174b2ac3101b76522a65a1d3"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "548763e812595bd1b58f92f4f0f682d2"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "dc577dafba96005b139499099b80be19"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "2d618b2ab0c7beec07925510387ccd03"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "06cdd032afa022d7ca75b99024fe6693"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "4ce61cb31549faea60c849cb7f5249f5"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "9bd74efd150ca9c8fd020b2397604d3a"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "622d3269a651b93f46deac433f04514e"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "fa00254f577b919bcd37018c94d17877"
  },
  {
    "url": "timeline/index.html",
    "revision": "5be11c5d93f4e50f3c56e62468629b71"
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
