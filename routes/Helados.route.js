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

//! 3.- Crear rutas "Raíz"
router.post('/', crearHelado);
router.get('/', obtenerTodosLosHelados);
router.get('/:id', obtenerHeladoPorId);
router.put('/:id', actualizarHelado);
router.delete('/:id', borrarHelado);

//! 4.- Exportar rutas
module.exports = router;
