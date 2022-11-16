const express = require('express'); //REQUERIMOS EXPRESS

//CONFIG PUERTO
const port = process.env.PORT || 5000;

//RUTAS
const aspirante_route = require('./routes/inscripcion')

//INICIALIZAR EXPRESS
const app = express();

//CONFIG SERVER
app.use(express.json());

//USO DE RUTA
app.use('/api', inscripcion_route);

//CONFIG APP
app.listen(port, function() {
    console.log("API Rest corriendo en el puerto: " + port);
    console.log("CONEXION CORRECTA");
});