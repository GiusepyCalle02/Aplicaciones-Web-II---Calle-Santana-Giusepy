//A continuación importamos los 2 arreglos que se encuentran
//en el archivo datos.js lo que nos permitirá atraer sus datos
//y poderlos utilizar en la estructura callback para que se muestren en consola

import {aspirantes, inscripciones} from './datos.js';


//Aquí utilizamos como una función la estructura callback para buscar
//por id un aspirante del arreglo que tenemos

function findAspiranteForId(id, callback  ){
    const aspirante = aspirantes.find((aspirante)=> aspirante.id===id );
    if (!aspirante)
    {
        const error= new Error();
        error.message="Aspirante no encontrado";
        return callback(error);
    }
    return callback(null, aspirante );
}

//Aquí utilizamos como una función la estructura callback para buscar
//por id la inscripcion de un aspirante del arreglo que tenemos

function findInscripcionForId(id, callback){
    const inscripcion =  inscripciones.find((inscripcion)=>{
        return inscripcion.id===id;
    });
    if (!inscripcion)
    {
        const error =  new Error();
        error.message= "Inscripcion no encontrada";
        return callback(error)
    }
    return callback(null, inscripcion)
}


findAspiranteForId(3, (err,aspirante)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(book)
    findInscripcionForId( aspirante.idInscripcion, ( err, inscripcion )=>{
        if (err)
        {
            return console.log(err.message);
        }
        aspirante.inscripcion= inscripcion; 
        delete aspirante.idInscripcion;
        console.log(aspirante);

    } )
})