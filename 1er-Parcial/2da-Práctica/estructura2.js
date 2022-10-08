//A continuación importamos los 2 arreglos que se encuentran
//en el archivo datos.js lo que nos permitirá atraer sus datos
//y poderlos utilizar en la estructura Async Await para que se muestren en consola

import {aspirantes, inscripciones} from './datos.js';


//Aquí utilizamos como una función la estructura Async Await para buscar
//por id un aspirante del arreglo que tenemos.
//Un dato es que lo unico que se debe poner al inicio de la función es la 
//palabra "async"

async function findAspiranteForId(id){
    const aspirante = aspirantes.find((aspirante)=> aspirante.id===id );
    if (!aspirante)
    {
        const error =  new Error();
        error.message="Aspirante no encontrado";
        throw error;
    }
    return aspirante;

}

//Aquí utilizamos como una función la estructura Async Await para buscar
//por id la inscripción de un aspirante del arreglo que tenemos

async function findInscripcionForId(id){
    const inscripcion =  inscripciones.find((inscripcion)=>{
        return inscripcion.id===id;
    });
    if (!inscripcion)
    {
        const error = new Error();
        error.message="No encontramos la inscripción";
        throw error;
    }
    return inscripcion;
}
(async ()=>{
    try
    {
        const aspirante  =   await findAspiranteForId(1);
        const inscripcion =   await  findInscripcionForId(aspirante.id);
        aspirante.inscripcion = inscripcion;
        console.log(aspirante)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();
