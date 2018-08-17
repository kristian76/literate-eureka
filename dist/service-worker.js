var cacheName = 'super-duper-nice-app'
var filesToCache = []

self.addEventListener('install', function (e) {
    console.log('service worker installing')

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('service worker caching')

            return cache.addAll(filesToCache)
        })
    )
})

self.addEventListener('activate', function(e) {
    console.log('service worker activated')

    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('service worker removing old cache')

                    return caches.delete(key)
                }
            }))
        })
    )
})