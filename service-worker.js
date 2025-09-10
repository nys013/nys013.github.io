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
    "revision": "59add508ace4d39951778f2ca25595e8"
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
    "url": "assets/js/24.70a57b9f.js",
    "revision": "aadc4fbe320ac4608b62b1a851c5748f"
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
    "url": "assets/js/54.8084ca3d.js",
    "revision": "73e3c9575af345127ad49cc8f2248578"
  },
  {
    "url": "assets/js/55.f40566e9.js",
    "revision": "b09ab36f11382a01341719f215b08c9b"
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
    "url": "assets/js/app.f7a55a6f.js",
    "revision": "aef7c0d79ffa6f84102141c31635e5be"
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
    "revision": "f34ff6bf476a5e03ca2e78dd6d9dd804"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "16381843d2d836e75a692bb292887b54"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "81a1ba3a68929e55c14b42a4d351d8a6"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "28d22f551df3900410ae5722cea65b71"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "dfcd49336db91ddf0fb1c14b55843e30"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "9891d1066c5357a4d98ff2e4a6f3a028"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "a9a5ef952b43878dc81e22c64b5c849b"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "3f5b9361dc8d5ad57e296c2ada7ea4d6"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "43a9783a3a48ab52b23129433bac4539"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "63c834fef05e9ed9e657c676b63e6e5a"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "46cf26f2c01855472894e3a28b1fc473"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "0c5b9991b64c41b70638b550c543322e"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "a80882db9e390f5e6508679c689db2be"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "e92316c9d59d13972bcb938412d49e95"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "4297f5309517a989d66539627f9667e6"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "eba315f478f64723894474612219f573"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "143cab24e72fcfe6e8e32f5b8d777cdb"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "40c538a64fdf9b5e0c417d6340e5b976"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "cb22409730a5b7688a1c31b6acac1a5a"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "be4f06ad3d3bc70d41e85f63d3ab2a66"
  },
  {
    "url": "categories/index.html",
    "revision": "9941345031430c1b73bb086bb3a8a5db"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "1a8ee7af74ab1ea3e6178f0d8fc2c19a"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "f2f8e8a85dbf6e446f5f1f98fc84292d"
  },
  {
    "url": "categories/React/index.html",
    "revision": "a0b109d302739b77b27b38967efe9094"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "b1d7fab089ebb9ad200649f37c50cd42"
  },
  {
    "url": "index.html",
    "revision": "a07fddca154dd76322d0d2da57fdbbfe"
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
    "revision": "7d45159daa23d7b9212eee6be5edc8c5"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "09bc288b3ab3e02b99e9446651462683"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "8c0639a46d2600e5d16a1ea72c143acb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2d1d6194e9b9bc6355ada441016eb386"
  },
  {
    "url": "tag/http/index.html",
    "revision": "dc1b59209f87e1dcd39df9a4d989ec56"
  },
  {
    "url": "tag/index.html",
    "revision": "c1cf729a14fc78793e6b58ba2c99405c"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a8aeba12e00a594907f2a34132c9c735"
  },
  {
    "url": "tag/less/index.html",
    "revision": "9c40b8767edab34fa37cba8cd7031ee6"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f2849e264359d3bd731fe70a7d765e6a"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "1adced038b046f5f11cee57e8df78243"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "f10aed150ef9baa3cae0fdc8bf1132b3"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "5f1adb47c914d5abca41c8867f9aa069"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "6627ed84e0bbcf70992ca591df5248aa"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "8049c06afc27b34c8f787deadf6d91f7"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "5b535135093550721a3cb424e09d25d6"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "9044132b469a1584c2c513a44762ac99"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "da3d86378538bf343fa23c3c09f683ee"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "88a8517ad006beb433c08c7495fc07ba"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "2bc5b7d11c42df354665f0254c4c61e6"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "a3ba865d28c0b360fcb626726a4a2b2c"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "d6913ff17a9db0f18786c7c7211c27ae"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "d8aa3e342df436b93c3e0ed1c3e6e3cd"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "0a404b7c96ab4f8f157a5db6f3651d18"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "851a9a65fc094673994789e6faabcba0"
  },
  {
    "url": "timeline/index.html",
    "revision": "34931a4129488fa57fe9fd9904b31029"
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
