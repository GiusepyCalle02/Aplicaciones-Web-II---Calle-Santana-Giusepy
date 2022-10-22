//express es un microframework minimalista para controlar del lado del servidor lo que es una pagina web

//nom init --y
//npm i express = facilita el trabajo para crear un servicio http
//npm i cors = libreria que vamos a requerir


const path = require("path");

const express = require("express");
const cors =  require("cors"); //libreria para aramar una especie de lista blanca que permita hacer conexión

const PUERTO = 8081;

//En variables añadimos las rutas de los html
const urlCurso = path.join(__dirname,"./curso.html")
const urlAspirante = path.join(__dirname,"./aspirante.html")
const urlInscripcion = path.join(__dirname,"./inscripcion.html")

 
//Creamos una instancia del express
const server =  express(); 

//En el express indicamos que vamos a trabajar con cors, es decir 
//que tenga acceso de una ip de un servidor externo
server.use(cors()).use(express.json()) 

//Indicamos una ruta get principal (vinculada a curso)
server.get('/', functionIndex )

//Indicamos una ruta get para Curso
server.get('/curso', (req,res)=>{
    res.status(200).sendFile(urlCurso);
   
})

//Indicamos una ruta get para Aspirante
server.get('/aspirante', (req,res)=>{
    res.status(200).sendFile(urlAspirante);
    
})

//Indicamos una ruta get para Inscripcion
server.get('/inscripcion', (req,res)=>{
    res.status(200).sendFile(urlInscripcion);
    
})

//Indicamos una ruta get de prueba de tipo json
server.get('/test',(req,res)=>{
    res.status(200).json({
        'message':'Problem with application web!!!!!!!!!'
    })
})

//server.use((req,res, next)=>{
//    res.status(400).sendFile(urlError);
//})



function functionIndex (req, res){
    res.status(200).sendFile(urlCurso);
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})