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
const auth = require('../middleware/auth');

//! 3.- Crear rutas "Raíz"
router.get('/', auth, obtenerTodosLosUsuarios);
router.get('/:id', auth, obtenerUsuarioPorId);
router.put('/:id', auth, actualizarUsuario);
router.delete('/:id', auth, borrarUsuario);

//! 4.- Exportar rutas
module.exports = router;
