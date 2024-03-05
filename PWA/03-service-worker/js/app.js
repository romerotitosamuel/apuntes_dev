

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg => {

        /*timeOut(()=> {
            reg.sync.register('posteo-gatitos')
            console.log('Se enviaron fotos de gatitos al server')

        }, 3000)*/
        
        Notification.requestPermission().then(result => {
            console.log(result)
            reg.showNotification('Hola mundo')
        })

    })

}












/*
fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(console.log)
*/
