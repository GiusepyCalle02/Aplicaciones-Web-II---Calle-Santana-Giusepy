
const cursoSchema=require("./model/curso")
const express=require("express")
const router=express.Router()

router.get("/curso",(req, res)=>{
    cursoSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})


router.post("/curso", (req, res)=>{
const curso=cursoSchema(req.body)
curso.save()
.then((data)=> res.send(data))
.catch((error)=>res.send({message:error}))
})


router.get("/curso/:id",(req, res)=>{
const {id}=req.params
cursoSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/curso/:id",(req, res)=>{
const {id}=req.params
const {descripcion, fechaInicio, numCurso, numEstudiante}=req.body
cursoSchema.updateOne({_id:id}, {$set: {descripcion, fechaInicio, numCurso, numEstudiante}})
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})



router.delete("/curso/:id",(req, res)=>{
const {id}=req.params
cursoSchema.deleteOne({_id:id})
.then((data)=>res.send(data))
.catch((error)=>res.send(error))
})

module.exports=router