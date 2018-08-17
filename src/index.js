/** PWA stuff
 * Resources https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
**/
if ('serviceWorker' in navigator) {
    // Register serviceWorker
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function() {
            console.log('service worker registered')
        }).catch(function(e) {
            console.log(e)
        })
}

import {render} from 'react-dom'
import React from 'react'

const AppShell = (props) => (
        <div>Hello Kitty</div>
    )

render(
    <AppShell />,
    document.getElementById('root'))