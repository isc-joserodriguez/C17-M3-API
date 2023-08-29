//! 1.- Importar todo lo necesario.
const express = require('express');

const router = express.Router();
//! 2.- Importar Controladores
const {
  crearProveedor,
  obtenerTodosLosProveedores,
  obtenerProveedorPorId,
  actualizarProveedor,
  borrarProveedor,
} = require('../controllers');
const auth = require('../middleware/auth');

//! 3.- Crear rutas "Raíz"
router.post('/', auth, crearProveedor);
router.get('/', /* auth, */ obtenerTodosLosProveedores);
router.get('/:id', auth, obtenerProveedorPorId);
router.put('/:id', auth, actualizarProveedor);
router.delete('/:id', auth, borrarProveedor);

//! 4.- Exportar rutas
module.exports = router;
