//! 1.- Importar todo lo necesario.
const express = require('express');

const router = express.Router();
//! 2.- Importar Controladores
const { registro, iniciarSesion } = require('../controllers');

//! 3.- Crear rutas "Raíz"
router.post('/register', registro);
router.post('/login', iniciarSesion);

//! 4.- Exportar rutas
module.exports = router;
