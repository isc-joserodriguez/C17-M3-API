//! 1.- Importar todo lo necesario.
const express = require('express');

const router = express.Router();
//! 2.- Importar Controladores
const {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  borrarUsuario,
} = require('../controllers');

//! 3.- Crear rutas "Raíz"
router.get('/', obtenerTodosLosUsuarios);
router.get('/:id', obtenerUsuarioPorId);
router.put('/:id', actualizarUsuario);
router.delete('/:id', borrarUsuario);

//! 4.- Exportar rutas
module.exports = router;
