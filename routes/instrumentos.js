const { Router } = require('express');
const router = Router();

const {
	mostarInstrumentos
} = require('../controllers/Instrumento');

// Create

router.get("/mostrar", mostarInstrumentos)

module.exports = router;