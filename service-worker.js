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
    "revision": "65e06bf4dada98a8c359f03b4f89d75e"
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
    "url": "assets/js/27.7c40b348.js",
    "revision": "dc5000d869970595359ed6ea416ceade"
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
    "url": "assets/js/41.a6a0b957.js",
    "revision": "07527e72e46a367650f1faf7e54cf374"
  },
  {
    "url": "assets/js/42.d57c7d78.js",
    "revision": "b39be41e7f14c4d07599eeceff7fdd50"
  },
  {
    "url": "assets/js/43.4d096dc4.js",
    "revision": "5efae0bde8ed8cd864feb381497c85f7"
  },
  {
    "url": "assets/js/44.a2763985.js",
    "revision": "b943ada5517d4065863a957d9c2af702"
  },
  {
    "url": "assets/js/45.e11b8ea2.js",
    "revision": "cb2ff5bfe61d19ef76ccb947c96791ec"
  },
  {
    "url": "assets/js/46.8b3af143.js",
    "revision": "55b5534a6ddb58eb02545dab01fd4682"
  },
  {
    "url": "assets/js/47.5bf2cf42.js",
    "revision": "201aa1fae2c15b0c93600243f8a4e9d8"
  },
  {
    "url": "assets/js/48.401d79f5.js",
    "revision": "448c05212cb36d7362d609d75303a775"
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
    "url": "assets/js/50.31867dcb.js",
    "revision": "e5c84e74a3e0dc9e6322da68d791096d"
  },
  {
    "url": "assets/js/51.11527897.js",
    "revision": "ff7ab78e6bf76643d189db266495e001"
  },
  {
    "url": "assets/js/52.bac97043.js",
    "revision": "18afa02ada4737c2ad96bb8aefede1b9"
  },
  {
    "url": "assets/js/53.12116cff.js",
    "revision": "c8439a1983bd62261d12d3ae556a1cef"
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
    "url": "assets/js/57.65a57a88.js",
    "revision": "74aff9309c4c97db081017dffcae1c55"
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
    "url": "assets/js/app.e250c9e3.js",
    "revision": "77f97de5eb71385372056656c2c1b72a"
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
    "revision": "f0794d3a76bc7604e46a4bef421bed48"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "e8b160ca3b773a1f79177a07e0c88ca1"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "13326a40ba16337246630020b796eb34"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "d89380377003b5685b3e9748786cce79"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "70805856094d6f0afbb76ee6df7a3367"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "84b107d52cdd20be93b7923ce14545a5"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "4bf3fdbc8b60f84d404b6cea9ec5c3b8"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "c77a5d2ab9e2893290beef3f83b0f2c0"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "ab5fd644a022e7c4c40138fd12d65662"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "c517727ed5be0b8d3d3b882531fbdaef"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "cfdafd11f82d0cf9687ed8d8adcdde1d"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "8d68cb233bd7863a4a37c897a38e18a5"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "f3216199579ae2a9741a2fcb197c35ac"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "c59c751e1c13daf5648bd506275b80ea"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "a7d0a29ac87d692ac8fea9f1ccf7be00"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "0c98b4ef76915df41c078ea07b846b8e"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "ad12a83e6a6886ad6ceb74cd6a45507a"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "0a87227b1a22a6fd914754518c9ebff4"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "faaae63d0bca27695d459c08d8de9c6c"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "e3ce7ca8c211cce0b21e12daed3f1d3d"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "46affa88987ca11b1a8408dfb9a5b518"
  },
  {
    "url": "categories/index.html",
    "revision": "cba417d6a64c506d833c2c4a2795a26f"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "85e756f294786cc30378bf1e4fb0c86b"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "844aa3ea86ba15f5f5656243e874021a"
  },
  {
    "url": "categories/React/index.html",
    "revision": "1c26905c3a53d3cfc7c40909fa32db22"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "32028bb560c043e79c15976a168870c6"
  },
  {
    "url": "index.html",
    "revision": "40c49986f2fb09277554da5d528bba34"
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
    "revision": "3cd2201676d881dadce5bbf6d9d56d4c"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "822764ec56cc10eac752cae8b4622055"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "0c12b3d189c7031f5fc5875de2f83945"
  },
  {
    "url": "tag/html/index.html",
    "revision": "77ed58e4de4a11fdc8f8451bd5850678"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e66f8e6a705fab1ce96aec3b430cd12c"
  },
  {
    "url": "tag/index.html",
    "revision": "8f79a8056d6f912dda9c18549fed8a01"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "c5896a1f9d121879135598bf4d846934"
  },
  {
    "url": "tag/less/index.html",
    "revision": "54b02a4d9a2af9bb62d1fbf0dcebd510"
  },
  {
    "url": "tag/react/index.html",
    "revision": "07a14e52f2b6183ce1ab0b9b9106748b"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "81a0d2e6d1a7f325a5a13263bd4d4479"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "633c9727371b9e6c5dde6c01ffc86da1"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "66fe2c8ab3457c033b859eb589dfde3a"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "64510765842331ccab348df8698ac46c"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "d95456fe1c6d77972b3526144ac51ec4"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "ee9c677b6c5925b9a8764f3b283eaef7"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "0bc51c9d87d50d467d900a2c48939ed7"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "ee7ee9d9b60c569c9d176fff99333a8c"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bdb1a29ea71991613b5fc632841371ab"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "6aa2a5249ddc03497056d4cccf0a4ab2"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "88c1be718846f940f476c128cab25982"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "e6d29640fdc92d05f8750c651fe8736c"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "dfcd5f9e0946281553d3145135895594"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "96f11aefd2d1ad00f52967739488cf54"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "379fe74b4555c9266bd26cda63d85da4"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "63f36a6ede4d4a87c57e268d0dbd7a19"
  },
  {
    "url": "timeline/index.html",
    "revision": "900b121f595939912f69018fc26676e0"
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
