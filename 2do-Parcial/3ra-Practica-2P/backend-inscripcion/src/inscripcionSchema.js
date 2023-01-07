
const mongoose=require("mongoose")

const inscripcionSchema=mongoose.Schema({
    descripcion:{
    type:String,
    required:true
},    
    id_curso:{
    type:String,
    required:true
},
    id_aspirante:{
    type:String,
    required:true
},
    fecha_inscripcion:{
    type:Date,
    default:Date.now
},
    hora_semanal:{
    type:String,
    required:true
},
    valor_cancelado:{
    type:String,
    required:true
}
})

module.exports=mongoose.model("Inscripcion", inscripcionSchema)