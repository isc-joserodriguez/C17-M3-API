//! 1.- Importar elementos necesarios (express/controladores)
require('dotenv').config();
const express = require('express');
const {
  crearUsuario,
  obtenerUsuarioPorId,
  obtenerTodosLosUsuarios,
  actualizarUsuario,
  crearHelado,
  obtenerHeladoPorId,
  obtenerTodosLosHelados,
} = require('./controllers');

//! 2.- Instanciar express
const app = express();
//! 3.- Funciones ""especiales""" - Middlewares
app.use(express.json()); //! Esto sirve para indicar que vamos a usar JSON (body)
//! 4.- Creación de rutas
app.get('/', (request, response) => {
  response.json({
    mensaje: 'Hola, esta es la API C17!!!',
    mensajeEnvVar: process.env.MENSAJE,
  });
});

app.post('/users', crearUsuario);
app.get('/users', obtenerTodosLosUsuarios);
app.get('/users/:id', obtenerUsuarioPorId);
app.put('/users/:id', actualizarUsuario);

app.post('/helados', crearHelado);
app.get('/helados', obtenerTodosLosHelados);
app.get('/helados/:id', obtenerHeladoPorId);

//! 5.- Levantar servidor

app.listen(process.env.PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + process.env.PORT);
});

// MERN
// MongoDB
// Express.js
// React
// Node.js
