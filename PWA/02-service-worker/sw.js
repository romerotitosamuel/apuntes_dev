self.addEventListener('fetch', event => {

 
 
    
})











/*
//Borrado del CSS
    if (event.request.url.includes('style.css')) {
        event.respondWith(null)

    } else {
        event.respondWith(fetch(event.request))
    }
    */

    //Tarea de volcado de imagen
    /*
   if(event.request.url.includes('/img/main.jpg')){
        
        let imagen = fetch('/img/main-patas-arriba.jpg')
        
        event.respondWith(imagen)
    }
    */


    //Ejercicio de manejo de errores

    /*
       event.respondWith(
        fetch(event.request)
        .then(resp => {

            if (resp.ok) {
                return resp
            }else{
                return fetch('img/main.jpg')
            }
            
        })
    )
    */
