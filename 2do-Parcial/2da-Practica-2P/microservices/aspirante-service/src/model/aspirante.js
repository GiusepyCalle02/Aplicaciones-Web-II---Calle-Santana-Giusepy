
const mongoose=require("mongoose")

const aspiranteSchema=mongoose.Schema({
    nombre:{
        type: String,
        required: [ true, 'El nombre debe ser requerido'],
    },
    apellido:{
        type: String,
        required: [ true, 'El apellido debe ser requerido'],
    },
    cedula:{
        type: String,
        required: [ true, 'La cedula debe ser requerida'],
    },
    telefono:{
        type: String,
        required: [ true, 'El telefono debe ser requerido'],
    },
})

module.exports=mongoose.model("Aspirante", aspiranteSchema)