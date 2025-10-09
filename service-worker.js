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
    "revision": "1a3e5d85df28b8a8eae977db64981841"
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
    "url": "assets/js/27.9a4c8233.js",
    "revision": "7db5bd51b7be577f2f30953c296a51d1"
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
    "url": "assets/js/45.ff2d739a.js",
    "revision": "344dfac15235a0a3b2cfb6751cf541a2"
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
    "url": "assets/js/53.12116cff.js",
    "revision": "c8439a1983bd62261d12d3ae556a1cef"
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
    "url": "assets/js/57.e9d19892.js",
    "revision": "1eb772623dcc6b26427e5e1f4dfb015e"
  },
  {
    "url": "assets/js/58.fc269ea7.js",
    "revision": "6b213a4162783284061dc09b98cce7df"
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
    "url": "assets/js/app.f0a873d1.js",
    "revision": "23ecc7a3bff9bc848537065d7a123fd1"
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
    "revision": "17a000fa730a2ab301691043f4230cd2"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "306d69855cdff4dd748d4e392e770833"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "e1dc70c22c33d1a68e6d03afda8ea8b8"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "ee95027656b015c932ab1047b11e3725"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "dfd4cac1c127139a8527bd166b3c2fb6"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "37353250072ba90b288fdc8185335b30"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "4d88e1212ff7cf833590eb1bdbfbbb9e"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "76424c30d674743920f76e8efdaaa92b"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "d068b5f01a80f29958aec12b4dcefafc"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "32504bea66e791213d9181a3734a6d59"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "e69949052302e8fe47e28311d7dd6e01"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "a5a05adf6cdfda751e32183e734a6d25"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "04ce788ca05eab3b28a7d45ee85d5fa8"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "68a399ba32f1ee60f31c1bd7bfda0634"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "54918187c28fef0b3c49f59453b65230"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "f22519ff5ac57e472252f4fa74e51bd3"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "c7cd242d7013b01c28cb7853a2ca0f7d"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "a8093e458ad08447eae83b6499557b4b"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "50fea66572984342dc7fe13d46c51562"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "99d8409eaee00b061b543b83e9a2d24b"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "33679a130d76c3918531716e0a975643"
  },
  {
    "url": "categories/index.html",
    "revision": "7fc45d694e1c4cbaf53132c866b8aa86"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "65000b0024c62a85adeec086e91ca2d8"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "f1f8a7fbdc2815b0ad70c2bf6fd90ecb"
  },
  {
    "url": "categories/React/index.html",
    "revision": "27ade8fe10758de3c7f0329277fec3b2"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "2df7bb97a2314fb909cdf9acd4e53c1f"
  },
  {
    "url": "index.html",
    "revision": "89aa63e99ab521c6df2c68d09f0bb4e4"
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
    "revision": "8dc01b8cfa6cca07299197cc575eb045"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "d54d92089c6cdd18bef4d07ac23200f8"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "5b3624c9960461827f8ac8757e643610"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b2c48813b79404c91eb887cbeeb62b3b"
  },
  {
    "url": "tag/http/index.html",
    "revision": "28eb29924ee4578d767276f6a9173312"
  },
  {
    "url": "tag/index.html",
    "revision": "539db7fc8fb99b817ae349d31affcb43"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8098c6077fb6f4a5e7a625fdd535d040"
  },
  {
    "url": "tag/less/index.html",
    "revision": "7f1ec7f7c809ebd2a59cf0af1f734c23"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8569343d7bbff8eb32d6047c235f608c"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "73ac119b9cbc1ee3692f00ac9225b7a5"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "13bcf85b96df773060854e64b73eec31"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "e78d466f95a89273c43cb6984ea05497"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "26d658e5da7e8bb04bd0bc9a71de9be5"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "0aaf64070c93c85db70372f1d7a3fff4"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "808bcee0ba47d1dd5b5d896694280562"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "009ed658d03aee84aaeb278fb6db1a6e"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "5b034fd7d493846e4007bc2e2bca90ee"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "bb3931d5ec8c4f891ab9a73a654c8d93"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "8b91302ae65133e06e4f44cde547d05c"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "3d8eb4263dd2688597dc9b634744942b"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "3e5609b34e9b7f2e9fef729e6dadb9b0"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "ae2d1726762a7d4503fdcdfaeab2831f"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "0b04ba7ee2e42689bac0976e4ea54ae1"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "b405e575883c026da174b59cfe8147da"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "4ec213167349064fa141a745cb3507ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "ddceb575ae71e98cc5b1aa3536aa7a95"
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
