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
    "revision": "32fc27c11edd3e28351a60aca4db734f"
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
    "url": "assets/js/24.6a0cf343.js",
    "revision": "6985e647f6398014be7f6c39e24e99de"
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
    "url": "assets/js/app.46aa16d8.js",
    "revision": "eed85904bd8258da2acdf1a7240168af"
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
    "revision": "26edaf1e44c12f08b3e83d3390a6cfdd"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "f0f43fe293ba2ecf8715114c3b1bab1f"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "8c1479772ebb588fe0536cbeceac2aec"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "9b8c7805369ba7f500f51393efdc4100"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "33382291a3a99538f1ff6bfcbc6ecbc6"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "f4370ddafd1184f96c4dd3aeb12b957c"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "3f57de33b789e2439fe9d400f73499e6"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "7cc75ed7aa50437bd8106d98dbeb3d6f"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "8cda4d451fa14d81ad5e1fb420345b79"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "7fd2817f41276a9af69ceda85eb68f10"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "b7085348fc992b839e7d2a0860fb0626"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "52e7fcebd2d5a4df826e35303ca8d431"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "8dcf7a19d3e0286e3ff40d21ad44fabb"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "e5505864f718878735868ba774098be3"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "5fe450f45311e586cd958ad32d25a547"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "e039b00d3a72fd21f73d3aa5413c4884"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "f514beb8fd0744e0646cdb2c339cd2f1"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "37230971fc227c9476da016889100014"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "596be7f021128f0136640c2db4ed3915"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "b3e6854143b686d36619a15c249f221a"
  },
  {
    "url": "categories/index.html",
    "revision": "21f3d81d5edf29878d5b7733b09901c8"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "ff5606fd55260e0dccab250333d43c3e"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "fc4a17386ae8da06e6a7253d01705571"
  },
  {
    "url": "categories/React/index.html",
    "revision": "bd2efabb23cc721864e4ca1246126813"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "685687a45bbc9c532749fe6db25d049c"
  },
  {
    "url": "index.html",
    "revision": "7982b196742c25dad94b605904a39ed0"
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
    "revision": "fa78d123186c5355cfac1ef82b97c86b"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "8f7fb3c6fd5317a7eab5fb7b2fe6d10e"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "c99e544be7198ba2b77818fb28fdcded"
  },
  {
    "url": "tag/html/index.html",
    "revision": "311cd6583419e8f54d9877dd5685655f"
  },
  {
    "url": "tag/http/index.html",
    "revision": "70cc4c45ad3d70eb8ace9f36a45417b6"
  },
  {
    "url": "tag/index.html",
    "revision": "6ef4c44d0abd8679d25724098eec6c78"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3c8adda25acf07bf4ab1a299932d0669"
  },
  {
    "url": "tag/less/index.html",
    "revision": "c477a9235df1d44695b1f316d1de51bf"
  },
  {
    "url": "tag/react/index.html",
    "revision": "521c1fc5d8406587d4de8cd087077e14"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "59e9747baead8a768dedb894da2e70a4"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "fa9f68c6f6adcef37d1009834ec84635"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "e59ab9e506df0f54b9a74538d2019837"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "0107dd421fed0a38ded11c42341ba0de"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "519d4b711eabfa092a355b55fcd0edcb"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "0f2f33760da8abfac0cabe65f6eac8f4"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "e37ee394dbfdedf0689575ffb195b08f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "e4b0a3475325c1648a3203d66f2e9151"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "6fada49d1ad188dd311f2958e7cf478a"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "dc5a343c46112d4f38c69f3581ccb0bc"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "e98a42640b2d9544e85529a75bc811d6"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "72e0882921c251e3cc9b6053094aaf7e"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "af8709a6fbccb266e595fa0c07a6d84b"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c54a434880b8a7ebb7ab883064f33812"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "790d82133175b741588917a9847d5253"
  },
  {
    "url": "timeline/index.html",
    "revision": "3015e5cccba20d1882453ab97f7c2670"
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
