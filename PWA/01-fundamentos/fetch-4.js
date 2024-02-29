// Peticion POST
// https://reqres.in/api/users

let img = document.querySelector('img')

fetch('cuadro.jpg')
    .then(resp => resp.blob())
    .then(imagen => {
        //console.log(imagen)
        var imgPath = URL.createObjectURL(imagen)
        img.src = imgPath
    })