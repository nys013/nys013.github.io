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
    "revision": "c59619f09126cfb0308b4cb7583744ea"
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
    "url": "assets/js/23.c5847802.js",
    "revision": "910abce0d09bfba9fef5ae63477a58f5"
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
    "url": "assets/js/27.61aee9df.js",
    "revision": "f01c9a942ae8c16c6043c9f10e21bbf8"
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
    "url": "assets/js/41.f35f5bd8.js",
    "revision": "d83823400c645cbec0964b444eaea190"
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
    "url": "assets/js/45.5c9421f5.js",
    "revision": "d2aff468679db1460f07faf9d79b8cce"
  },
  {
    "url": "assets/js/46.2271ce2f.js",
    "revision": "5c619e12213fd53615c50a678a180a07"
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
    "url": "assets/js/50.f5557d41.js",
    "revision": "e2bd04f4154f482b282feacba44a64e7"
  },
  {
    "url": "assets/js/51.846e8bda.js",
    "revision": "0070d231f6b8e0c85016fe5d6f369e1d"
  },
  {
    "url": "assets/js/52.8b0ef3bd.js",
    "revision": "6af39366be6e6d1197bbd6a7415571c5"
  },
  {
    "url": "assets/js/53.c2a1b0e1.js",
    "revision": "e39c4770ad4278e5db55e697d6b27ebe"
  },
  {
    "url": "assets/js/54.0d59fa6b.js",
    "revision": "085901a3705b5482621d9e1e19f0ce94"
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
    "url": "assets/js/app.49ae226a.js",
    "revision": "b32eb1f88f1fb7e5b2abd8ee04a6a02e"
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
    "revision": "a7c8efd75fbb8cd57e7b82fa6040d9f2"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "9a4480930f56cd00c9ef43dd43cf7aa1"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "21975293058207e722e9395a1116bff3"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "b7eeb33473eab3a0935b3e895a62d35a"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "98a935f44447164c20d18a594912226d"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "863b9d65632bfffb6a1ec4e9e6c9ecab"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "a459492739f09f676288ace4713762cb"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "bbc21e1a74f3ee375bcbb6058c64a9dd"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "eadf9265a1bc0a70c0a514cf4c122056"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "03a0b4a9f1e86aa88e0e1cbefaffb944"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "70799f44f4bc51b587db982bcac570bc"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "f3f6bfdcf97161cd888cb77392dd8a8c"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "07a1e5d11095eff3b73940c51037a192"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "6b57e46768532dcbf420b59e85aef667"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "5c23eff5a75a8749d8d034a5f278a5da"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "da2ff078d483ea47fcf0c9307e47a19e"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "0d218b354642490243a833e2fd5cce0a"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "5bf3ba89d189d26039415c80a7bf7c96"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "94e307e313d194ecb0d065d6febba344"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "cc06114d333b3d3d32df0a94f281e86c"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "c494b4bde48417a9dbf8c04bddfdae56"
  },
  {
    "url": "categories/index.html",
    "revision": "432831d1bc88f05dd4981b7324f14af8"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "1e372c36e09644cd9fb62cedd01c799f"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "9f7a71d8a305a225c9d04f42af7d2d05"
  },
  {
    "url": "categories/React/index.html",
    "revision": "6efec99b102f79c870668f74abe28986"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c6d5bf66c757f0bd4d1a4591e313cf2c"
  },
  {
    "url": "index.html",
    "revision": "0eaf74082ed067db527c629d786cb8f1"
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
    "revision": "c9e5c6fad3a95c3a8884e57b1a5b57c4"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "7b972b2b9cf8ca9dc442171f32cad533"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "ecffc650df9c83a37fa520b8986e9912"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4f05648e1996ef4fa1a918cbdf78e610"
  },
  {
    "url": "tag/http/index.html",
    "revision": "e62046f81a70b98523264621f3fd6f32"
  },
  {
    "url": "tag/index.html",
    "revision": "6d2d80605f15408c58032402ba4fa655"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "04badf89b2d514459bd1fafe4f224af5"
  },
  {
    "url": "tag/less/index.html",
    "revision": "448693ee54c0768fe62e7733a9091e93"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "9695e9c2b4bd576794d1e4d23c935229"
  },
  {
    "url": "tag/react/index.html",
    "revision": "23ac754e521dfe2ced2338375ede1a38"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "37de9efc6fc6c63627b5d5c13ffd4a74"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "d69e21fc67275e39674a4d6de7e11ebc"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "efb2497aeba2ebb709a5c2d8bd9ca742"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "05637f32ebbb1afca29696b7c45e79e0"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "0968975ea6a7c55a1d14cd45a3fb6cc6"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "777e4939d4608c39aa7457cd591f6c63"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "4937db990b6c29dbee4a3d70546fe944"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "fca85149cbbabff6017ea414390a97da"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "0d89fff9d84e0be491795d690d9f4a05"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "37e0721762ea2a1640233ae239bf37a2"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "4e124564d0b1d3aa1680dce2c27715a9"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "adae0cc37accf2be64bb39873016b7b1"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "34e4aa6be964b31e597ca96729499608"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "e7d2858138c49dbef1d18bad7ef99f44"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "4d7bd2697dbc54146b4d21925f4fe716"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ceab719d5cf7cad31af717cd0fb5d720"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "e1074e87851a57e92992f67c2cfaf2ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d5b51b1ebe0eadb1da8c07d5f1764e0"
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
