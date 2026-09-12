const CACHE_NAME = 'screenwriting-desk-v2';
const APP_SHELL = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(APP_SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.filter(function(n) { return n !== CACHE_NAME; }).map(function(n) { return caches.delete(n); }));
    })
  );
  self.clients.claim();
});

// App shell: cache-first (works offline). Everything else (e.g. Google Fonts): network-first,
// falling back to cache when offline — fonts just fall back to system fonts if never cached.
self.addEventListener('fetch', function(event) {
  var req = event.request;
  var url = new URL(req.url);
  var isShell = url.origin === self.location.origin;

  if (isShell) {
    event.respondWith(
      caches.match(req).then(function(cached) {
        return cached || fetch(req).then(function(res) {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(req, copy); });
          return res;
        });
      })
    );
  } else {
    event.respondWith(
      fetch(req).then(function(res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(req, copy); });
        return res;
      }).catch(function() { return caches.match(req); })
    );
  }
});
