//! 1.- Importar todo lo necesario.
const express = require('express');

const router = express.Router();
//! 2.- Importar Controladores
const {
  crearHelado,
  obtenerTodosLosHelados,
  obtenerHeladoPorId,
  actualizarHelado,
  borrarHelado,
} = require('../controllers');
const auth = require('../middleware/auth');

//! 3.- Crear rutas "Raíz"
router.post('/', auth, crearHelado);
router.get('/', auth, obtenerTodosLosHelados);
router.get('/:id', auth, obtenerHeladoPorId);
router.put('/:id', auth, actualizarHelado);
router.delete('/:id', auth, borrarHelado);

//! 4.- Exportar rutas
module.exports = router;
