//por ahora cambiar el nombre de la carpeta public por la que ponga
//borrar los mensajes de servicio rest y ruta

//Agregamos las librerias que instalamos
const cors = require("cors");
const express = require("express");

//Inicializamos el express
const app = express();
const PUERTO = 3000;

//Middleword del cors y del express
app.use(cors()).use(express.json())
//Publicamos de forma estática todo el contenido de una carpeta
app.use('/publico', express.static(__dirname+'/publico') )


//servicio REST
//Mi ruta seleccionada es Aspirante

//los métodos se homologan con el crud, osea el create, read, update, delete, se homologan con el método
//que tenemos, ejem get se homologa con read(consultar), post se homologa con el create(agregar),
// put/patch se homologa con update(modificar)
//con put nos referimos a una coleccion de datos y con patch solo a un elemento de la colección

let aspirantes = [];


//Método get que nos devuelve toda la colección que tiene aspirantes
app.get('/', (req,res)=>{
    res.status(200).send(
        aspirantes
    )
})

//Método get que nos devuelve el dato correspondiente de la identificación que ingresemos
app.get('/:identification', (req,res)=>{
    const {identification} =  req.params;
    // req.params.identification
    let result = aspirantes.filter(p => p.identification === identification);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})

//Método post que crea un nuevo elemento
app.post('/', (req,res)=>{
    const {body} = req;
    // req.body.name
    // req.body.address
    aspirantes.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})

//Método put que nos permita modificar los datos de un elemento
//en este caso lo modifica según la identificación
app.put('/', (req,res)=>{
    const {identification, name, lastname, phone } = req.body;
    
    
    let aspirante =  aspirantes.filter(p=> p.identification === identification)[0] || {}
    

    aspirante.name = name;
    aspirante.lastname = lastname;
    aspirante.phone = phone;


    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: aspirante
        }
    )

})

//Método delete, que borra un elemento de la colección
app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    aspirantes = aspirantes.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el aspirante con éxito!"
    })
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})