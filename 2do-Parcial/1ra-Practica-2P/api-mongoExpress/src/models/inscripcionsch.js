const mongoose=require("mongoose")

const inscripcionSchema=mongoose.Schema({
    idCurso:{type:String, 
        required:true},

    idAspirante:{type:String,
         required:true},

    fechaInscripcion:{type:String, 
        required:true},

    horaSemanal:{type:String, 
        required:true},

    valorCancelado:{type:String,
         required:true}

})

module.exports=mongoose.model("Inscripcion", inscripcionSchema)

