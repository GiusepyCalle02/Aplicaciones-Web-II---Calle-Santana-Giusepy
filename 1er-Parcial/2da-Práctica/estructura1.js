import {aspirantes, inscripciones} from './datos.js';


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


findInscripcionForId(333, (err,inscripcion)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(book)
    findAspiranteForId( inscripcion.idAspirante, ( err, aspirante )=>{
        if (err)
        {
            return console.log(err.message);
        }
        inscripcion.aspirante= aspirante; 
        delete inscripcion.idAspirante;
        console.log(inscripcion);

    } )
})