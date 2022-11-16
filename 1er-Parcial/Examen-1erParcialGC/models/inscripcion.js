const { model, Schema } = require('mongoose');

const InscripcionSchema = Schema(
    {
        fechaInscripcion:{
            type: String,
            required: [ true, 'La fecha de inscripción es necesaria'],
            unique:true
        },
        horaSemanal:{
            type: String,
            required: [ true, 'La hora semanal es necesaria'],
            unique:true
        },
        valorCancelado:{
            type: String,
            required: [ true, 'El valor cancelado es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Inscripcion', InscripcionSchema );

