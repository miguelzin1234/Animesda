const CACHE_NAME="anime-tracker-v2";
const FILES=[
 "./",
 "./index.html",
 "./manifest.json",
 "./icone.png"
];

self.addEventListener("install",event=>{
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(FILES)));
});

self.addEventListener("fetch",event=>{
 event.respondWith(caches.match(event.request).then(r=>r||fetch(event.request)));
});

self.addEventListener("activate",event=>{
 event.waitUntil(self.clients.claim());
});
