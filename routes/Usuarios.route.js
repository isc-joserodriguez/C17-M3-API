//! 1.- Importar todo lo necesario.
const express = require('express');

const router = express.Router();
//! 2.- Importar Controladores
const {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
} = require('../controllers');

//! 3.- Crear rutas "Raíz"
router.post('/', crearUsuario);
router.get('/', obtenerTodosLosUsuarios);
router.get('/:id', obtenerUsuarioPorId);
router.put('/:id', actualizarUsuario);
//! 4.- Exportar rutas
module.exports = router;
