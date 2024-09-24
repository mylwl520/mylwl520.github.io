'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "74d6c1885967f13d5fdbc68f85cf261a",
"version.json": "beaadf8205130c9db463473c23abe165",
"index.html": "e074f4a842155dd78046abf0753211b6",
"/": "e074f4a842155dd78046abf0753211b6",
"main.dart.js": "b1a006ed794e37780b2d25d4cddc74cb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cd1fb9d04e5b40b35d2292c873f24f26",
"assets/AssetManifest.json": "0472313717d2b5c0ad1c0fae5ab8a4cc",
"assets/NOTICES": "f15f236d6b62cb9b0fb9b7d2a354f8b1",
"assets/FontManifest.json": "ed7313e4ddb16a794f695ca0322a3ed8",
"assets/AssetManifest.bin.json": "f9f6449f7d04d304942e2affc5a45de8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "56b4e287ed12318156f19d7589d15be0",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "c230cd916dcb2c3bcc7d5d4e96748a22",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "bc0d55e3981f6738898a411091cb40fc",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "22cd01f8d8845d465c2c2bdcbf3f59d6",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/tdesign_flutter/assets/tdesign/td_icons.ttf": "b7a1c566d553e0739cfa634b8965b7f6",
"assets/packages/tdesign_flutter/assets/tdesign/TCloudNumberVF.ttf": "4f66f7ac7b3b222eb82f69539c49662c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1eacd000d1f4fff5bad07376d719b7dd",
"assets/fonts/MaterialIcons-Regular.otf": "7ca543a66e7107eada028e52f9fc9372",
"assets/assets/images/jy_img_underline.png": "3e89f6bc17aec334b0d200aa16c26f66",
"assets/assets/images/dialog_me.png": "2fdd85984c3a165cab4cfd43a8963281",
"assets/assets/images/jy_ic_history.png": "87ca356b8a2d0f884e7873b36a5b475f",
"assets/assets/images/jy_img_topbj.png": "7cc36d2e9ba08e176ee197c20b5359a5",
"assets/assets/images/jy_ic_nav_back_dark.png": "8e0cdd4e30d159368882f4479e919adf",
"assets/assets/images/select_head.png": "8cdd4de58a90ca11dab3e2e0aadf8699",
"assets/assets/images/down.png": "f2618a96e5e6fcc18a4bd32997f42054",
"assets/assets/images/music.jpg": "fa68442f8b9a4bf4392fe4dfd7b4bb22",
"assets/assets/images/letter_main.png": "30f4db4eb062d385cec3a88670c799db",
"assets/assets/images/Rectangle.png": "6cc6b0b48e85f9b886d08292d3a6628a",
"assets/assets/images/Arrow.png": "2ac59d7736340034532704a99e2fd4d4",
"assets/assets/images/Illustration.png": "dfdf09e706ff2f958400f572a9aa4f77",
"assets/assets/images/dialog_record.png": "bec10656edaf026c3f5cf8ecbece86f5",
"assets/assets/images/selectRight.png": "9574ad84afa4f2eb627d1c7dbf55eb4c",
"assets/assets/images/playSystem.png": "93e286bb26d5bfd0c4a4293495327235",
"assets/assets/images/jy_img_avatar.png": "d9aa24e0f479331393bc5ee1965a54fa",
"assets/assets/images/Arrow2.png": "2d18ce5da8ee435fec19f105ab8aca6f",
"assets/assets/images/Background.png": "2338c1f7e7226c99799aafa0eea92da5",
"assets/assets/images/jy_log.png": "1971fa0919069ce46049c7692427cb8f",
"assets/assets/images/selectWrong.png": "09098a1ea6ffdafce17a4fdd233ebfc0",
"assets/assets/images/voiceword.png": "89c05d91b2ffd74516b04fd6a1cfc263",
"assets/assets/images/image20.png": "736d5033c16cdbd6cdcd5e239212358d",
"assets/assets/images/jy_ic_email.png": "abd9f466cad7c848416a158926ed08d9",
"assets/assets/images/jy_ic_music_close.png": "176ef0a1228aa98a1764516347e1aacc",
"assets/assets/images/jy_ic_security.png": "015fc9992559f810e7cdf047650bf86d",
"assets/assets/images/Jy_img_curve.png": "6145e4b217705cf88aa87db1e76a6cb9",
"assets/assets/images/bookRecord.png": "21d6e021a5b36504dcaa6712010a1cee",
"assets/assets/images/Go.png": "4bd24ff7500aba20bd11b2cb9dd79987",
"assets/assets/images/jy_ic_noContent.png": "bd4f7a721640b892ff971a787c34326c",
"assets/assets/images/Done.png": "c43a5c849bc0487cd99487b6f42a6d84",
"assets/assets/images/jy_ic_music_pp.png": "95670c2d770d9268285c7406b16b7da3",
"assets/assets/images/jy_ic_logoff.png": "24ffebc0a9ad9f2be4621236036ba82b",
"assets/assets/images/dialog_Play.png": "f1ccd8c5d38cd9392b254b2520ccda41",
"assets/assets/images/jy_ic_aboutus.png": "89d5ee1ecc13f9ed6e4a70d4cbb9f33c",
"assets/assets/images/bookPlay.png": "a16289ae50b7601d85a027f0304fd227",
"assets/assets/images/Playmy.png": "ca2fdea95dc9d2442222cbb4fa248947",
"assets/assets/images/people2_small.png": "2d39988cbe6b8fb5d532ad66bba7c9a9",
"assets/assets/images/jy_edit.png": "b8237b9453c016752b39e455bf22dbc2",
"assets/assets/images/people3_radius.png": "0de98a21e552b7f43e7d6f61b5ca3632",
"assets/assets/images/bigPlay.png": "84e36834d239ef77fe0bfe1771b18146",
"assets/assets/images/jy_ic_arrowright.png": "2ddcc4ddd334039aadb2738afb0dc196",
"assets/assets/images/Frame.png": "e1d1f6a18cc89f0a66feaaa172021984",
"assets/assets/images/people2.png": "9774fc70adb6d4a1b17eae09253c9389",
"assets/assets/images/temp.png": "0362c2f5c2d9023e8fe87a83d6860f68",
"assets/assets/images/jy_ic_clear.png": "9f705cbff22b5ef42387968c4b705c04",
"assets/assets/images/people3.png": "7b4e8b49076130733e13db325503230f",
"assets/assets/images/Ellipse34.png": "f8c08a8161cb25b0e61646ede3282bb7",
"assets/assets/images/people1.png": "2364534f6de8c80dc57ac66cb378558d",
"assets/assets/images/a.png": "339a0c5f0c6a87b08011efdb8fb22a81",
"assets/assets/images/rightPlay.png": "575795be8801c6fb43b479f132abd737",
"assets/assets/images/wordDraw.png": "fa265ec1864dcf0aade41d8dc0931990",
"assets/assets/images/ComponentNormal.png": "75f9d8c3f45a306beb22deab80a63c85",
"assets/assets/images/people4.png": "1ed527225dfa0a19db1066efaddc3e34",
"assets/assets/images/Play.png": "a992e4119a7713e3ff7a176422e72b30",
"assets/assets/images/jy_ic_language.png": "02834e98ca21f6321e2cdaf7336c89ea",
"assets/assets/images/jy_ic_music_pause.png": "bfdc7c81de1d77361b5380050829dd37",
"assets/assets/images/GradientBJ.png": "968a18ee4b8b0a61ee05b041b2885713",
"assets/assets/images/Play2.png": "5b94b8f9637196c2ccff0e64c835e30a",
"assets/assets/images/Subtract.png": "5ea740dc39521e5cdab8d4247e479baa",
"assets/assets/images/jy_ic_logout.png": "5b41218da4c026ce4e7b9256e56c85aa",
"assets/assets/images/mic.png": "730b1f77006df279cd42f2c98b61009a",
"assets/assets/images/photo_take.png": "9175f022b283d3b4ad7e26966bc2d5b8",
"assets/assets/html/index.html": "fd31403f9456f50227e84db5d7b50f4f",
"assets/assets/html/static/home_imgs/%25E7%2594%25B0%25E5%25AD%2597%25E6%25A0%25BC.png": "9e2f6bbeff5931c6989f6cbbad9ad9fe",
"assets/assets/html/static/css/app.css": "1a40a478d0d75cd7f4a8d5d19ffd7252",
"assets/assets/html/static/js/manifest.js": "e09be303e3aa147ee00500ea6098657f",
"assets/assets/html/static/js/vendor.js": "cad67fd60b5ae7feb0d0d6433ad9dbd5",
"assets/assets/html/static/js/app.js": "0785e93127ca595509a8d33d9ddbb34a",
"assets/assets/html/static/img/%25E7%2594%25B0%25E5%25AD%2597%25E6%25A0%25BC.9e2f6bb.png": "9e2f6bbeff5931c6989f6cbbad9ad9fe",
"assets/assets/html/static/polyfill.js": "c2c7416a3ce7833d781797e6524d899a",
"assets/assets/html/static/hanzi-writer.js": "3f773b4f09686fbd4b5aaa8afbd47b11",
"assets/assets/resource/voiceRecord.json": "6c7cdac1313cd8881f0330a47242cf24",
"assets/assets/fonts/AlibabaPuHuiTi-3-75-SemiBold.ttf": "1b0a914a0dc49e517692591b9c7a9e3f",
"assets/assets/fonts/GreatWallChineseSimkai.ttf": "2a3c911c94158ccdf36ffbc4c17c823c",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "2ff12e3a905828b3ba32f43534f5e1c5",
"canvaskit/canvaskit.js.symbols": "9bc52093d9406cd9b78b673ee6af9377",
"canvaskit/skwasm.wasm": "0174a49453d5c742565a9c6b76ff0117",
"canvaskit/chromium/canvaskit.js.symbols": "12b4a72c095c8262cc92443acca219b2",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "70372064fdd1a5c362d275de4f6f5545",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "0ce4a66c4dd5ebf3b13ba3c1d4497e49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
