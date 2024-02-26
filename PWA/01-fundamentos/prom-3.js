let sumarLento = (numero) => {
    return new Promise( ( resolve, reject) => {
        setTimeout(()=> resolve( numero + 1) , 800)
    })
}

let sumarRapido = (numero) => {
    return new Promise( ( resolve, reject) => {
        setTimeout(()=> resolve( numero + 1) , 300)
    })
}

