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
    "revision": "e0c5ffcbb0bc43a507b2538fdd3a0b30"
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
    "url": "assets/js/26.920b3d38.js",
    "revision": "fe570ac894e7bc9a97aeeccfaf04270a"
  },
  {
    "url": "assets/js/27.8d5b3839.js",
    "revision": "c56e8bfba3dcf432f8427ee5e027a9bf"
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
    "url": "assets/js/40.219023f3.js",
    "revision": "b71fd6388b5774c1bbf02142a3bf0259"
  },
  {
    "url": "assets/js/41.7cffc669.js",
    "revision": "6b2c7233e527b50b5c63ee403c957d80"
  },
  {
    "url": "assets/js/42.d0d15f17.js",
    "revision": "00bbda7c0e745c5ad4284ab58d072654"
  },
  {
    "url": "assets/js/43.a4818628.js",
    "revision": "888803fc73e4fb3e9234cd6e27288ad7"
  },
  {
    "url": "assets/js/44.3dce5543.js",
    "revision": "f56986e99ecd2b33d372d66ad245f8d4"
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
    "url": "assets/js/50.f5557d41.js",
    "revision": "e2bd04f4154f482b282feacba44a64e7"
  },
  {
    "url": "assets/js/51.c109a700.js",
    "revision": "71e302378708f7beea80d5f7ce2b8a32"
  },
  {
    "url": "assets/js/52.49a0eb9a.js",
    "revision": "c4383263c6df454170171426fcb99def"
  },
  {
    "url": "assets/js/53.f3d78578.js",
    "revision": "a848dd4ecb65e3856c1757d6fd0e15f5"
  },
  {
    "url": "assets/js/54.0d59fa6b.js",
    "revision": "085901a3705b5482621d9e1e19f0ce94"
  },
  {
    "url": "assets/js/55.587bd322.js",
    "revision": "fc65292ec9b8130d69528804f16a7d0f"
  },
  {
    "url": "assets/js/56.1f93fd2f.js",
    "revision": "ac0218441c0c9204790d3db5a41eb9cd"
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
    "url": "assets/js/app.47b44ebd.js",
    "revision": "a9caa962f310a6a081e473cc2ddbe034"
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
    "revision": "ec4e045443d68a42f605674e8babffb7"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "0990a6e464443b6fd94c7176af5d37e3"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "c9f70096a4df2714f5304f7ad91aaaa1"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "600e124e88e0e02bfaeb2bf5027af004"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "5a43f677af6f26601ea657060c0fb3e7"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "2b98057a3c6969ae7a4a7616d2563149"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "8c829d9ef63fec6ee8be782da4c4cd9f"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "31bf33fe54e86303f633132d65e65776"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "2f47bf1ca641a0b7033bcd76e7ad2f38"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "cc3b1dc795a34714cb3a72e74a6d9ac9"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "06178b8e784b217a724dcb31bde78935"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "3e668fd20de5b3ee8f62600ef7c53fe9"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "a5ee7518af993e9417d3faa2d5bd9991"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "3a731a6d8aaf3a8485326aaeea800851"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "26757b5327f702e6adb6f063ef48bbf5"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "2bdff492492be1005798d662e14b52a7"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "211e16db044d98801298fbe9bb0ffe4c"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "69c0b2fa064671d144ee86175b3a221b"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "123ba02df8b80b756b21122860efc42f"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "7ffb2fb085669a74e3c1533af7ae0748"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "5394edfde6ff833ad0de67ca5a387bda"
  },
  {
    "url": "categories/index.html",
    "revision": "52478cbd8178ee8738fc8eac4088a1dc"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "e51292651316d93efba520d62442b1fe"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "9094208e73a8b34ca2657737cd0e316e"
  },
  {
    "url": "categories/React/index.html",
    "revision": "f9ddbcc48e3678e33dc017a766683432"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "e784b6dfd7bb88d891fd487c3e9c2a40"
  },
  {
    "url": "index.html",
    "revision": "c31f9787b045317dafb0ce1098615146"
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
    "revision": "4fe888b3f7264caa8b19bcca331f29e7"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "347c040164b89506da31606dadaab188"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "e6c3cbf7abd17a2b02935dd3c621fbd1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "dd4b4d1df503eb909b98a6e2f00b80c1"
  },
  {
    "url": "tag/http/index.html",
    "revision": "4eed6835f53074c0a11a315d32809240"
  },
  {
    "url": "tag/index.html",
    "revision": "bdb9a11e4fb9bf5ea27bacfd4b29fc79"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "ff80f5404e8df24edb462bb61be8094b"
  },
  {
    "url": "tag/less/index.html",
    "revision": "fdc46eb06a4fa6563490ecc7791144eb"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fe9e77c3eb9daed1272c6fc620c14030"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "c7d4fa3ec1c8764e1a76d1a56e95b5db"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "c2525087d9266eab22ef6e1298290a91"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "368a235ef424f9b8e87a3dc276145fdf"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "54e6a9383ec75ae08741af6f99e5ed49"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "2050ad41f321eb5a3b7f017c0f190b05"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "4cadd41a138472a318532e4d360fc019"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "1dc2b2db9a1668fbbaefd7d039de6ea5"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "16891ba22067cb4ab7b6d5747dbb90d2"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "913d001b93c149cf06c019174411a319"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "19908bd10e8f5535b9fad91692de4399"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "3bb837110bcdb8e15a1ee1af3a4241ca"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "a4f79d9010370c38cf49876a0f188eb8"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "0b646ba7d0349fda7f962ac044b79977"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "806f07bdb6c9d5ee6472202ced6f59c9"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "d22a88417f886c7ffa731a5af97550b6"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "a62765699c79bbe31b020a48eb8312b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "faac97385cd31a959596f3c6b36a0e26"
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
