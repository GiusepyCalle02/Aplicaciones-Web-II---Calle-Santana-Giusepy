
const mongoose=require("mongoose")

const cursoSchema=mongoose.Schema({
    descripcion:{
        type: String,
        required: [ true, 'La descripcion del curso debe ser requerida'],
       
    },
    fechaInicio:{
        type: String,
        required: [ true, 'La fecha de Inicio del curso debe ser requerida'],
       
    },
    numCurso:{
        type: String,
        required: [ true, 'El numero del curso debe ser requerido'],
       
    },
    numEstudiante:{
        type: String,
        required: [ true, 'El número de estudiantes del curso debe ser requerido'],
       
    },
})

module.exports=mongoose.model("Curso", cursoSchema)