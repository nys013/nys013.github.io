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
    "revision": "66f39d34036f584520a62790d7103be0"
  },
  {
    "url": "assets/css/0.styles.7f85ec95.css",
    "revision": "e6554553a3c657a3ec61df0828c7bd3f"
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
    "url": "assets/img/1.1.4bfb1d62.png",
    "revision": "4bfb1d622dce1f657a4caaaba36addf1"
  },
  {
    "url": "assets/img/1.2.977f4b4a.png",
    "revision": "977f4b4a5d35917b9d48f04bc99c5a9a"
  },
  {
    "url": "assets/img/1.3.452bd24d.png",
    "revision": "452bd24d7143b887e3a42ec09ae191b4"
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
    "url": "assets/img/2.1.1e3c6782.png",
    "revision": "1e3c678226415fa42b44811da764961c"
  },
  {
    "url": "assets/img/2.2.1e6636a5.png",
    "revision": "1e6636a53052644d9895a590e9f4fd72"
  },
  {
    "url": "assets/img/2.3.1.662df673.png",
    "revision": "662df67320efc726c009535633db2597"
  },
  {
    "url": "assets/img/2.3.2.df431189.png",
    "revision": "df4311890936146690dcdb320be5b350"
  },
  {
    "url": "assets/img/2.4.1.c879993a.png",
    "revision": "c879993aad1ef798f51c6a367038b2dd"
  },
  {
    "url": "assets/img/2.4.2.58d8abdd.png",
    "revision": "58d8abdd8fea95059a54fc099dc3738a"
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
    "url": "assets/js/1.ab3aad20.js",
    "revision": "9e2923fa46038729848fb0a942790a5b"
  },
  {
    "url": "assets/js/10.885b57d3.js",
    "revision": "afe7528fbce2d190c781d1ede20cd023"
  },
  {
    "url": "assets/js/11.fc0b794d.js",
    "revision": "863431a46693e78725ede4b074768fdb"
  },
  {
    "url": "assets/js/14.cd4c3e65.js",
    "revision": "fdd78db06069a8cf6a1676e3e7cfa29a"
  },
  {
    "url": "assets/js/15.8bf90aed.js",
    "revision": "c6e778a402effc9e060ec3f5d0e7cd99"
  },
  {
    "url": "assets/js/16.dc3f0c6a.js",
    "revision": "e909af3d4a6ceac259d9825a15a230d9"
  },
  {
    "url": "assets/js/17.1f3b2664.js",
    "revision": "31b40bf6d2467a3fd4e59578d7b41716"
  },
  {
    "url": "assets/js/18.168aac67.js",
    "revision": "9d37c78582bfe931f601635a6a98e350"
  },
  {
    "url": "assets/js/19.6345dc49.js",
    "revision": "5d823c3ee84d168dbc0150c034406512"
  },
  {
    "url": "assets/js/2.e90597d5.js",
    "revision": "0ccee3177dd997d95425745041b94263"
  },
  {
    "url": "assets/js/20.e1aefcd9.js",
    "revision": "920cbdd94a9ffd67ab5fd72bc05cb28b"
  },
  {
    "url": "assets/js/21.85b7be0a.js",
    "revision": "256d6c8c767133ecc89c88f7f456492e"
  },
  {
    "url": "assets/js/22.04fa794f.js",
    "revision": "5b03c0a3b1541cacaa1aeabe50a223ef"
  },
  {
    "url": "assets/js/23.4b2f26a9.js",
    "revision": "5da6034d6c8a4974d805c1fb01906d0c"
  },
  {
    "url": "assets/js/24.1e70d406.js",
    "revision": "01bb8784a0c217f440acdf95a07d1ee6"
  },
  {
    "url": "assets/js/25.f07a94a6.js",
    "revision": "891b08d1ab1dacc7262fac0a98992d6e"
  },
  {
    "url": "assets/js/26.ac25dc97.js",
    "revision": "f899047f3cded9cce65dfc0dba4c8833"
  },
  {
    "url": "assets/js/27.1bd26245.js",
    "revision": "3ab0757a90b8e1d98ba670b264802845"
  },
  {
    "url": "assets/js/28.faad8ecc.js",
    "revision": "c64ebb301f78c718cdfb208e8eca9363"
  },
  {
    "url": "assets/js/29.a26d0ba3.js",
    "revision": "42e938362d3c8b3e90c9ac60d12bf648"
  },
  {
    "url": "assets/js/3.28a25cd3.js",
    "revision": "33d11913122100b19a6da3123370b8f4"
  },
  {
    "url": "assets/js/30.117e08b8.js",
    "revision": "fc75046497845448f81b68f07e672069"
  },
  {
    "url": "assets/js/31.dbd464f9.js",
    "revision": "9830cba6440ce6b6478780fcbd9f766b"
  },
  {
    "url": "assets/js/32.c7f175e6.js",
    "revision": "df5b10eed65769fe21b556ffb36a1868"
  },
  {
    "url": "assets/js/33.57f25105.js",
    "revision": "90193bf2b119302786a52e403516ceaf"
  },
  {
    "url": "assets/js/34.5c640ad0.js",
    "revision": "cb01803648ec3107bb795893f41eedf3"
  },
  {
    "url": "assets/js/35.a62d205b.js",
    "revision": "59c7e1dcd8cbe398156d29dbea66e043"
  },
  {
    "url": "assets/js/36.8f4747ef.js",
    "revision": "a39e83346c5510b50063ecf6c60ba49f"
  },
  {
    "url": "assets/js/37.976e6d81.js",
    "revision": "8c60dbc3ee54f250f46853b2c2b96f66"
  },
  {
    "url": "assets/js/38.b09a3dd1.js",
    "revision": "72ac3bcd7646c34e4fd323127f057dad"
  },
  {
    "url": "assets/js/39.a31dcdfd.js",
    "revision": "07ae7a8703c6f3d108d58adcb7b5e185"
  },
  {
    "url": "assets/js/4.3909c337.js",
    "revision": "0a662dba7e7adf67acd87c567da79201"
  },
  {
    "url": "assets/js/40.0d89958e.js",
    "revision": "07be2c994b8c29c6efbc21f5232a0c98"
  },
  {
    "url": "assets/js/41.db3dc937.js",
    "revision": "3f3640983a86e627880093355b4cab8a"
  },
  {
    "url": "assets/js/42.13ef2f71.js",
    "revision": "6ae426e2d6c2ef2ccd2c74b6430c03e4"
  },
  {
    "url": "assets/js/43.cc6f1077.js",
    "revision": "9b50f1c6284546813c215c33932e4f85"
  },
  {
    "url": "assets/js/44.fa42b651.js",
    "revision": "d49ddddfa72baf688c643012a9814680"
  },
  {
    "url": "assets/js/45.dbb7045b.js",
    "revision": "9aee54395b2ee267c775287cc6818754"
  },
  {
    "url": "assets/js/46.4e5a3f9c.js",
    "revision": "48e8f11404a7487eb08efd85710ad7f5"
  },
  {
    "url": "assets/js/47.017d0212.js",
    "revision": "b22b071439d0e2406d8de634ee58ed42"
  },
  {
    "url": "assets/js/48.82c170b7.js",
    "revision": "96a8402e47a35d05d8703cdf6b5c3a49"
  },
  {
    "url": "assets/js/49.46cb61ad.js",
    "revision": "72fbcadac6ab8bb7983ee0f70fd5e2db"
  },
  {
    "url": "assets/js/5.69dfb404.js",
    "revision": "50d4e242ac090484cd870d26125ecd72"
  },
  {
    "url": "assets/js/50.db82e5df.js",
    "revision": "ba52fdb5bc896602f7c154790447f7ca"
  },
  {
    "url": "assets/js/51.89e2af83.js",
    "revision": "f2d0cb61bc076aec7021ac970e64e26e"
  },
  {
    "url": "assets/js/52.141333f6.js",
    "revision": "5b4260b9f97d3eb42df7657a8288ed1f"
  },
  {
    "url": "assets/js/53.d82757fe.js",
    "revision": "a6eecbdaa20d393b03213158271d20bc"
  },
  {
    "url": "assets/js/54.fc97cc89.js",
    "revision": "f49329cce53a6898de187a6eae1b5966"
  },
  {
    "url": "assets/js/55.2accdeee.js",
    "revision": "96048739d3131d33162c3ed6dec193df"
  },
  {
    "url": "assets/js/56.5f83e5e9.js",
    "revision": "47412807351b1ec0fd630898cb3bc6c2"
  },
  {
    "url": "assets/js/57.6d52bc14.js",
    "revision": "0a3c41c096a9d6f021d8599c1834746c"
  },
  {
    "url": "assets/js/58.60ea2f7c.js",
    "revision": "24ffa19116c4df3792a52dcd43f82cff"
  },
  {
    "url": "assets/js/59.fb960cb3.js",
    "revision": "8b177f4942fcbc6f182741eab7e8b0a8"
  },
  {
    "url": "assets/js/6.bd57a8c8.js",
    "revision": "a3c7c5fd853cfa13eda7d2daa94bc89d"
  },
  {
    "url": "assets/js/60.d39aca7c.js",
    "revision": "de9aab2867cce9dbbdfca457b51fa327"
  },
  {
    "url": "assets/js/61.1d11c4e2.js",
    "revision": "01596018b3fe2dea48f6fb236dc94346"
  },
  {
    "url": "assets/js/62.7261e33b.js",
    "revision": "b5c1824294db30d712811cb657edacb5"
  },
  {
    "url": "assets/js/7.e616c818.js",
    "revision": "4d30b15c4510566da2ee2f3b2b774d6c"
  },
  {
    "url": "assets/js/8.4175e4ab.js",
    "revision": "96db51023fcc0ce1d50a09386eb250db"
  },
  {
    "url": "assets/js/9.736d8615.js",
    "revision": "f0899be3c3f3f7c2a7a3e0c2efd21a0f"
  },
  {
    "url": "assets/js/app.c30aad08.js",
    "revision": "2927cac1dd6c40a6d28e7843213ec7de"
  },
  {
    "url": "assets/js/vendors~docsearch.4454e11c.js",
    "revision": "113c2751e3e5670173bbc5c3bc537a77"
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
    "revision": "05c01fd3d1a17f4410c86150c2fdf746"
  },
  {
    "url": "blog/about-recursion/part-two.html",
    "revision": "f8064604b5f74d4f76d546c91ca2a047"
  },
  {
    "url": "blog/automatic-deployment/index.html",
    "revision": "0d42e6dd7e10a51bb9f86a625816c400"
  },
  {
    "url": "blog/button-replace-a/index.html",
    "revision": "3d1e87e3ef3a3dadc9434c09e11e8bf4"
  },
  {
    "url": "blog/create-new-project/index.html",
    "revision": "30d047e1012875093d3da74f01d87374"
  },
  {
    "url": "blog/decimal/index.html",
    "revision": "d3bd0ccd7ee552778761019f53c7b507"
  },
  {
    "url": "blog/echarts-in-wxapp/index.html",
    "revision": "2d428e96a20deaebe1016fa1a70a57f7"
  },
  {
    "url": "blog/harmony-v1-v2/index.html",
    "revision": "2539812fa8645db8f39ca180d754c9f9"
  },
  {
    "url": "blog/http-three-normal-question/index.html",
    "revision": "8c1c85918bab9b38dcaaab15d424fb84"
  },
  {
    "url": "blog/js-type/index.html",
    "revision": "4fddcbc047926c146db1c86eb30592df"
  },
  {
    "url": "blog/js-useful/index.html",
    "revision": "39c656c792a952d4ea26b14d1fc8fdab"
  },
  {
    "url": "blog/learn-react/part-one.html",
    "revision": "1c29581f72f59fdc2fe2b94d2c2615ef"
  },
  {
    "url": "blog/localforage/index.html",
    "revision": "11620c9d2bf191dbccb922d93edbe828"
  },
  {
    "url": "blog/my-promise/index.html",
    "revision": "b7c05de1ae1d1515c1447d159d75a815"
  },
  {
    "url": "blog/precision-loss-bug/index.html",
    "revision": "a558525719bc9ef35449e9e332d57d3e"
  },
  {
    "url": "blog/scoped-and-deep/index.html",
    "revision": "1aa2f05982a0e4e9862b7b8db4077170"
  },
  {
    "url": "blog/swagger-to-ts/index.html",
    "revision": "009b8450c0c47da074cf3510159ddc47"
  },
  {
    "url": "blog/update-vue/index.html",
    "revision": "27b2a2dae7b419a154c651f95221a9fc"
  },
  {
    "url": "blog/v-bind-in-css/index.html",
    "revision": "b90dd73575f2e572c34d50435bb7eb20"
  },
  {
    "url": "blog/vue-native-event-bind/index.html",
    "revision": "be77bef48b776c8fd436bf9d39ef27e6"
  },
  {
    "url": "blog/website-favorites/index.html",
    "revision": "1481bd07be3e6f5317614138102770b6"
  },
  {
    "url": "blog/wecom-login/index.html",
    "revision": "9dfddfae945b109d54f0fbe7acf125d4"
  },
  {
    "url": "categories/HarmonyOs/index.html",
    "revision": "6fef501290cb854ad8bdbf14a3aeb2d1"
  },
  {
    "url": "categories/Html/index.html",
    "revision": "8a315e3885ce50dfd95183efa27328b9"
  },
  {
    "url": "categories/index.html",
    "revision": "f78ea04bcfc910fcc83b0ed058551f73"
  },
  {
    "url": "categories/JS/index.html",
    "revision": "2f93f349e47068bc4fddfc6a1636cf8a"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "9dc35333a5132bf7fe2d8019472444db"
  },
  {
    "url": "categories/React/index.html",
    "revision": "e9d902b67b31ed083f184c73d05868fb"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "a654ed00481f173ea8fc6baf96c8944f"
  },
  {
    "url": "index.html",
    "revision": "76536d142022b4ac79d0dcad5265001a"
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
    "revision": "a7c3e0b5ef542d5c32fd2e27c7c3ae4c"
  },
  {
    "url": "tag/ArkTS/index.html",
    "revision": "c8b3fecbbe02586e78666f7cc47e6962"
  },
  {
    "url": "tag/HarmonyOs/index.html",
    "revision": "ad1f3bf2686f59b9151dc6af2e083cc9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1df2025d64bcfb07fb11f7c8a9468525"
  },
  {
    "url": "tag/http/index.html",
    "revision": "179e1acede9674358b22204bd1e9a43b"
  },
  {
    "url": "tag/index.html",
    "revision": "36406e3c4fedaaf54f92cc7ad1255b7e"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8068b068fbbef722d7db3e9660020d81"
  },
  {
    "url": "tag/less/index.html",
    "revision": "f28e3c9c7a2e07be97ea55b15362f571"
  },
  {
    "url": "tag/MCP/index.html",
    "revision": "098c9359ac98f1aedfcab030a2be6003"
  },
  {
    "url": "tag/react/index.html",
    "revision": "85b935999554d5f5fbfb2244e32b72b6"
  },
  {
    "url": "tag/swagger/index.html",
    "revision": "fd5823150107557b0b832e39adebaef3"
  },
  {
    "url": "tag/tailwindcss/index.html",
    "revision": "2ced79bf0a80ed88a497004ea3b01773"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "10578e14ac5bc55ba460b27069e4ccde"
  },
  {
    "url": "tag/TS/index.html",
    "revision": "57100e2236db490b4e97433bcdf32c9f"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "8f8bd7b598a630cad1a9bf19f4985555"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "d1a84cbc7a21547ebb761d9efe66b319"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "9e54751cbef182c57432ff90d32e2f89"
  },
  {
    "url": "tag/企微/index.html",
    "revision": "1f648881420ccaf211bf0b6ea4ef8ef5"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "04463a28e2fbe4ed6b13be42b2bb2403"
  },
  {
    "url": "tag/原理/index.html",
    "revision": "4fad217671364ca3344f18f115fffef0"
  },
  {
    "url": "tag/基础/index.html",
    "revision": "8b43fb7909821d09af47565c0fa324ae"
  },
  {
    "url": "tag/实际问题/index.html",
    "revision": "966037942d66f4261bffb681e30ce6ad"
  },
  {
    "url": "tag/收藏夹/index.html",
    "revision": "4fd8d6974b2a5472ecd564e44d86f77b"
  },
  {
    "url": "tag/新项目搭建/index.html",
    "revision": "f2696f8fa2afba688b174b90b237d549"
  },
  {
    "url": "tag/第三方工具库/index.html",
    "revision": "2263e9868d7e9957e49b376f7c22eaa2"
  },
  {
    "url": "tag/自动化部署/index.html",
    "revision": "a73d033c0f2f05e68433ba08add60ba7"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "ca21573ced023a80b86ad740a200ca61"
  },
  {
    "url": "tag/鸿蒙/index.html",
    "revision": "f28b9bd5842e9d95c796f383f3c1d36d"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa7209b069bcfb959d3e1af4786abbc2"
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
