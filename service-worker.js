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
    "revision": "9c9c4ce1d13be1c1f6feae8c9ab704fe"
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
    "url": "assets/img/10.7daffe4c.png",
    "revision": "7daffe4c4243d4173e8edcd58d38532e"
  },
  {
    "url": "assets/img/11.688a0a58.png",
    "revision": "688a0a5821e1c6a7f58079e2b144500c"
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
    "url": "assets/img/3.adc16344.png",
    "revision": "adc163449fc17f3bf8013615401941e7"
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
    "url": "assets/js/1.5c58c138.js",
    "revision": "70f561917adf3034c9054c8cf79f5fee"
  },
  {
    "url": "assets/js/10.f2120d7d.js",
    "revision": "8f15f4895fbf443c15d4d38b44863a90"
  },
  {
    "url": "assets/js/11.853d4974.js",
    "revision": "3a21e787c4eb04c02212a6ee39d4eadf"
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
    "url": "assets/js/16.e47ec676.js",
    "revision": "65497d50602f10df09b0f654c28ee535"
  },
  {
    "url": "assets/js/17.4f713058.js",
    "revision": "a7b64efc952e4a24c03ce695726f1ed4"
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
    "url": "assets/js/2.36cd1b33.js",
    "revision": "1c4674e5cc26d83593bbe8257a5acc46"
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
    "url": "assets/js/23.23254de3.js",
    "revision": "504521d3823d4926ea135af6f0b73a08"
  },
  {
    "url": "assets/js/24.9e5af98e.js",
    "revision": "3ee33951133417510162c5d2693c872b"
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
    "url": "assets/js/27.61aee9df.js",
    "revision": "f01c9a942ae8c16c6043c9f10e21bbf8"
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
    "url": "assets/js/3.1afed4f6.js",
    "revision": "7e127c36a81eaaa9df190baf1c5d5cba"
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
    "url": "assets/js/36.b73bdae7.js",
    "revision": "d2fbe0d2384255ef715a3025c5951d1d"
  },
  {
    "url": "assets/js/37.901485c7.js",
    "revision": "6878bae1f0d20e52d8f901668c574251"
  },
  {
    "url": "assets/js/38.894ee1b3.js",
    "revision": "9eddfe1e820566680fd766af7045f7e1"
  },
  {
    "url": "assets/js/39.317f3531.js",
    "revision": "4f4133e02c666545c60bc8e7683f19c5"
  },
  {
    "url": "assets/js/4.d162b3dc.js",
    "revision": "73cd9336d82e024c1ffd02c3fcb78f96"
  },
  {
    "url": "assets/js/40.0292e772.js",
    "revision": "0aec19047be3cf5a5c0c812714bade8d"
  },
  {
    "url": "assets/js/41.f35f5bd8.js",
    "revision": "d83823400c645cbec0964b444eaea190"
  },
  {
    "url": "assets/js/42.e5d255c8.js",
    "revision": "1321a67a13bfa507c3faa4c98ce6640b"
  },
  {
    "url": "assets/js/43.ed9943f2.js",
    "revision": "65d59724207e5e0812dd1b3cda7ea6cb"
  },
  {
    "url": "assets/js/44.727f44d9.js",
    "revision": "07f9ca3d61c33d1650c92d173a840357"
  },
  {
    "url": "assets/js/45.4f8f68a7.js",
    "revision": "e269212b16404cdafeee31f6ef8b01fe"
  },
  {
    "url": "assets/js/46.4e62912f.js",
    "revision": "876501d6fcafdd1197fee43ec53ee7c4"
  },
  {
    "url": "assets/js/47.8e791173.js",
    "revision": "e39aff7f56c731ff36fbcff521850eee"
  },
  {
    "url": "assets/js/48.a1b0eb81.js",
    "revision": "342f4732cbe797c9a5fa2a1d386923f9"
  },
  {
    "url": "assets/js/49.4c049d18.js",
    "revision": "778097985381febadea67b88e18482d1"
  },
  {
    "url": "assets/js/5.89a17dd4.js",
    "revision": "b58685f65da83e44f3e4f4f641d41f94"
  },
  {
    "url": "assets/js/50.f1c69f47.js",
    "revision": "ae1214026cd58bb3ef5a9c5d16d75bf0"
  },
  {
    "url": "assets/js/51.c109a700.js",
    "revision": "71e302378708f7beea80d5f7ce2b8a32"
  },
  {
    "url": "assets/js/52.8b0ef3bd.js",
    "revision": "6af39366be6e6d1197bbd6a7415571c5"
  },
  {
    "url": "assets/js/53.deb44af2.js",
    "revision": "4916318098b40b2aa4f1592c7b618eb2"
  },
  {
    "url": "assets/js/54.9fecc70a.js",
    "revision": "34df1f5ea31f4a92e674bb5f0d4d3e01"
  },
  {
    "url": "assets/js/55.cc574ce1.js",
    "revision": "aac54ed6f70f75ea23d67b5625945390"
  },
  {
    "url": "assets/js/56.2be426d9.js",
    "revision": "33ae4e02c136e3c6f381126a03a87c27"
  },
  {
    "url": "assets/js/57.cc8a9780.js",
    "revision": "192bb11ce5f45bd02b5d79d2814a94b7"
  },
  {
    "url": "assets/js/58.4bab10ab.js",
    "revision": "c136599e504c35f56c36ca15b24e7b1a"
  },
  {
    "url": "assets/js/59.42514fbf.js",
    "revision": "a00205bae24775fb6c4cccb510a9948e"
  },
  {
    "url": "assets/js/6.ee7fc2b2.js",
    "revision": "f754cfd4c3679b5b3293343a60edc5bf"
  },
  {
    "url": "assets/js/7.2b93feae.js",
    "revision": "24bd5fbe44b0c836905d604a23c2ea1b"
  },
  {
    "url": "assets/js/8.bc8a60e9.js",
    "revision": "b8d9d50a145835bffc35b1669d4bb867"
  },
  {
    "url": "assets/js/9.2283520f.js",
    "revision": "7ae25dfea35f4a3cb0525cbae226b0ff"
  },
  {
    "url": "assets/js/app.2c37422e.js",
    "revision": "fafb939be4771780b1345ff605399e45"
  },
  {
    "url": "assets/js/vendors~docsearch.c281a80f.js",
    "revision": "65751d9c1e127bf750ce640ae6a7376b"
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
    "revision": "431d0f6f9a8c3e3fe3043698901e3382"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "1d3bf4f7cf93ac952315770546d4d84b"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "4a0547661bac9b49b542a0aa3e331bb5"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "5a07b0c7fcabbcfb70d7506ea4a416fb"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "80561fa5179acec866c5dd7b5ae2582a"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "3507ed47642a73214f08bae1aaaf6be2"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "d89d8c637c0ab5e2d4393f9daa97bf7c"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "86f24ea1f0d2b3be3ed8de91125c84b0"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "33a54f0e7bc60c2c66ed474367338c79"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "31556472ec7eaae8317443878de8d3fa"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "7133fa72c8e66b124ccb8c662c8bdc00"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "e43536653fbb8173e66268d5dc270303"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "7d9a4d4d65420929a0eebd5437f8b617"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "bd6d1b67853786e14cf49f9a5c539ca2"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "ab1c50696e2ac71e0f3b0dcdbf438beb"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "f7d2b893ac89e181e99390d436833280"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "c6b1af09998f208fc77b8f1d08eeeb50"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "13817bf7f811fda678c1ea40b6286f2a"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "1d9694cd3c8535dc948d082768adbfc0"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "a68a8282c3911f059cdf2390dce2174c"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "cc441de3d8d6a95dc2293e75af62f9d0"
  },
  {
    "url": "categories/index.html",
    "revision": "b2ae7eb50656019f4dbe9b2854b0a0f3"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "d9b8f05ff5d99b7e5640b08c01bc14aa"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "9044f12ac7a8e076a0edc00a0d030f9c"
  },
  {
    "url": "categories/React/index.html",
    "revision": "c9e25860e63429ae7997d25b2e13efc9"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c8141a8840c713806e1fdbd41903223e"
  },
  {
    "url": "index.html",
    "revision": "3c83cf4eac8c335f2a0b61d757c01ec2"
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
    "revision": "f61be2b98011ec65606d9ec635d92ce2"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "83dd435aa3bb790c2b3ba2e695108648"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "810901082a6a688643528c38adc8b836"
  },
  {
    "url": "tag/html/index.html",
    "revision": "95d05b4fd29933e40a5f461d94c733fd"
  },
  {
    "url": "tag/http/index.html",
    "revision": "59ef68a3b1c5a787749aeb6ad05f9ccc"
  },
  {
    "url": "tag/index.html",
    "revision": "d5717b1fb0516c3107e0da7516161231"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "21d26c46fa5100e144cc1f853fa21b60"
  },
  {
    "url": "tag/less/index.html",
    "revision": "bb1bad5735ce8c4bbacfe3235e460c53"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "6036e49f8d89ac3114866bd8d7500b31"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d794f499e781f1baa59a939d84792416"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "1c1513299649f262c4f96f6087f86bde"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "f5e935748b828eca6867bf04e8d2c31f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "aadb0d75c38dd6da52bec14249045989"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "6abbc9ac52fe747d49320b96fb2eecd0"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "ec95927961c4d87bae375df6328848de"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "9ac23ca93fe7237c4051d27c1f8584ba"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "054c1e62cf4e567e23154525f66f76fd"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "da7da558017223b9289f47e125cb0cae"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "29fd6ad75fbddf5de429383d48906bf1"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "5af3434d2af71ac5ab10a7ef88fdc36f"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "36d5ca0bee3952b4af563d69cd6b9c68"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "3b4a3a9ada863f4189a7a58ef0ee16c9"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "adda83d9023dbdc90ffb2958d02544bd"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "9961b8ea5414862d86518f1d22d1abe1"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "6c792f477fdf537ba4900442cab9fee9"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "38247d15607dd356ac2e279f1256ec69"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "0b3f8cd51a000e9e2ea9a50e75188da4"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a9bd6cdab0bf17208df22c7b8f6fa61"
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
