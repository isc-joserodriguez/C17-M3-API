//! 1.- Importar todo lo necesario.
const express = require('express');

const router = express.Router();
//! 2.- Importar Controladores
const {
  crearVenta,
  obtenerTodasLasVentas,
  obtenerVentaPorId,
} = require('../controllers');
const auth = require('../middleware/auth');

//! 3.- Crear rutas "Raíz"
router.post('/', auth, crearVenta);
router.get('/', auth, obtenerTodasLasVentas);
router.get('/:id', auth, obtenerVentaPorId);

//! 4.- Exportar rutas
module.exports = router;
