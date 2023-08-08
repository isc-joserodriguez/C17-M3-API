//! 1.- Importar todo lo necesario.
const express = require('express');
const router = express.Router();
//! 2.- Importar ruteadores
const usuariosRouter = require('./Usuarios.route');
const heladosRouter = require('./Helados.route');
const authRouter = require('./Auth.route');
//! 3.- Crear rutas "Raíz"
router.get('/', (request, response) => {
  response.json({
    mensaje: 'Hola, esta es la API C17!!!',
    mensajeEnvVar: process.env.MENSAJE,
  });
});
//! 4.- Ruteo
router.use('/usuarios', usuariosRouter);
router.use('/helados', heladosRouter);
router.use('/auth', authRouter);
//! 5.- Exportar rutas
module.exports = router;
