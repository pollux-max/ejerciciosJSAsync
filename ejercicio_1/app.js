
const obtenerChiste = require("./library");

// Codigo funcion callback

function funcionCallback(res){
    console.log(res[0].setup)
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(funcionCallback);
