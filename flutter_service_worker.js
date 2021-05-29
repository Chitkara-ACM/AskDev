'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "838d9621fc0af66158a3fbf522ac5a88",
".git/config": "ef548cf013f38bba13afea2f92ff0f5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e80394b12b500b2e34e2366660bc341c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ad1e6cdf1ad020336af1ee62f06773d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0ef05dc054037ee0486d20b0e6c8437",
".git/logs/refs/heads/main": "e0ef05dc054037ee0486d20b0e6c8437",
".git/logs/refs/remotes/origin/HEAD": "742de7559352a8fc96a09956b53f0109",
".git/logs/refs/remotes/origin/main": "37fe189455e84cd74edd9fa140adb27b",
".git/objects/00/a9c889e2f5c1f819da0bd2a3eb88073995e19c": "09ea2448df17944fa730cbfecd5dce6d",
".git/objects/0c/8de495edbf84436d11bc3095edb496b317daf3": "b814379ee87d0905cd778c36439cac4d",
".git/objects/13/7f4f0f1cdef44006be3ed37d4cfd93f154384d": "0e81519a8711860bbf3fbfb6d114acea",
".git/objects/1a/5936c69efd066fb8426c43cdaa45209eeb42cf": "b04477bea0c3529adfa768fb6940b893",
".git/objects/25/a87116afe6566a46c61882b41f0a633a531f39": "d2306325b10333cc4c03bb4ecf1f8384",
".git/objects/30/1383f66c1a894f69b56fa20e5cb8a0fb02e966": "8575e54ffe6d9916964177bc3741adb9",
".git/objects/30/2b091141bcfc0e3397211a384505558bea4a0e": "a4a8caeeae43e88ffbf22f75b755e635",
".git/objects/35/9fa953ad04005ce7e6f0f010f35ddbd8be77bb": "a7bd2dc5448b1e4f8db532331d39f521",
".git/objects/3b/d68ca76d8cd9c55c543130a46ed8f9e3881463": "1d8bf6b6864ba25159280e488b290628",
".git/objects/4a/34ec3302863ea5bca583c4ea2082fff849dcd4": "0bcee07788d9530ca75d44e62068b6c5",
".git/objects/50/d64a505008d642bf8600cbfa908515930d8b89": "c3f54d92d7c207a334e9628eda6b11f8",
".git/objects/55/90583d8d0a7e96b184f2727185ed068a1e6846": "3dc0afbf0736d926558990e3a2c083f2",
".git/objects/5e/47ce221ae833ee9b4f15400ac1ee3ea9fe4a91": "a9c40c01afc77d7a215dfc2bbf9a79b9",
".git/objects/78/a58fcb447221b444cfa1d6643e8bef9d03f3f9": "a0955e886fdfc0f676880ece5918ec51",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/85/e768fcb34fb02624a53f09a4f9d347ed6f5b34": "43a226e75124b1f82772ab262d0421cd",
".git/objects/89/951b3393ac3f0357d654a36f7b2b154bf5d7a5": "394f100fe564706011351cc3c2f4b511",
".git/objects/8f/7ceba6ee90e6259f35d6a72f117830e89605e1": "6777bde87d419135c2639b9997023964",
".git/objects/90/58e616735a724d8044eee1b72f926936fde584": "c6b2032d36c350e9407fb8679858da26",
".git/objects/92/570a342fc67039574f500215bbf5f3fd6faebf": "dd7726b1e63e822f5db704b858e62537",
".git/objects/a5/22ca46d5a13824f39235f04118598cde7a4601": "bb3aa277e1b8d890d72e6d1cb9200440",
".git/objects/ad/2c925af429b92a811c748d0040432ead201006": "1cc9f469fa97f81776d5f00feb377391",
".git/objects/ba/58e275b863d9b3a9f4220ffbd5f8a56d42d9c5": "83e9ef6630a36f86102ae6c83ed99272",
".git/objects/c9/70d7abf5c33ec586d654293e59b7b0a7bfbcca": "a78078759e56b19f310ab71be08d574d",
".git/objects/ca/d26420d2872e219d9f736f09588e3e108f22fc": "64f85791f07bb280887c3661635bfde4",
".git/objects/cc/6b8d91d7ca848357a32e3ba8106727e8773e2a": "87ceab47b39ddb09660e76b2460657ba",
".git/objects/d4/582af4fc99a2e975c5aa042c1d8cada31753a9": "cf47c2c7d8669b9ea426a32482e8d8ae",
".git/objects/dc/cbf57ed209f4837ecbd5f154e49c8904345519": "9ed732f183e2a0c477fdf0837b67be59",
".git/objects/dc/e44e75a5bb827c6145dc982ca2b71c8e122837": "a7c0b0972729d297615febbb85689d53",
".git/objects/e6/0a23eeaecf069438eec020cbda8711e8130222": "3fe4d9c7c25b322b24d438723146f40d",
".git/objects/fb/f7fa4fa5738f1f3cd0201ec88d2d3db913efdf": "9e8c7f2b977dea6d3c855aaed673172e",
".git/objects/pack/pack-0a21565603d065211043cc7ae2e01c52cbf1a755.idx": "55cba5b89906216536da326c413af4fd",
".git/objects/pack/pack-0a21565603d065211043cc7ae2e01c52cbf1a755.pack": "20f2e3e08166bed5fd0da96620578325",
".git/packed-refs": "dc889018cede86d2cbecb00eb7be60c0",
".git/refs/heads/main": "24db6e830f9007655421e86f7d5c512f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "42f81c8b66d2bb3a1d374087841edf95",
".idea/workspace.xml": "4d567a9b5c0eb973c814c01a19ac446e",
"ask-dev.apk": "400ccca4c9a400872718a9633118dc0f",
"assets/apk/ask-dev.apk": "400ccca4c9a400872718a9633118dc0f",
"assets/AssetManifest.json": "610c19154eaac1dd0d8e3c85fa38c1e7",
"assets/FontManifest.json": "3020802906dc520f88ca973c65aa46d8",
"assets/images/All_questions.png": "f580be6dd9137d3b259f7e9d58659ecd",
"assets/images/Ask_ques.png": "1d68c845f3965d67fb00984cc5c8cfff",
"assets/images/bg.png": "5206340c622f8c00bb9e451d8e3dd15b",
"assets/images/logo.jpg": "fc976d152ea7b42b621dd53f1d1c2f41",
"assets/images/Search_ques.png": "996974ed7dd4df8bb3132ba821dbebd2",
"assets/NOTICES": "c40d877420792f51fe7e9700abc720fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1ed138d26024b999a785073dd9bfb671",
"/": "1ed138d26024b999a785073dd9bfb671",
"main.dart.js": "6126bda64a88f50090051c5a785d2375",
"manifest.json": "16a2ce32371bdf639483dd0c5f0241b2",
"version.json": "6f11272456544b4f5adcff586422c759"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
