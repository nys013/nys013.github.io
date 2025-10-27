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
    "revision": "eba6cbfe84e556a58d445f8c8ac346e3"
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
    "url": "assets/js/26.d23c1101.js",
    "revision": "f9a4ea1e44f6289714edf576f4e8042b"
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
    "url": "assets/js/40.2340b55d.js",
    "revision": "9259f9184dc2bcc6f53e1d3391a3adcc"
  },
  {
    "url": "assets/js/41.607e649d.js",
    "revision": "1551bee18965cc67c4b6f43af6524846"
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
    "url": "assets/js/44.dcdf828c.js",
    "revision": "ab48fe355c3a73c407d0181389c87438"
  },
  {
    "url": "assets/js/45.a11d9fcc.js",
    "revision": "c0ef796bed89811635003bfbfe96cf23"
  },
  {
    "url": "assets/js/46.adccf36c.js",
    "revision": "776e28d3991cecc1355566a4814bae18"
  },
  {
    "url": "assets/js/47.24ab61ce.js",
    "revision": "24464522b858d0b3e7b50b7f054d02aa"
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
    "url": "assets/js/52.7ab80a28.js",
    "revision": "53dd6dc2516415e5ff4cb83daa42514f"
  },
  {
    "url": "assets/js/53.12116cff.js",
    "revision": "c8439a1983bd62261d12d3ae556a1cef"
  },
  {
    "url": "assets/js/54.78d43ab7.js",
    "revision": "a0d1e2d93e9bf457b884ccd575a05095"
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
    "url": "assets/js/app.51db779b.js",
    "revision": "25465b609d064018b029cbc2accf31e8"
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
    "revision": "7095aa134bb348eee17bb262069e2032"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "1a4e81ea02e6713f1f92e248386a201b"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "b28137e35e760af288b79230e0012905"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "13bbac8202881092356c76dc0b7569f6"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "9a70c37a4ca83dff28e980d1d062dbc4"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "4df97f67d58cd0d8a800c38298a4e456"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "947d317b32afeb0bcea992473efb02d6"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "adf53a4ed2cb3355dbd6141f59874412"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "07cf60ddcce1930a77a6404929b76036"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "ab1bf5c72a8e955db774b16fac43165d"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "f0b13269f99826ede56b0197c962e779"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "bb4fc0d61b3c2cc42c497e2beb1c4987"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "ea4d580b4d0b9c2d383459e1a6d47a7c"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "dc414fd2d5521cdd8573e24b4cc44de9"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "455b622d5f658d14f86129707264ebad"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "04254803f1f7b0d3451db1a5db6a5d69"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "4aadc8ae4a79c6c510917913d5093885"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "89a762e6344abbbd850f8806eb9eba53"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "f49978bd659a820825f809a1171b6f66"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "9384578830c920ebd45fe00a9031aae8"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "a1b8d53d468a7d72e7912ef41a5ca9f3"
  },
  {
    "url": "categories/index.html",
    "revision": "2af164b3cd39e2e77f8b7039054b7bcb"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "7d6989805ff44f12d7508ac050bfb80c"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "85e0b2c7bf6d9af5151a9d715bf08565"
  },
  {
    "url": "categories/React/index.html",
    "revision": "c6505fc02842e917bb87ac30d379d674"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "d52755f28ce25729f1ed0d769d8bcdca"
  },
  {
    "url": "index.html",
    "revision": "dc9f3f620f3ee7897f14f1798374520b"
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
    "revision": "571791d1643048f42d4b57b8cc5d4e6c"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "ed6a0be973230e30187e04022019ca8d"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "2fa90791e5aa6c47d7d2b34de4ea4148"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b463384b2c621a2fac8021041c63415b"
  },
  {
    "url": "tag/http/index.html",
    "revision": "a42c05195cb41c21a470ffd545282dfe"
  },
  {
    "url": "tag/index.html",
    "revision": "c13e22677435d27ccaf9ff6811e085b4"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bebaeff897ca7d3f8a51149a125f6e49"
  },
  {
    "url": "tag/less/index.html",
    "revision": "4f4c6b76f36944217dc3ff02deed19d5"
  },
  {
    "url": "tag/react/index.html",
    "revision": "570ba13d80f4a882dc88a7f28fe9dfab"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "e20a5c7e4bc1ef1c2bb179e2a8e2984c"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "e2588d238776a4887be3756fd0d37a34"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "a7aac5e2b9a886ba288c5f897c33d34d"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "26a55942a04f13e90b3bcab5daeb56a3"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "185cf09449ca71539a599b55d6a6b90f"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "63ce779f7228132f01991f32804e7264"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "14158f30a2d59083384c8198b61024d9"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "375f5fddb5f94774e168bf1bedc2976a"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "b7b7e20420613b665840eb2d03ba9cd1"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "bcf84b89cf1c10136794ccfc7a3e1332"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "338c9c5a886f3395d6ba1d570d712f9a"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "53c5e45f74a9a363ba995a6f551a338e"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "a134b197ad514826de4ccfc2c0d37873"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "3c2a5b1ac0aad702800b50d2d73c4c4b"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "656783d9fc1b3d8fadb533375003fd57"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "a70dcdc27ee33869d0d7cafbc4304235"
  },
  {
    "url": "timeline/index.html",
    "revision": "d873f5fddfea071be9946a6231924754"
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
