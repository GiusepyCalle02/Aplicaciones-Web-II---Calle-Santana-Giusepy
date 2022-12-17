const express=require("express")
const router=express.Router()
const inscripcionSchema=require("../models/inscripcionsch")
router.get("/", ()=>{
    
})


router.post("/inscripcion",(req, res)=>{
const inscripcion=inscripcionSchema(req.body);
inscripcion.save()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error})
)
})


router.get("/inscripcion",(req, res)=>{
inscripcionSchema.find()
.then((data)=>res.json(data))
.catch((error)=>res.json({message:error}))
})
    

router.put("/inscripcion/:id",(req, res)=>{
    const {id}=req.params;
    const {idCurso,idAspirante,fechaInscripcion,horaSemanal, valorCancelado}=req.body
    inscripcionSchema.updateOne({_id:id}, {$set:{idCurso,idAspirante,fechaInscripcion,horaSemanal, valorCancelado}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})


router.delete("/inscripcion/:id",(req, res)=>{
    const {id}=req.params;
    inscripcionSchema.remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}))
})




module.exports=router