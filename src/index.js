/** PWA stuff
 * Resources https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
**/
if ('serviceWorker' in navigator) {
    // Register serviceWorker
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() {
            console.log('service worker registered')
        })
}