//mongodb+srv://GiusepyCalle:<password>@cluster0.wh96jpw.mongodb.net/test


//A continuación ubicamos los requisitos que necesitamos para trabajar
//nos permite enlazar con archivos, librerias y con librerias instaladas con el npm
//en este caso la libreria mongoose que instalamos la llamamos con esa linea
const mongoose = require('mongoose');


//cadena de conexión con la base de datos
const connectionURL = "mongodb+srv://GiusepyCalle:giusepy@cluster0.wh96jpw.mongodb.net/test";

( async ()=>{

    try
    {
        //-----------------------------------------------------------------------------
        // linea para conectarse a la base de datos
        const stateConnection = await mongoose.connect(connectionURL);
        //-----------------------------------------------------------------------------


        //________________________________________________________________________________________
        //Curso (id, descripcion, fechaInicio, NumCurso, NumEstudiantes)
        //Aspirante (id, nombre, apellido, identificación, teléfono)
        //Inscripción (id, idCurso, idAspirante, fechaInscripcion, horaSemanal, valorCancelado)

        //Definimos nuestras entidades con sus atributos
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
        //_______________________________________________________________________________________________




        //_______________________________________________________________________________________________
        //Instanciamos como objeto la entidad de curso y llenamos sus atributos
        const curso1 = new curso ({descripcion:"Curso de Reparación de Computadoras", 
        fechaInicio:"15 de Octubre del 2022", numCurso: 100, numEstudiantes: 20});
        //creamos una variable y aplicamos la función save para guardar los datos en la base de datos
        const savecurso = await curso1.save();
        //________________________________________________________________________________________________


        //________________________________________________________________________________________________
        //Instanciamos como objeto la entidad de aspirante y llenamos sus atributos
        const aspirante1 = new aspirante ({nombre: "Giusepy", apellido: "Calle", 
        identificaion: "1677", telefono: "0928472"});
        //creamos una variable y aplicamos la función save para guardar los datos en la base de datos
        const saveaspirante = await aspirante1.save();
        //________________________________________________________________________________________________


        //________________________________________________________________________________________________
        //Instanciamos como objeto la entidad de inscripcion y llenamos sus atributos
        const inscripcion1 = new inscripcion(
            {
                fechaInscripcion: "5 de Octubre del 2022",
                horaSemanal: 4,
                valorCancelado: 30,
                idAspirante: saveaspirante._id,
                idCurso: savecurso._id
            }
        );
        //creamos una variable y aplicamos la función save para guardar los datos en la base de datos
        const saveinscripcion = await inscripcion1.save();
        //_________________________________________________________________________________________________


        const result =   await inscripcion.find()
        .populate("idCurso")
        .populate("idAspirante");
  

        console.log(result[result.length-1])



        //___________________________________________________________________________________________
        //Utilizamos el ciclo for in para mostrar los datos de la base de datos por consola
        for(let i in result)
        {
            console.log(result[i])
        }
        //Utilizamos el ciclo for of para mostrar los datos de la base de datos por consola
        for (let x of result) {
            console.log(x);
        }
        //___________________________________________________________________________________________
        
    }
    
    catch (error) {
        console.log(error.message);       
    }
})();

    


