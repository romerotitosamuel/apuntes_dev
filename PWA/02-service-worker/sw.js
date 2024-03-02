self.addEventListener('fetch', event => {

    console.log(event.request.method)
    
})











/*
//Borrado del CSS
    if (event.request.url.includes('style.css')) {
        event.respondWith(null)

    } else {
        event.respondWith(fetch(event.request))
    }
    */