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
    "revision": "0e9ca984ef50143a957dff7307b66d4a"
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
    "url": "assets/js/42.b818045f.js",
    "revision": "38c1a5382033bb0953780819a2a27184"
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
    "url": "assets/js/app.40980483.js",
    "revision": "ca2c97fbaf7c5d36e20aea5b42d8acb3"
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
    "revision": "3b850aab9bfb877efd68bac9be7a946f"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "ed08d87daf510cf379a44da0cec1fb5f"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "f2a28aae35e93d212ab2c0ede5096230"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "9118ea020ba756a56918678f7c5deec3"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "346a08d01890a71d9bc8548fca2dc428"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "55d966a755da527673989485542b7683"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "10d15be2dbcc456797300ccf611d4a5d"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "7ec5a3c8e9e0e70bafe2279b21c6fb48"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "4294020b30f26a16b240fdc7f48e94de"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "af69a88db0a9dc69ae2c672301560575"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "21ae0ba1b9b5e796690c983cf11ffe29"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "c87cba95a85e113d31ef42fce6dc82dd"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "6c28d87476fb4e01d4710389e470e40c"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "142965064fcd80890be3cd59cad7758d"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "4a203d5f6da6c4d8544801385f24b2d4"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "95edddfdb14db222fdc8f21bdc65b4d0"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "6c9f9f599bc9060111c9727fa27b081d"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "8aa538ddec5f5e6144230c96a6dc8fa2"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "412f3f8176b4ddc446360e003ca518da"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "dab9e49bff32d026617d020451168461"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "01a8387b336d22313172e654db5251d6"
  },
  {
    "url": "categories/index.html",
    "revision": "fdaee0cf1ff77bc98af63a118eebb252"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "e4a00a6bd9c2ecf21ee935f11890ffb8"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "bd240b51932d21a7ffec53a62391b876"
  },
  {
    "url": "categories/React/index.html",
    "revision": "7e95cfd35a9c7c0be312f88e27e7c6f7"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "d4ec1769dff0e866ef88ddca65b2b09b"
  },
  {
    "url": "index.html",
    "revision": "f34232dc7fa5a2bc9bba059467f7ae2d"
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
    "revision": "c9896b4c42658fb3b5c5f0e447344e55"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "b0b377def7c576070877bab10b11c2cc"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "d6efb2dbcf9c3e47547027bdb6f9ea37"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bdb0e7ef2469e5768daa93b09caefd84"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8a74c3da4589c29f14ae2c2f3de7fa0a"
  },
  {
    "url": "tag/index.html",
    "revision": "f0fe9bbaac989885cffaa82b14a0b71b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d26ca9585dc1016b4a340236ca2ad3a0"
  },
  {
    "url": "tag/less/index.html",
    "revision": "e184bfb92c2615582015c5329356f9ff"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3ff951e4492ccaa5ddcb5cc35720ba5f"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "5d148dd8f1585b098445dd356f96d14d"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "3ac5e521c51d03e7e8410868d5382ce4"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "12f11c23b2f33948df6b3fcfddffda12"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "439de8bc3926334991d32d82905a52a3"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "f12fd8c853a2893e05bbafdc302509f1"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "b2bbb72ceec0e44804d65d3875391d6c"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "3c51f0d0a8b1ec167c65698a5f527ca8"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "7ccc6e18753320e5ea5a05986383ca4a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "88d2955f3c1e5e26ff71cd56080dd690"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "181cdafe97e5d3df55168173caeef963"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "4aad1b14ae1e9f96e1ee4665db198cac"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "b6288eb074ca09d4e63bff48528c70d1"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "ba0ced2172bc25a57faed148edaec4b4"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "225d970d358aa2f066eb8a51f1f8d193"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "58edb6b457e450994063256040b396fb"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "2b994202a58eb43ccfc2adf3e5aeb248"
  },
  {
    "url": "timeline/index.html",
    "revision": "2f85d85e190b362f33a74de822b3dc40"
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
