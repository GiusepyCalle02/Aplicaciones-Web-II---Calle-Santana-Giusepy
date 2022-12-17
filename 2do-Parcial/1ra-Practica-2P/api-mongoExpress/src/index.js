const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const userRoutes=require("./routes/inscripcion")
const app=express()
const port= process.env.PORT || 4000

app.use(express.json())
//middleware
app.use("/api", userRoutes)



app.get("/", (req, res)=>{
res.send("Práctica realizada por Giusepy Calle")
})


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_CNN).then(()=>{
    console.log("Base de datos conectada")
}).catch((error)=>{
    console.log(error)
})


app.listen(port,()=>{
    console.log("listening on port", port)
}) 




