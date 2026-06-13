const CACHE_NAME = 'toolboxid-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './favicon.png',
  './tools/password-generator.html',
  './tools/markdown-editor.html',
  './tools/color-palette.html',
  './tools/csv-to-json.html',
  './tools/image-to-base64.html',
  './tools/timestamp-converter.html',
  './tools/text-case.html',
  './tools/image-compress.html',
  './tools/image-convert.html',
  './tools/pdf-extractor.html',
  './tools/url-shortener.html',
  './tools/zip-extractor.html',
  './tools/jpg-to-pdf.html',
  './tools/pdf-to-word.html',
  './tools/background-remover.html',
  './tools/kalkulator-pph21.html',
  './tools/travel-budget-indonesia.html',
  './tools/qr-generator.html',
  './tools/pdf-merge.html',
  './tools/emoji-picker.html',
  './tools/diff-checker.html',
  './tools/json-formatter.html',
  './tools/lorem-ipsum.html',
  './tools/base64-text.html',
  './tools/social-downloader.html'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching offline assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event (Network-First with Cache Fallback for dynamic assets)
self.addEventListener('fetch', (e) => {
  // Only handle HTTP/HTTPS (ignore chrome-extension:// etc)
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Cache new successful requests dynamically (CDNs, Google Fonts, etc.)
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache if network is unavailable
        return caches.match(e.request);
      })
  );
});
