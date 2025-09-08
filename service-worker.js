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
    "revision": "a4efb2b5378cc95846647ba9a0d15011"
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
    "url": "assets/js/24.a51c7109.js",
    "revision": "eb9cad15613a4dee0d39ca9c468112bb"
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
    "url": "assets/js/41.7657dc51.js",
    "revision": "52deb2ec54f4c1f0c2838bb597b1b4d7"
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
    "url": "assets/js/45.a2291b4d.js",
    "revision": "5eac030239653082709944ab74b1da83"
  },
  {
    "url": "assets/js/46.1679853b.js",
    "revision": "778d016c343ae5a4e1283b7b586b017e"
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
    "url": "assets/js/49.1c7519ae.js",
    "revision": "a4f6284673b2bbb88466c88870065939"
  },
  {
    "url": "assets/js/5.bd4a311b.js",
    "revision": "a83c34f5707a3e48394d65ec530bb972"
  },
  {
    "url": "assets/js/50.68855bc1.js",
    "revision": "aaf1f7f8ba111932627cae1cb2596275"
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
    "url": "assets/js/53.ebbebe20.js",
    "revision": "eaff5eec3579c10b001125bea6b917e4"
  },
  {
    "url": "assets/js/54.26ec84ec.js",
    "revision": "9d39af182347731c63d254f3c189d13d"
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
    "url": "assets/js/app.5f3ae883.js",
    "revision": "d6b2f865ef9d77021ac9e17602e6cd86"
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
    "revision": "a0e9ec867f4fda6f135969d4ffd8d513"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "f0ca971c2937e0d81e99c51d1c1f8a3d"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "ccea76d372e7063b0c28c0a7b7717833"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "6143721163ffc6aa0e7377dd02038fd3"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "13d93197b1853abcf8b670bc29d16ff0"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "61518aac4701983e45dafde10e315324"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "589a9dea78a8783db7028a86fdfe0d44"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "b48b2f9b59117da797cb6509f39bb4c9"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "8ace499cc45fa6d7d6843c362bcaf703"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "d047a9b807255ce3b00402a914f552b6"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "a006f35ef3abaca105fe994d2e60860f"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "771de3b8256ab4a0104090e776a560fb"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "75e59b6d7b5903411ae6d4cfe6a113fe"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "627c4e3fd96a44d0c7d865daedf5d2b7"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "609e23e16ef9fa92fccf1d1e8bd794c5"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "e014412ef3a1194f9fcd0c604ac21eb8"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "dd66954f9cc546ca305c324917c9c6f8"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "9caf26a0fcc71c047c5a6d14d70c8283"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "7e72e126ba369341b9c2425f4dd2bf6b"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "0a22b4664f06d72ade9597556c5f382b"
  },
  {
    "url": "categories/index.html",
    "revision": "a654a0e9b7c26c39244b50cc4bf257ed"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "45b3125a7f90eb5734cebcbb9a317107"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "150f817598ba5e45f0656ca45284fa75"
  },
  {
    "url": "categories/React/index.html",
    "revision": "8996645d8ed123d872589661ea59cf1d"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "f20d3687ba72bad3ed5749da043d5b9d"
  },
  {
    "url": "index.html",
    "revision": "885de7f7881d6c6b9ffad75f626151d0"
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
    "revision": "a9efcec65518fd897b860d165ca97552"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "b0ca3616f45ad11c686b6af600ab2916"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "eb501e6c4f87914a01e928499413657b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "be8dbffa3daebab2b6cce93a99ce3183"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8bb71a109cc594586db0c3ce74757ff0"
  },
  {
    "url": "tag/index.html",
    "revision": "39c74123681338f2e6a4346557908ed1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "176c15c3c0fd03dba4929dd8aa5a1f54"
  },
  {
    "url": "tag/less/index.html",
    "revision": "dcfdfe2c0ed9a03180aefa8618c0e862"
  },
  {
    "url": "tag/react/index.html",
    "revision": "01bb11b46abc18510e2b3158819031e2"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "e978a0d6a0e77121aa65431cfc15f38f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "034ac4eaba67730331823fe5a5db6200"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "2fb02bb2e08124c750d7dfb5cbf9d2af"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "d7c46857a95eaf6f2ab38df7f5685bef"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "2000b45106da87bb8a387e70cb16336a"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "3818d27b5f44c1cbab3505a081ef39f4"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "967f6d50bbe47a2fcffe8a2475e96483"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "7d02f2d6a7f83c4cd70b3671a608f6c7"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "96cd1dc5ba75e8cf9c7cdb3e89caa01c"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "1dc626cf97298a95134f7b384915af8d"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "06ebe4da1210e7620c41c7fbe38e378d"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "477095441939b5755ef25262368e603a"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "bfd3b4661235e8dc0d41ca3dd3766adb"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "3a2fd79493d91fadd5d35770032fa4a2"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "421e60e65f0274590f29f981610f916c"
  },
  {
    "url": "timeline/index.html",
    "revision": "5ae235e16eafb6d21cbc6af2d25fb453"
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
