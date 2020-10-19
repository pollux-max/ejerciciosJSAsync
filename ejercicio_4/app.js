
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("charmander").then(res => {
    console.log(`Name: ${res.forms[0].name}`)
    console.log(`Link: ${res.forms[0].url}`)
});
