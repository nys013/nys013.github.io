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
    "revision": "68740f0c98bbe4508848b923d9703fa8"
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
    "url": "assets/js/27.7cb4e0b9.js",
    "revision": "bb83f3593697ab6f2ec6cc5ba9148499"
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
    "url": "assets/js/41.1f779bb0.js",
    "revision": "8555e587fe3efd672bab53d3347fb40d"
  },
  {
    "url": "assets/js/42.b818045f.js",
    "revision": "38c1a5382033bb0953780819a2a27184"
  },
  {
    "url": "assets/js/43.60b2365c.js",
    "revision": "5aa676f77995b745504902d98497ee25"
  },
  {
    "url": "assets/js/44.dcdf828c.js",
    "revision": "ab48fe355c3a73c407d0181389c87438"
  },
  {
    "url": "assets/js/45.003d589b.js",
    "revision": "81ed62169ce794d396c28c328b4be679"
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
    "url": "assets/js/48.28fb2a98.js",
    "revision": "80c5a8cebbbe5d54479b9757664af8f5"
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
    "url": "assets/js/55.9ab8b563.js",
    "revision": "a2221a54e696e5e33aab751f4e9dae3a"
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
    "url": "assets/js/app.7af1a470.js",
    "revision": "6ced6e440af87df737279de6b75bc3a7"
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
    "revision": "bb1671905ddc813632cd1427ba6a85ce"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "a2f99c6b5afc859886ca43ed847e33e1"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "2b88c3414d18dd1e3177d1a4bc414329"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "c3cecc160f2db5f18a8208e644754672"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "c5aad2b7a5471692d3532ebed14924a6"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "20d3e0e27e3da5a5f6fa4088afadbc09"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "96880bb89c9639c26d737300164cd5dc"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "5498dbddfc2b4bb383dc69e1e8ceaf25"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "6119e5417d40df463f5df05c793c4716"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "e88810e9c0b92cd7159087789277b1d0"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "43681265c3fa0d4d140ddd4faf5e5a03"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "c84b6e3bdd916dc05c03ac18993e77e5"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "1f847995148765b81f95a7de7e03ed52"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "75410dcc4224bc0e0fd69b4bc6f64cbc"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "8e7b7ebcf4c0c9b490cde31c9ad7085d"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "37a3e032c1a37ff5399fd50d84760889"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "d7bfc0c421c4525bd100c5c5b3380a98"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "dc36f6f7f4ba9bd6ab6ac21ff4b82af5"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "a3b84fef61a175fdff8369bc7c647ef5"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "da38fee5775b7aea04dafe6d5a88f049"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "a96fa44f2618db63000f23de71ef9edc"
  },
  {
    "url": "categories/index.html",
    "revision": "1dba5053db89019ddecbbee35b0c885b"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "dbd293b6efad5588682af5c83d071e21"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "cbdf8343fcab4a139f3584b0cf60b446"
  },
  {
    "url": "categories/React/index.html",
    "revision": "84f7a8b1d52b1be44a89bfa77bc0cbad"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "2260364eb0e480b09b80efdd329fb7c7"
  },
  {
    "url": "index.html",
    "revision": "a8566fe99c1fd9696d8ca9cb2739586b"
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
    "revision": "f42a30992226584dff5b2e1b90010725"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "02ecf72b8fb851903a37e9da0ab18ef8"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "27fc81db452d093eed53cc0e90a53837"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a66102a2d735e0f61bdcce4ac473b201"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e79cf0d9f982584265503b68c8f65322"
  },
  {
    "url": "tag/index.html",
    "revision": "f21b288de797dce83c857f4ba1f52309"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d59661b0ecdbda39751fad9e52768914"
  },
  {
    "url": "tag/less/index.html",
    "revision": "44e6eaa94901139c0fa080c5a1dcfeca"
  },
  {
    "url": "tag/react/index.html",
    "revision": "976ec801602ce3def6400eb66777765f"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "1e11517929ae2e6f79ed97cc45e9b43b"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "da75e77a2974bc69807cd8fa949d6e00"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "16a3b227565e034dabcf38f30b5b7dc9"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "293212a3bc85b38c142f91c8753904a4"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "277f0e11046726c4c9fa91e7839e2c8a"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "8924468913ed64e215fd327a3a0d4a94"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "5c63c44bd357bff215af43dca3672cd6"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "12e13dd0aff04d537acb3a115139fea5"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "da4763f04c1b2df3fc2a71d0f63b12a7"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "16430d33d3ad566ef79d746aa2aff6ed"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "082fc9c52018e81883559dac4e3912ce"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "e6d2937eca2676c69c89142b4ed82181"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "474f16d2cdfefe39de3bf50b5148c276"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "411caa5cb41ed1127201c0e4526b9a42"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "afa80d74f35e61112209ba882a7f0511"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "57309a264c16fb8e354562ffc095a150"
  },
  {
    "url": "timeline/index.html",
    "revision": "d61332fe5b4d9f71548aee86f37bae88"
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
