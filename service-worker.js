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
    "revision": "e64bd250de85950d2d1fc04587791a9d"
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
    "url": "assets/js/10.9175d1ef.js",
    "revision": "cbb2703bb8cf298686685bc8ecbb30fb"
  },
  {
    "url": "assets/js/11.cc156b87.js",
    "revision": "55e51b7f6f820d43027025dde573191f"
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
    "url": "assets/js/16.6d23a915.js",
    "revision": "d914fb9bb63735d61885ce8922c6c1c0"
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
    "url": "assets/js/2.e60e0266.js",
    "revision": "054c96262d55d084ad18c794a5cc0d79"
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
    "url": "assets/js/24.7cc0202e.js",
    "revision": "115d3c6fab97fa74fff59fba43b20d05"
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
    "url": "assets/js/27.f3358f17.js",
    "revision": "8e98a25ddf595353d81ce4c28bdfb463"
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
    "url": "assets/js/3.0eb42305.js",
    "revision": "f8824357c050591c34ff3049adf5e764"
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
    "url": "assets/js/36.dbff7d73.js",
    "revision": "c9f78660e830774e2f7ee887696aa8c2"
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
    "url": "assets/js/4.e40a727f.js",
    "revision": "932ba25a2bea660f47f20a41ff8389b8"
  },
  {
    "url": "assets/js/40.7fb3821f.js",
    "revision": "5f41e328634be44778bbdd5e2aa0523e"
  },
  {
    "url": "assets/js/41.14542d9a.js",
    "revision": "2d5b4a9219518ba4709733ff004e9d60"
  },
  {
    "url": "assets/js/42.0cd3fffd.js",
    "revision": "80afeb07f563ec88d5db10f3d54f42c2"
  },
  {
    "url": "assets/js/43.778bfc34.js",
    "revision": "82bed3a6a0a0e6d4b18c195857e3b5a7"
  },
  {
    "url": "assets/js/44.9f0138f2.js",
    "revision": "cb9aebc640ea4839abc0a6de4aef1ec9"
  },
  {
    "url": "assets/js/45.ebf5d140.js",
    "revision": "5ecca966cf89e78d772f970891948657"
  },
  {
    "url": "assets/js/46.b441591c.js",
    "revision": "886e42bedc2e434d5cbd379dfb843bf9"
  },
  {
    "url": "assets/js/47.97039dc9.js",
    "revision": "42f85c03d4a8589649fb0594d021ec57"
  },
  {
    "url": "assets/js/48.716dcf71.js",
    "revision": "de2b55f05c8f2f74f3650337a0a17f9b"
  },
  {
    "url": "assets/js/49.d4ee91e2.js",
    "revision": "02d082f69d0b1121c84fb0b77643253d"
  },
  {
    "url": "assets/js/5.4abe3bd5.js",
    "revision": "3c546090ea2796531b109c77fda44138"
  },
  {
    "url": "assets/js/50.4b8fdc0c.js",
    "revision": "fbe10e0e79b622b61d642c517e353c67"
  },
  {
    "url": "assets/js/51.fadf8d08.js",
    "revision": "2f20c01afd94e3f43d5882d956cccda7"
  },
  {
    "url": "assets/js/52.8336b626.js",
    "revision": "2d08f0700fee93fcc3434e064eaa83f6"
  },
  {
    "url": "assets/js/53.3934e1cc.js",
    "revision": "e527d02a76f780f75ec6f1a9b663999a"
  },
  {
    "url": "assets/js/54.9fecc70a.js",
    "revision": "34df1f5ea31f4a92e674bb5f0d4d3e01"
  },
  {
    "url": "assets/js/55.ae6af751.js",
    "revision": "ece04501ad869a6a378129cd7b4480fa"
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
    "url": "assets/js/59.f4126155.js",
    "revision": "eebbb384687fc7e434995a86a66cc909"
  },
  {
    "url": "assets/js/6.7f82acf4.js",
    "revision": "687f186c97f98d8f8af6717bdc07412a"
  },
  {
    "url": "assets/js/7.9efd523b.js",
    "revision": "c4824c30e7ca273ccd9bdfbc19dde2b4"
  },
  {
    "url": "assets/js/8.de2df9e6.js",
    "revision": "8f3c276543899fd7da3944f8239bc2e9"
  },
  {
    "url": "assets/js/9.ee5cb31c.js",
    "revision": "c2643ffe55cadcb9c9448b62c4babff6"
  },
  {
    "url": "assets/js/app.a3c02916.js",
    "revision": "8ec015be403c2d5e36060592a33398e2"
  },
  {
    "url": "assets/js/vendors~docsearch.0c94420d.js",
    "revision": "96b2537d8f084618eb70e9d8f984a2c5"
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
    "revision": "14c5abb0948694ca9dd8edee0bddd171"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "146782c0ac922c6120329f6ad9649655"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "f80e2b259d5b1a8585dc28614f87f94c"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "58d03cabdaea33c144e6ce4738738f53"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "031360396f11eef7324012e10271b3e8"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "7f9eeb374cf9b13f63fb368670a0ce78"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "4baae74e24e685547d5e5bd0e46d06b9"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "f659c5acac4c36176303382dc8b8597c"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "9ba9c615c70d436a4f21a9f4f67dcd49"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "84fbe10af9d37327b2fc017b4915a466"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "fe1d09a73da5e3dfc3682af13d9492ee"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "01c31cfc1de9a8f354381aa2a354fbc9"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "87ceda8ce64fa697dd93c820736d2b78"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "83eeffe5e237cc24aa01bb6cb1c541d8"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "42218d7c3e8bd1b23a99f4481c16014f"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "e038246cb6a00aae8c1571c1d29150fc"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "7ff0b153eb1c19b9936e28d01b7b4c82"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "3d3cda838da8aa80f3f8afb51ba797b4"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "c0be9982e660edf770dd23e2873ea844"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "9da7202810d27cde819864a024043beb"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "da08f49b83bb4f0000ede90c6d419cd3"
  },
  {
    "url": "categories/index.html",
    "revision": "39bb44d4ea886dcbc3ddbf8b70ed2b7a"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "4d65c8800bea2fb55b50f630ce7bedf5"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "cfab7c2c148abd35ac9b03d311549222"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2bc857edfa447551b53610aa69dc04ce"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "0f4c9d5853ca18343af425e49dbe8128"
  },
  {
    "url": "index.html",
    "revision": "789f4ef335b2206bcc95cfeffb06f352"
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
    "revision": "2111970fce7169b33978dc381cc08569"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "1bf11c1440d3e9a054a43c864d08ed68"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "094951d1e22fe529b4b70960b040bbea"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ecda7fd00c09d0fd7bd79190a52abc72"
  },
  {
    "url": "tag/http/index.html",
    "revision": "504fb433c76169c057f477b0bde083b2"
  },
  {
    "url": "tag/index.html",
    "revision": "de600a41d9b222e3062ba0dffc7f89fd"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b015d53861d1c65d08f22f805810f961"
  },
  {
    "url": "tag/less/index.html",
    "revision": "261450cf26e002a83d2c5fd9c4f993b5"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6e5518efff964c94654463b99fc2f84c"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "0f16aba31fea5493ff5160813f05ec19"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "61642b5899163172d9f122d1985c263a"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "1a4b72d52d2d682820e29a0862452a65"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "17446711301039462a583b990a88f6a9"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "223c3eb69c0d6813cd2a3326e4874612"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "c88c9df64595785749caaab4fe0ff0f0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "ef65bef9ee2f04b3e4dbd433e810ee91"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "ea1b28a7f398ab0c9669ff3b99018b1a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "83cc1ecdeb570eb6e76d766f5358e10d"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "8a118ae0ca6a027158553704637fa815"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "e06835852a9b5e3e859ef405495e58a8"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "287d7ca24f9943df4caa1cc6767d2689"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "6dd7ee8713719b2f4337d1dbd0a17778"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "109e30997405e0da5f5f663d3c217881"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "9fcee66f6c0672a0a555d4cc47045404"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "2a94871329ca16e5f8244852068f4789"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b72b76ee9a0ec4f8650e69b011385b0"
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
