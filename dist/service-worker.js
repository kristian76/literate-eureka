var cacheName = 'super-duper-nice-app'
var filesToCache = [
        'https://unpkg.com/spectre.css/dist/spectre.min.css',
        'https://unpkg.com/spectre.css/dist/spectre-exp.min.css',
        'https://unpkg.com/spectre.css/dist/spectre-icons.min.css',
        'data.json'
    ]

self.addEventListener('install', function (e) {
    // console.log('service worker installing')

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener('activate', function(e) {
    // console.log('service worker activated')

    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key)
                }
            }))
        })
    )
})

self.addEventListener('fetch', function(e) {
    // console.log('service worker fetching')

    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request)
        })
    )
})