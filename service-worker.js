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
    "revision": "51862e705765740d1b700891435fc7e1"
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
    "url": "assets/js/2.cdc6a1fe.js",
    "revision": "9a7ad897dd629389578c15f9f9a37768"
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
    "url": "assets/js/23.4f04ab07.js",
    "revision": "efbe727f7516bd98eca5f9c42e4dff37"
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
    "url": "assets/js/26.186ed791.js",
    "revision": "391b0bb71414f78fa52447376ba0ae4c"
  },
  {
    "url": "assets/js/27.f46fd5e1.js",
    "revision": "2f7c1d9cd537a50a1a59fd16e4aad2dc"
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
    "url": "assets/js/3.94dd316f.js",
    "revision": "738f417f5bbeb71bf1e39114ba927b1c"
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
    "url": "assets/js/36.e34edb90.js",
    "revision": "a17e40b04f315fab6152bad8e66b07b3"
  },
  {
    "url": "assets/js/37.ae27ec76.js",
    "revision": "38b0a914236b7dd42ba21a4728d0d637"
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
    "url": "assets/js/4.e40a727f.js",
    "revision": "932ba25a2bea660f47f20a41ff8389b8"
  },
  {
    "url": "assets/js/40.0292e772.js",
    "revision": "0aec19047be3cf5a5c0c812714bade8d"
  },
  {
    "url": "assets/js/41.0ae17384.js",
    "revision": "b0b2d1ee9bbbf1073690745680907644"
  },
  {
    "url": "assets/js/42.dbddf3d1.js",
    "revision": "50707102401adfe3126b0f62ac1c0b13"
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
    "url": "assets/js/52.7ffcffde.js",
    "revision": "1493eabd1f56c08983defa12739249ba"
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
    "url": "assets/js/8.bc8a60e9.js",
    "revision": "b8d9d50a145835bffc35b1669d4bb867"
  },
  {
    "url": "assets/js/9.ee5cb31c.js",
    "revision": "c2643ffe55cadcb9c9448b62c4babff6"
  },
  {
    "url": "assets/js/app.45358505.js",
    "revision": "69d3d2e3b7a202443cf7dc5348e4995d"
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
    "revision": "44b49cde9d7c80b9636ea74625a45d7c"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "fbaca9beef4242507e797c76fca17153"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "e8bd9a6f902e84b592f3d28d47f566b3"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "0dba0bd3169e2e31461adb27739670b3"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "d213b49f6da6d093357a677a7d397034"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "3be4a358358a14792ee4f615c296df42"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "be6753f855f04899c116c5eab417008e"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "88a47df6b5a61e8a6477bb1d5e4a27c5"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "0ce3874166c92a835bcdc77cd41d6ac7"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "9eca73627320491a10b789a8fc13ce59"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "de85c50ffc9d12314e6f4f0bfdf34b22"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "ecff37af19c8686d70c83947a2b3f1a1"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "d5f0997033607b65aae8e3754c2b71ce"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "14153309a8eb2215731cb243d82f1602"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "d40b8eb639976d01a4a7426f4582da2d"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "d407f8ed16a4bad017ebd37d0ba8a4f8"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "63cbf25e550fb0d992ed0482841d110b"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "10dad6e82b255f7b59ba8db96fa7c6a3"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "8ca1d71cbd995513a6053b65fbb102b9"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "90ed7f94e8b5ff48525843930e454beb"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "c97027e76788245c613a0aa79f3cee50"
  },
  {
    "url": "categories/index.html",
    "revision": "545fcf4a3795a706015aa698b333bc00"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "90c1d053e2c82c198da836285d219783"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "12db6af1ffe925730ed70a7ea21dfdb8"
  },
  {
    "url": "categories/React/index.html",
    "revision": "1e9052bdb2920cac03e7c5059a5643f5"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "716b5b0c88efb374d32826a5973749f2"
  },
  {
    "url": "index.html",
    "revision": "4d50ff7c21d5ccf7e4463de5c6885e48"
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
    "revision": "144255de167603568ac1b9f537871630"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "f40964848e43d293441f32cbbe280287"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "521d48f8da3efaec7a360f0e83277caa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "615bb56e35adf6d5694c8d52b9d30e8c"
  },
  {
    "url": "tag/http/index.html",
    "revision": "acfbaeeaed5e409a90cc2a2e1358c889"
  },
  {
    "url": "tag/index.html",
    "revision": "83d4052d24dc6b54ad50846c6cae65f5"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "02c616b4c516f914ef416e4e8e934d8b"
  },
  {
    "url": "tag/less/index.html",
    "revision": "2bccd44a82febe1f8bcc4bc3a3bf7ca9"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "b4d13260beac7bb19bc725d929debb6b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "71743a114738fb4c4fe453e49bdee5c4"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "7045734c45bf81b2c5d0d9d297b90b9b"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "e5154dba108ac2fed44e4e2686038b27"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "70c4b57b2ddc7c547707a29837774b9f"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "886af2c077e939bdbd1681e90c5b7166"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "253e8a1952eed904a0792193e4dafaa7"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "dcb755d6c39a5e1b724eec15dc5f6f6b"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "dae5e8efe23436ea4ce9ce448e46a25c"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "94d668019f901467760fbbfeb3cd3e28"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "6362b79e688d00bacdc8eeae45ee369f"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "d1e080b4d10f11247e52bfd73bdff05f"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "59d336e6cc982ca31f511be04f948c87"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "ea5894d9fdca146c8afcf9f949e4574c"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "d0a17a7c0fed93068d8e8371939690de"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "ff12e1c6f5beb8bf8b79a5a9aebc15af"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "8e37d28b824a1583e8c5ad8fcc0c2245"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "009b0a5c471133665875469c848486a5"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "d0ba72afbb14605b9a212db712072c8c"
  },
  {
    "url": "timeline/index.html",
    "revision": "a0b0f800258466a1e6f9b0193a906762"
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
