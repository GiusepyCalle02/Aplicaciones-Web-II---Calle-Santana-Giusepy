
const express=require("express")
const aspiranteSchema=require("./model/aspirante")
const router=express.Router()



router.get("/aspirante",(req, res)=>{
    aspiranteSchema.find()
    .then((data)=>res.send(data))
    .catch((error)=>res.send({message:error}))
})

router.post("/aspirante",(req,res)=>{
    const aspirante=aspiranteSchema(req.body)
    aspirante.save()
    .then(()=>res.send("Aspirante creado con éxito"))
    .catch((error)=>res.send({message:error}))
})


router.get("/aspirante/:id", (req, res)=>{
const {id}=req.params
aspiranteSchema.findById(id)
.then((data)=>res.send(data))
.catch((error)=>res.send({message:error}))
})


router.put("/aspirante/:id",(req, res)=>{
const {id}=req.params
const {nombre, apellido ,cedula, telefono }=req.body
aspirante.updateOne({_id: id}, {$set: {nombre, apellido ,cedula, telefono }})
.then((data)=>res.send(data))
.catch((error)=> res.send({message:error}))
})


router.delete("/aspirante/:id",(req, res)=>{
    const {id}=req.params
    aspiranteSchema.deleteOne({_id:id})
    .then((data)=>res.send(data))
    .catch((error)=>res.send(error))
    })


module.exports=router