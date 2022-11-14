const Instrumento = require('../models/Instrumento');
const { response } = require('express');


const mostarInstrumentos = async (req, res) => {
	const i = await Instrumento.find();
	return res.json(i);
};


module.exports = {
    mostarInstrumentos
};
