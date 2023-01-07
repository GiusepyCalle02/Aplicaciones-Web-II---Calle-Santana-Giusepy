
const express=require("express")
const router =express.Router()
const inscripcionSchema=require("./inscripcionSchema")

router.get("/inscripcion", (req, res)=>{
const inscripciones= inscripcionSchema.find()
res.json(inscripciones)

//en vez de data se debe colocar inscripciones
.then((inscripciones)=>res.json({inscripciones}))
.catch((error)=>res.send({message:error}))
})

//esto funcionó despues de quitarle la interfaz "Inscripcion" que se envia desde el frontend llamada "data"
router.post("/inscripcion",(req, res)=>{
const {...body} = req.body;
const data = {
    ...body,
    descripcion: body.descripcion,
    id_curso: body.id_curso,
    id_aspirante: body.id_aspirante,
    fecha_inscripcion: body.fecha_inscripcion,
    hora_semanal: body.hora_semanal,
    valor_cancelado: body.valor_cancelado
}
const inscripcion=new inscripcionSchema(data)
inscripcion.save()
res.status(201).json(inscripcion)
.then((inscripcion)=>res.json(inscripcion))
.catch((error)=>res.send({message:error}))
})

router.delete("/inscripcion/:id",(req, res)=>{
const {id}=req.params
inscripcionSchema.deleteOne({_id:id})
.then((data)=>res.send(data))
.catch((error)=>res.send(error))
})

router.put("/inscripcion/:id",(req, res)=>{
    const {id}=req.params
    const {descripcion, id_curso, id_aspirante, fecha_inscripcion, hora_semanal, valor_cancelado}=req.body
    inscripcionSchema.updateOne({_id:id}, {$set:{descripcion, id_curso, id_aspirante, fecha_inscripcion, hora_semanal, valor_cancelado}})
    .then((inscripcion)=>res.json({descripcion}))
    .catch((error)=>res.json({message:error}))
})

module.exports=router