const { Schema, model } = require('mongoose');
const InstrumentoSchema = new Schema({
    ITEM: {
        type: Number,
        required: false,
    },
    TAG: {
        type: String,
        required: false,
    },
    "TIPO INSTRUMENTO": {
        type: Number,
        required: false,
    },
    SERVICIO: {
        type: String,
        required: false,
    },
    DEPARTAMENTO: {
        type: String,
        required: false,
    },
    ETAPA: {
        type: String,
        required: false,
    },
    DENOMINACION: {
        type: String,
        required: false,
    },
    EQUIPO: {
        type: String,
        required: false,
    },
    CRITICIDAD: {
        type: Number,
        required: false,
    },
    MARCA: {
        type: String,
        required: false,
    },
    MODELO: {
        type: String,
        required: false,
    },
    "TIPO SEÑAL": {
        type: String,
        required: false,
    },
    RANGO: {
        type: String,
        required: false,
    },
    UNIDAD: {
        type: String,
        required: false,
    },
    FRECUENCIA: {
        type: String,
        required: false,
    },
    ESTADO: {
        type: String,
        required: false,
    },
    PMA: {
        type: String,
        required: false,
    }


});

module.exports = model('Instrumento', InstrumentoSchema);