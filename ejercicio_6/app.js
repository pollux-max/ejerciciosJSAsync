
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(res => {
    const {title,first,last} = res.results[0].name

    console.log(`Nombre: ${title} ${first} ${last}`)
    console.log(`Genero: ${res.results[0].gender}`)
    console.log(`Email: ${res.results[0].email}`)
});
