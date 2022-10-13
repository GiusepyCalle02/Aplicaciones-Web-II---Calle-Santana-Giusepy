//mongodb+srv://GiusepyCalle:<password>@cluster0.wh96jpw.mongodb.net/test

//mongodb://localhost:27017

//A continuación ubicamos los requisitos que necesitamos para trabajar
//nos permite enlazar con archivos, librerias y con librerias instaladas con el npm
//en este caso la libreria mongoose que instalamos la llamamos con esa linea
const mongoose = require('mongoose');


//cadena de conexión con la base de datos
const connectionURL = "mongodb+srv://GiusepyCalle:giusepy@cluster0.wh96jpw.mongodb.net/test";

( async ()=>{

    try
    {

        //conectarse a la base de datos
        const stateConnection = await mongoose.connect(connectionURL);

        //Curso (id, descripcion, fechaInicio, NumCurso, NumEstudiantes)
        //Aspirante (id, nombre, apellido, identificación, teléfono)
        //Inscripción (id, idCurso, idAspirante, fechaInscripcion, horaSemanal, valorCancelado)

        const curso = mongoose.model("curso", {descripcion: String, fechaInicio: String, numCurso: Number, numEstudiantes: Number });
        const aspirante = mongoose.model("aspirante", {nombre: String, apellido: String, identificacion: String, telefono: String });
        const inscripcion = mongoose.model("inscripcion", 
        {
            idCurso: {type: mongoose.Types.ObjectId, ref:"curso"},
            idAspirante: {type: mongoose.Types.ObjectId, ref:"aspirante"},
            fechaInscripcion: String,
            horaSemanal: Number,
            valorCancelado: Number,

        });


        const curso1 = new curso ({descripcion:"Curso de Reparación de Computadoras", 
        fechaInicio:"15 de Octubre del 2022", numCurso: 100, numEstudiantes: 20});
        const savecurso = await curso1.save();

        const aspirante1 = new aspirante ({nombre: "Giusepy", apellido: "Calle", 
        identificaion: "1677", telefono: "0928472"});
        const saveaspirante = await aspirante1.save();

        const inscripcion1 = new inscripcion(
            {
                fechaInscripcion: "5 de Octubre del 2022",
                horaSemanal: 4,
                valorCancelado: 30,
                idAspirante: saveaspirante._id,
                idCurso: savecurso._id
            }
        );

        const saveinscripcion = await inscripcion1.save();


        const result =   await inscripcion.find()
        .populate("idCurso")
        .populate("idAspirante");
  

        console.log(result[result.length-1])

        //for(let i of horaSemanal)
        //{
        //    const prueba = await inscripcion.find(i)
        //    console.log(prueba);
        //}
        
        //const prueba = await inscripcion.find({horaSemanal})
        //console.log(prueba);
    }
    
    catch (error) {
        console.log(error.message);       
    }
})();

    


