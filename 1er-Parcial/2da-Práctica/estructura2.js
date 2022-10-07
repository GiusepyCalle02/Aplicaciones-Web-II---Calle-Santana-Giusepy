import {aspirantes, inscripciones} from './datos.js';


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
