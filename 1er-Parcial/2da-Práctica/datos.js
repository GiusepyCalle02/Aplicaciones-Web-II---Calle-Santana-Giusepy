//A continuación se declara el arreglo aspirantes que es una de las 
//entidades designadas y se le añade como objetos los atributos a continuación

const aspirantes = [
    {
        id:1,
        nombre: "Alexander",
        identificacion: "1315",
        idInscripcion:1
    },
    {
        id:2,
        nombre: "Leonela",
        identificacion: "1316",
        idInscripcion:2
    },
    {
        id:3,
        nombre: "Fernando",
        identificacion: "1317",
        idInscripcion:3
    },
    {
        id:4,
        nombre: "Ana",
        identificacion: "1318",
        idInscripcion:4
    },
    {
        id:5,
        nombre: "Erick",
        identificacion: "1319",
        idInscripcion: 5
    }
]


//A continuación se declara el arreglo inscripciones que sería la entidad transaccional
//y se le añade como objetos los atributos a continuación

const inscripciones = [
    {
        id:1,
        fecha:"20 de septiembre",
        hora:2,
        valorCancelado:20
    },
    {
        id:2,
        fecha:"20 de septiembre",
        hora:1,
        valorCancelado:10
    },
    {
        id:3,
        fecha:"20 de septiembre",
        hora:2,
        valorCancelado:28
    },
    {
        id:4,
        fecha:"20 de septiembre",
        hora:3,
        valorCancelado:35
    },
    {
        id:5,
        fecha:"20 de septiembre",
        hora:1,
        valorCancelado:15
    },
]


//A continuación exportamos los 2 arreglos utilizados
//los cuales serán utilizados en los archivos estructura1.js
//para callback y estructura2.js para Async Await

export {
    aspirantes,
    inscripciones
}
