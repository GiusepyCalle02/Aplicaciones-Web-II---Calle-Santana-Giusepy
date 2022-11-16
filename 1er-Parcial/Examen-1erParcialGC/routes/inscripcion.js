const express = require('express');
const { validarUsuario } = require('../middleware/validarUsuario');



const {
    createInscripcion,

} = require('../controllers').Inscripcion;

//TRAEMOS EL ENRUTAMIENTO DE EXPRESS
const api = express.Router();

//CREAMOS RUTA PARA EL POST
api.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createInscripcion);

api.put('/:id', updateCategory);

//Elaboramos una copia de la Inscripcion
var copy = Object.assign({createInscripcion},obj)
//Mostramos los datos de la inscripción guardados en la variable copy
console.log(copy);

module.exports = api;