const express =require("express")
const mongoose=require("mongoose")
const routerInscripcion=require("./src/inscripcion")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api", routerInscripcion)


app.get("/", (req, res)=>{
    res.send("bien!")
})
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/inscripcion")
.then(()=>console.log("connected to mongodb"))
.catch((error)=>console.log(error))

app.listen(5000,()=>{
    console.log("listening on port 5000")
})