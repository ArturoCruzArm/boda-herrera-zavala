const CACHE_SHELL = 'boda-shell-v1';
const CACHE_IMAGES = 'boda-images-v1';

// Al instalar: cachear archivos de la app
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_SHELL).then(cache =>
            cache.addAll([
                './selector.html',
                './contrato.html',
                './css/selector.css',
                './js/selector.js'
            ])
        )
    );
    self.skipWaiting();
});

// Al activar: limpiar cachés viejos
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(k => k !== CACHE_SHELL && k !== CACHE_IMAGES)
                    .map(k => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

// Fetch: cache-first para imágenes, network-first para todo lo demás
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    if (url.pathname.includes('/imagenes/')) {
        // Imágenes: si está en caché úsala, si no descárgala y guárdala
        event.respondWith(
            caches.open(CACHE_IMAGES).then(cache =>
                cache.match(event.request).then(cached => {
                    if (cached) return cached;
                    return fetch(event.request).then(response => {
                        if (response.ok) cache.put(event.request, response.clone());
                        return response;
                    }).catch(() => cached);
                })
            )
        );
    } else {
        // HTML/CSS/JS: red primero, caché como respaldo
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (response.ok) {
                        caches.open(CACHE_SHELL).then(c => c.put(event.request, response.clone()));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
    }
});
