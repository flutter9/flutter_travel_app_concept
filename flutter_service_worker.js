'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/images/home.png": "bc1975b54bcdec50a293e956559e0a50",
"/assets/images/2.jpg": "072dce247809999e2a406654b044acdd",
"/assets/images/wl.jpg": "2a9ba80b333a8b5fdb06433f229c6dc9",
"/assets/images/1.jpg": "6a6be458ca2965b7c33453d75bdcdace",
"/assets/images/booking.jpg": "96494a14a253c37f9f9db90e7ea4d5ae",
"/assets/images/details.png": "bec6519b099788a7bf75157971883aa5",
"/assets/images/profile.jpg": "86a40d25900d999884fda4130ee9399a",
"/assets/images/3.jpg": "7757bdb3c7b0c205d0cf5be6bbba0d89",
"/assets/images/welcome.png": "48a48a84307c994c66e1f48300bc2b9e",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "8a90a37fcb4f415796b7b1521d2a5cbd",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "ed83e0f4664e6262c20aaa40028d1ce7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
