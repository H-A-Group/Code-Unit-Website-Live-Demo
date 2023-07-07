'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting..cache": "8feef7b3d3d66c3104943526e7110dc9",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "87910383bd1300beaa1969a478f34e71",
"assets/AssetManifest.json": "923c93e3d627ee7b920ce47487855a81",
"assets/assets/animation/loading.json": "aa7460ecb01c428abd264b910c802705",
"assets/assets/icons/airplane.png": "4d2304d4f4d6edeadebcc7987e3eb678",
"assets/assets/icons/better-health.png": "ba18d47a5fc08c3d2b261643b80e53a8",
"assets/assets/icons/certificate.png": "a63f8c10ef1107d8280b85f7e04d7949",
"assets/assets/icons/coding.png": "49a53b9141e042468dfc38b8ec38ef6f",
"assets/assets/icons/connection.png": "097dedbc2a62a1f26663fdbf7d489093",
"assets/assets/icons/database.png": "6899ef96c3f1ac9d0b2a9b63f51fcdbc",
"assets/assets/icons/designer.png": "1ced4ee629fa2342c943436be86117ef",
"assets/assets/icons/e-commerce.png": "49d866a61ee1fc9ac5bdec46c5ce2989",
"assets/assets/icons/homework.png": "33cfb565c62eeac5a97cce7a2a7a7982",
"assets/assets/icons/house.png": "ee78715e1f6845b99e7a396e3f9860a3",
"assets/assets/icons/logistics.png": "67b70b4ee925057756c477d5187a00fc",
"assets/assets/icons/order.png": "9bda837169e14fb9cd18a7cb316863c4",
"assets/assets/icons/problem-solve.png": "acf4e439e076b288f05195ce9de8c79d",
"assets/assets/icons/prototype.png": "1fee4a8114e415de826dc03530e76b2a",
"assets/assets/icons/requirement.png": "0c5b4bc6f58e57182a18d57d5dcf4ab5",
"assets/assets/icons/technical-support.png": "ea6c072c6ee8d0a6817670bf8afb9553",
"assets/assets/icons/virtual-space.png": "e76f117e9a2bb60b8f1ea4b492a8effc",
"assets/assets/images/data-analytics-people-working-with-business-data.jpg": "32ad836b3b734312dcc2bc0cb95ebec1",
"assets/assets/images/El-coptanThumbnail.png": "b83c1604392709750d20ad17bfadf985",
"assets/assets/images/h-logo.png": "3a971e80c5dcb22357f562a7b851fc95",
"assets/assets/images/marketing-creative-collage-with-phone-preview.png": "e26073a948f9ab23b5f6bcca56fd64aa",
"assets/assets/images/online-office.png": "deedfc2b97d5595b72c9b5602e41b32d",
"assets/assets/images/v-logo-black.png": "d4c0ff480c24626fac0e7f2ccaed6e8c",
"assets/assets/logo/h_logo.png": "47a828a9bfe9aa0b29c8165e279d2b9a",
"assets/assets/logo/v_logo.png": "47fb4112dbf4228989030fbbee10088c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d67ee94426d48b7ec560174f7997a338",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "461d68aa03521ce0a71e4d2991e310ad",
"firebase.json": "ae4a8166349ffeaa34580dbcb135b300",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1429ac2f8fd9f7d82d1822b9beae0e31",
"/": "1429ac2f8fd9f7d82d1822b9beae0e31",
"main.dart.js": "025924f318ce0776db0ce1afca1dcd1b",
"manifest.json": "f5bb7430712bd8c7b3f3c6045a0bf747",
"node_modules/data-uri-to-buffer/dist/index.d.ts": "80ac51df5a013be4129f568ffdb0c49b",
"node_modules/data-uri-to-buffer/dist/index.js": "572f42e81e0b5dd28141bdb3ecfcfd77",
"node_modules/data-uri-to-buffer/dist/index.js.map": "44e16db5b1218d6b64415d026ab5f198",
"node_modules/data-uri-to-buffer/package.json": "d54396dad978e9ece91bd343c71ac707",
"node_modules/data-uri-to-buffer/README.md": "a9ad4004622f234abbea6fffde1425e9",
"node_modules/data-uri-to-buffer/src/index.ts": "60358b59e1abfa377e8992d978dd6f7e",
"node_modules/fetch-blob/file.d.ts": "264827be212ef8853ac7bb753e62721a",
"node_modules/fetch-blob/file.js": "12eb6a49de484492d33b4e3fcbe747be",
"node_modules/fetch-blob/from.d.ts": "297875e065400adbaa84fe9f9ffba501",
"node_modules/fetch-blob/from.js": "fc3f45a35029e11179af191208bcdf4d",
"node_modules/fetch-blob/index.d.ts": "7a12f7b715d0dde68f51b7ee6571b593",
"node_modules/fetch-blob/index.js": "2533e2b627e1f8827ab321baf3af4031",
"node_modules/fetch-blob/LICENSE": "db6bf2cba86c6207f4c83860e373aba1",
"node_modules/fetch-blob/package.json": "fe91816a0727c37a54d126a7ccc50c4a",
"node_modules/fetch-blob/README.md": "1a35b295f1ab52e59f8d9a19e478e1fd",
"node_modules/fetch-blob/streams.cjs": "f551fd7a0f253dcb06638e2471f0c695",
"node_modules/formdata-polyfill/esm.min.d.ts": "e9d1d6fa34cabec87fa37880606b1b8a",
"node_modules/formdata-polyfill/esm.min.js": "d7454631e5819e401f51e4b61568a62d",
"node_modules/formdata-polyfill/formdata-to-blob.js": "d6d4e22be3ec94310488b2a6402d1591",
"node_modules/formdata-polyfill/FormData.js": "537caab6cc6813444fd5330ad00a3293",
"node_modules/formdata-polyfill/formdata.min.js": "27705daa83ba8081977f472e3df3c8e3",
"node_modules/formdata-polyfill/LICENSE": "dfdf37436d551c3737dae60778380106",
"node_modules/formdata-polyfill/package.json": "fd5473c20e8a66152287840324704cd8",
"node_modules/formdata-polyfill/README.md": "e443e9e7cc9d8f8bb04ff0f517585665",
"node_modules/node-domexception/.history/index_20210527203842.js": "d41d8cd98f00b204e9800998ecf8427e",
"node_modules/node-domexception/.history/index_20210527203947.js": "b12b646f895a1beaa1516e5215875e59",
"node_modules/node-domexception/.history/index_20210527204259.js": "2c47460c445f1b4351c49026145201da",
"node_modules/node-domexception/.history/index_20210527204418.js": "6bfbb36e5545c91b26a483332c72a79b",
"node_modules/node-domexception/.history/index_20210527204756.js": "b9ed9b7f7704e1a640fc8240d404bf7b",
"node_modules/node-domexception/.history/index_20210527204833.js": "5dce3460b2a3ad9d3aaf5ad0afa03b19",
"node_modules/node-domexception/.history/index_20210527211208.js": "b2e0d65b2e54e2f1abe96110b0288297",
"node_modules/node-domexception/.history/index_20210527211248.js": "ca5402b014973b0070538ce917492b55",
"node_modules/node-domexception/.history/index_20210527212722.js": "2bc05f6a11ae7d2a6aa7785893cf14eb",
"node_modules/node-domexception/.history/index_20210527212731.js": "fe16ccb2d01c720bdb739fa9544e5beb",
"node_modules/node-domexception/.history/index_20210527212746.js": "ca5402b014973b0070538ce917492b55",
"node_modules/node-domexception/.history/index_20210527212900.js": "02d3610e54d6b1713cf70291672d9a4e",
"node_modules/node-domexception/.history/index_20210527213022.js": "b2154ca6de1b3fdb696e0f175678cada",
"node_modules/node-domexception/.history/index_20210527213822.js": "326dc688d2f294ca3b11a349d9361197",
"node_modules/node-domexception/.history/index_20210527213843.js": "7eea386ded80b0f6a362bfb491bc3493",
"node_modules/node-domexception/.history/index_20210527213852.js": "7e5bcebb955d4d35308a5a5250adad8c",
"node_modules/node-domexception/.history/index_20210527213910.js": "3d48ab3bb27ee5cbcd2bb2c2c289d6e3",
"node_modules/node-domexception/.history/index_20210527214034.js": "88b2d3d26767d6f134e84e36e248ac33",
"node_modules/node-domexception/.history/index_20210527214643.js": "d09f6e8ed26675646375ce848e5e106e",
"node_modules/node-domexception/.history/index_20210527214654.js": "8d128002b0d8905a3d4b0a3c4408a62a",
"node_modules/node-domexception/.history/index_20210527214700.js": "88b2d3d26767d6f134e84e36e248ac33",
"node_modules/node-domexception/.history/package_20210527203733.json": "94271a9271903de0a04f6512d576cc4b",
"node_modules/node-domexception/.history/package_20210527203825.json": "feae86ae8ede6b39106d5749f6c65358",
"node_modules/node-domexception/.history/package_20210527204621.json": "e154f817dab03e61184729cc1e35ec22",
"node_modules/node-domexception/.history/package_20210527204913.json": "0f55a0d6dae42bc331b8eca9f25b59fe",
"node_modules/node-domexception/.history/package_20210527204925.json": "0f55a0d6dae42bc331b8eca9f25b59fe",
"node_modules/node-domexception/.history/package_20210527205145.json": "9d2b065026410d08ec4fcbc1e098a830",
"node_modules/node-domexception/.history/package_20210527205156.json": "9d2b065026410d08ec4fcbc1e098a830",
"node_modules/node-domexception/.history/README_20210527203617.md": "05c73bdefc77e182c27e5ecb36af9d2d",
"node_modules/node-domexception/.history/README_20210527212714.md": "3019853de50c94cf84424dbdee13c49f",
"node_modules/node-domexception/.history/README_20210527213345.md": "786e575ed76543ba964cb2cede16b81b",
"node_modules/node-domexception/.history/README_20210527213411.md": "d003d8437c2a8935af3796c2babee5b7",
"node_modules/node-domexception/.history/README_20210527213803.md": "74b32cac4e8949828b61ef77e4863b34",
"node_modules/node-domexception/.history/README_20210527214323.md": "472535f6169700346e02e26e41673236",
"node_modules/node-domexception/.history/README_20210527214408.md": "472535f6169700346e02e26e41673236",
"node_modules/node-domexception/.history/test_20210527205603.js": "d41d8cd98f00b204e9800998ecf8427e",
"node_modules/node-domexception/.history/test_20210527205957.js": "ae69d231fa310bc14e7573e3a28a6b60",
"node_modules/node-domexception/.history/test_20210527210021.js": "f9b8a6c1bf9bb59ad8c6592b55ee0dd1",
"node_modules/node-domexception/index.js": "88b2d3d26767d6f134e84e36e248ac33",
"node_modules/node-domexception/LICENSE": "ec18f6be7ab0531adbbc1b41a288d8ea",
"node_modules/node-domexception/package.json": "9d2b065026410d08ec4fcbc1e098a830",
"node_modules/node-domexception/README.md": "0d150f9891345c2cf2598050b658dae0",
"node_modules/node-fetch/@types/index.d.ts": "5cc780f0bd25c7baf4e0e2e77b7f6dbf",
"node_modules/node-fetch/LICENSE.md": "b5d9c535657b1650d66a58538d99acc8",
"node_modules/node-fetch/package.json": "3a633ec97e21f4ea33482b6505b068dc",
"node_modules/node-fetch/README.md": "44d27e764cc4be74c77fc1017b33a285",
"node_modules/node-fetch/src/body.js": "2528856b8c2b574cbf17e4937cce68e4",
"node_modules/node-fetch/src/errors/abort-error.js": "150fac72ebfa0197eeb5dbcac1cc81d1",
"node_modules/node-fetch/src/errors/base.js": "094319fa5987650d4dd8636d9f87dde1",
"node_modules/node-fetch/src/errors/fetch-error.js": "a00685dafa8148b2f0ef3a373828f415",
"node_modules/node-fetch/src/headers.js": "72ee11b4f9f7e901d5d8eaa0541e847b",
"node_modules/node-fetch/src/index.js": "d8813c3bf23080b9e1870324e29f00cb",
"node_modules/node-fetch/src/request.js": "2453e11e1bfb41ff1ed9f05896840880",
"node_modules/node-fetch/src/response.js": "02a7391435a9802dc2e5dff151ccefe0",
"node_modules/node-fetch/src/utils/get-search.js": "4e763efdf6bd43c6745e20133d68161c",
"node_modules/node-fetch/src/utils/is-redirect.js": "abd306890f6dc5b856d352e625408180",
"node_modules/node-fetch/src/utils/is.js": "e49a1c4a9538bd80be0c204de6ffa010",
"node_modules/node-fetch/src/utils/multipart-parser.js": "bef0fd49151654b3704f009dc95b5f46",
"node_modules/node-fetch/src/utils/referrer.js": "02ee53359b2228ce1ff8a6cd29822ea9",
"node_modules/web-streams-polyfill/dist/polyfill.es2018.js": "2bb0e7cd9834d505c5aef8de489d260e",
"node_modules/web-streams-polyfill/dist/polyfill.es2018.js.map": "6636dbd4171f9f212ee0a846c47cecb1",
"node_modules/web-streams-polyfill/dist/polyfill.es2018.min.js": "7987c6fb3abf43974c87dfa164823494",
"node_modules/web-streams-polyfill/dist/polyfill.es2018.min.js.map": "93ae4222e4e1dada9ddd453d29c27749",
"node_modules/web-streams-polyfill/dist/polyfill.es2018.mjs": "7871c9461e9ffa78af134caa317ba32e",
"node_modules/web-streams-polyfill/dist/polyfill.es2018.mjs.map": "eb7cc6d519c0bb7c369813d789a3459a",
"node_modules/web-streams-polyfill/dist/polyfill.es6.js": "109e489eff0c8aa5d6fb4ccee76c82df",
"node_modules/web-streams-polyfill/dist/polyfill.es6.js.map": "aba28b8989caa7604a04218649ba254e",
"node_modules/web-streams-polyfill/dist/polyfill.es6.min.js": "0ed4b4d36b6d41b6be94577f56319c70",
"node_modules/web-streams-polyfill/dist/polyfill.es6.min.js.map": "05e3acb451b5e81b8e4cfac1a1b69e7e",
"node_modules/web-streams-polyfill/dist/polyfill.es6.mjs": "fa060d4e91657bf38c8932a373466705",
"node_modules/web-streams-polyfill/dist/polyfill.es6.mjs.map": "4af5949f2874242f1a0edd116e02f871",
"node_modules/web-streams-polyfill/dist/polyfill.js": "632335ed654dac8b6844daf71abcffed",
"node_modules/web-streams-polyfill/dist/polyfill.js.map": "5ac30d4fd26f4c225218ce551df6c7cd",
"node_modules/web-streams-polyfill/dist/polyfill.min.js": "84832fe18479b7304c5327a1b406d29b",
"node_modules/web-streams-polyfill/dist/polyfill.min.js.map": "6e864b2c4dffe3573c50b2675de44eda",
"node_modules/web-streams-polyfill/dist/polyfill.mjs": "d06e20f733c56945e27adcc0dad01a61",
"node_modules/web-streams-polyfill/dist/polyfill.mjs.map": "e6cbd1b7da0276e12c9dfd7e69e85287",
"node_modules/web-streams-polyfill/dist/ponyfill.es2018.js": "3cb9a80cd8816f23fc286e03947ed1cd",
"node_modules/web-streams-polyfill/dist/ponyfill.es2018.js.map": "32f50df26f6a25269afff9645d033a36",
"node_modules/web-streams-polyfill/dist/ponyfill.es2018.mjs": "691e6cd28496fe2c7d4b8c2de47aeb52",
"node_modules/web-streams-polyfill/dist/ponyfill.es2018.mjs.map": "b67e0b2bfa68971528ff5a4470f603eb",
"node_modules/web-streams-polyfill/dist/ponyfill.es6.js": "50fb7b234910c558d182bf2ee31b4b62",
"node_modules/web-streams-polyfill/dist/ponyfill.es6.js.map": "ce25ce4e726e1561eadc43e8cb40078b",
"node_modules/web-streams-polyfill/dist/ponyfill.es6.mjs": "4b9b51b0fff4dcbf625e1676d4b1e938",
"node_modules/web-streams-polyfill/dist/ponyfill.es6.mjs.map": "afbec80efdeee24977292b2c73014394",
"node_modules/web-streams-polyfill/dist/ponyfill.js": "f1b79f813f8c5b565ba0ee339079d049",
"node_modules/web-streams-polyfill/dist/ponyfill.js.map": "d3b9648904c5d9aacedd902a147d424c",
"node_modules/web-streams-polyfill/dist/ponyfill.mjs": "37c943161b735f507ed64acd3658a65f",
"node_modules/web-streams-polyfill/dist/ponyfill.mjs.map": "74db1cb1829a08713b0a9005a49feb1e",
"node_modules/web-streams-polyfill/dist/types/polyfill.d.ts": "6c9ecf1a0723e9558aa14126cc827267",
"node_modules/web-streams-polyfill/dist/types/ts3.6/polyfill.d.ts": "030461bd9e73852cff15de3df046b3fd",
"node_modules/web-streams-polyfill/dist/types/tsdoc-metadata.json": "0f47a754594542ea2aee4374192b17b1",
"node_modules/web-streams-polyfill/es2018/package.json": "8b35f1c16f430dfcc9f9c50df0b0adc7",
"node_modules/web-streams-polyfill/es6/package.json": "30c8a1010c7fd0b773199e983ecaaa7f",
"node_modules/web-streams-polyfill/LICENSE": "f386ec07283033a802d3be56cae4a3c8",
"node_modules/web-streams-polyfill/package.json": "abb2e108e579f5cdb19e9be142507512",
"node_modules/web-streams-polyfill/ponyfill/es2018/package.json": "72ac15ab735448c381d043e54a9a81a6",
"node_modules/web-streams-polyfill/ponyfill/es6/package.json": "6a2381d289f7a921829b51f97b1fb8bd",
"node_modules/web-streams-polyfill/ponyfill/package.json": "19779f6cbb209b04931f4714ed5fb030",
"node_modules/web-streams-polyfill/README.md": "1ab938759750e3d97666e8a7aa1272e9",
"package-lock.json": "9c4abce7d6869474dcd3f7a0c71bdc89",
"package.json": "8b109e4534354cdcb151f63ad826b38a",
"version.json": "d7761afc7a324ee11399d85a46387e5c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
