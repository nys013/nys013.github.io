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
    "revision": "9029ca1a3b88772b3d583e05be54aca3"
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
    "url": "assets/js/23.370fb9b0.js",
    "revision": "5c0b700aebe8cc3399a9320fc775368f"
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
    "url": "assets/js/27.6e450cfd.js",
    "revision": "e61ca18fd26019590cc80de251226a63"
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
    "url": "assets/js/36.95c001b1.js",
    "revision": "e125b38ab60132286693a0e1dc61ac0a"
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
    "url": "assets/js/41.4f88cf26.js",
    "revision": "d07eefcd2f0f58ddcb757f22d2a70101"
  },
  {
    "url": "assets/js/42.bbb44bda.js",
    "revision": "87167f0c9b3c2a5abdb6ae467c0b55a1"
  },
  {
    "url": "assets/js/43.3cc7c6c0.js",
    "revision": "50748c1f5a504cdd167e03eee7ec5aa9"
  },
  {
    "url": "assets/js/44.7cf50938.js",
    "revision": "3be4d94459740b60a3e24a0535917cf6"
  },
  {
    "url": "assets/js/45.4f8f68a7.js",
    "revision": "e269212b16404cdafeee31f6ef8b01fe"
  },
  {
    "url": "assets/js/46.ad5f23cd.js",
    "revision": "48e0182be395ace0806a4acd3ed0d0f0"
  },
  {
    "url": "assets/js/47.429df420.js",
    "revision": "cb679ad2f15c4aaacd5738efb0da4619"
  },
  {
    "url": "assets/js/48.8241eafa.js",
    "revision": "319de35fab17d0ef21fde395d07c9d7f"
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
    "url": "assets/js/51.daf10822.js",
    "revision": "32800592633c9e2cebd54549af0c899b"
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
    "url": "assets/js/54.cddc1629.js",
    "revision": "30c1a71e13e9cebc4137c2d1d7692d30"
  },
  {
    "url": "assets/js/55.3be4d1e0.js",
    "revision": "f626ef82225cf3f2e9906ddc35d3bbdf"
  },
  {
    "url": "assets/js/56.9566c482.js",
    "revision": "e2505d4330b06cd9b98d3c2a3aede62e"
  },
  {
    "url": "assets/js/57.be252d72.js",
    "revision": "31e91d675fe404358f1335c6484406fd"
  },
  {
    "url": "assets/js/58.f06568ac.js",
    "revision": "22d43567d95fb274cd6604e59c7bb7e6"
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
    "url": "assets/js/app.cc06706f.js",
    "revision": "148a0253aefcf5fa1307d799c6ebef98"
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
    "revision": "7a42205173049769e6bda5a680c2c881"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "ff1f7d3d175c6745417b9c72558ab764"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "67a3b6ed6fca36224d80a1169a1f7bbd"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "dbf05f10c874661e43914798662f110b"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "6e3007a6bd91d258889195ee475d436a"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "3e0f8c5b13bf479b660b7af4edf9fd71"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "d71d858a92f5dd2151dde4d399569a69"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "9e61dc6bd03619ac4aa506257a15bdc1"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "6161676e115047229827174e475b7ba2"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "204bf0c196de123faaf3da62d556a4dd"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "ee21e03e29deca5b189b30deb3b82161"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "996ae0c8dcf694e0781f88259f9b82ae"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "9e79d25e8f0889c951ea0f815df7d5e7"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "8c9908b6287b8bcf9893c4f8db8d825d"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "1b6eb66f84bb101de9ba51a5b933cc8f"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "f8c4008a7bdaeeb7603d8fdb9e619a9d"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "90ab0d7338fe1a963923c0aa35fa1297"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "217f5a897ba29633e47c521de80416ef"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "05e3a9025c4fa860a5184cd8cd8ba397"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "a8b340fdb7b8a964f6a9eb8a1eaf3b09"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "3594e6287ee3515460f666e1fa8a0770"
  },
  {
    "url": "categories/index.html",
    "revision": "d3ec4528f40e1228ccf77e69a9ab1095"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "790de7a5a7b5a4349e26e869ec48b625"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "2039bbdcd36fa7d736b5252f8002e6df"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2822a08cdadf39c150d1fd89d40d41ef"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "968ef665af71e5a791b0dd9cf639d360"
  },
  {
    "url": "index.html",
    "revision": "939efd09638118964bf9b840d50a7a5f"
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
    "revision": "1af525da671987d6a7f8c1d014106122"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "273c7204489d130c091f1f4870e5e36f"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "1a04d019a573e8e9aa1682527fd0052e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "adaa8dca03fe1708f1fb32def0325e02"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e253b38b550271d49d41b29c09018d2a"
  },
  {
    "url": "tag/index.html",
    "revision": "42eb1917bdf7bb7d2dee33d35e2c83e3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a4e4a97f517914bd57c8227463d0f691"
  },
  {
    "url": "tag/less/index.html",
    "revision": "e99e5048ed9bfba5c2e33a3b27806da0"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "34704463bef35dc312f19116bbc715bc"
  },
  {
    "url": "tag/react/index.html",
    "revision": "9fae70a7058aca56c20d8068e21548f2"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "9e38e9e8a1a2bd96deb4b4572b6c9500"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "a15d697a08736a0b9072827dca307d4d"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "a8709d2f1c8da0a22126dbb0d45c504a"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "528e6e7abcfd50a305a04a3c175c3296"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "752012191697f9d275af549acef77d92"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "79b521367e994295dfa4fcc884a68623"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "b818eee43afa96bbbc73c5ce9e9531bf"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "11a7e09b33e685aee0a242456a3fd1ae"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "f275999226c89a48e3028a6df2b6e826"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "6522a8916335c79931de18ba1135fa0e"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "ae98badfd958d4561ca9aa6c824c8e86"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "65c19dddff64237b4c72989fcb2eab51"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "98703b9c8fc295a34e4f8c2e1b3b9e05"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "9e1d72c0debf1d01915cc3670cec90f6"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "3f4f455a237e4584767725c0e69500bf"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "c408673c667198aa8c33c6c0dd7c985f"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "771dc8d22d4b944d4b377f1192916cc7"
  },
  {
    "url": "timeline/index.html",
    "revision": "1824866ca74468567b965ba74d8ae2d2"
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
