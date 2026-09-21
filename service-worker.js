const CACHE_NAME = "anime-tracker-v1";

const files = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icone.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(files))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});
