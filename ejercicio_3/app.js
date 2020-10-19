
const obtenerPokemon = require("./library");

// Codigo funcion callback

let funcionCallback = (res) => {
    console.log(`Name: ${res.forms[0].name}`)
    console.log(`Link: ${res.forms[0].url}`)
}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("charizard", funcionCallback);
