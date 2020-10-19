
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

let funcionCallback = res => {

    const {title,first,last} = res.results[0].name

    console.log(`Nombre: ${title} ${first} ${last}`)
    console.log(`Genero: ${res.results[0].gender}`)
    console.log(`Email: ${res.results[0].email}`)
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
