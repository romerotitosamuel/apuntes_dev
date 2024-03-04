
// Ciclo de vida del SW
self.addEventListener('install', event => {

    console.log('SW: instalando SW')

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas rrrr')
            //self.skipWaiting()
            resolve()
        }, 1)

    })

    event.waitUntil(instalacion)
})

// Activación del SW (Cuando toma el control)
self.addEventListener('activate', event => {
    console.log('SW2: Activo y listo para usar la App')
})

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

  



})



/*------------------GUARDADOS --------------------------------------------------

//Clase 50 - event.waitUtil(); ------------------------------------------------------------

self.addEventListener('install', event => {
    
    console.log('SW: instalando SW')

    const instalacion = new Promise((resolve, reject) => {

        setTimeout( () => {
            console.log('SW: Instalaciones terminadas')
            self.skipWaiting()
            resolve()
        },1000)

    })

    event.waitUntil(instalacion)
})

self.addEventListener('install', event => {

    console.log('SW: instalando SW')

    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas rrrr')
            //self.skipWaiting()
            resolve()
        }, 1)

    })

    event.waitUntil(instalacion)
})



// CLASE 51 - ServiceWorker modificacion del Fetch -------------------------------------------
// Activación del SW (Cuando toma el control)
self.addEventListener('activate', event => {
    console.log('SW2: Activo y listo para usar la App')
})

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    console.log('SW: ', event.request.url)

    if (event.request.url.includes('https://reqres.in/')) {

        const resp = new Response(`{ ok: false, mensaje: 'jajaajja'}`)
        
        event.respondWith(resp)
    }
})













------------------------------------------------------------------------------*/