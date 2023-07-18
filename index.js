//! 1.- Importar express
const express = require('express');
//! 2.- Instanciar express
const app = express();
//! 3.- Funciones ""especiales""" - Middlewares
app.use(express.json());
//! 4.- Creación de rutas
app.get('/', (request, response) => {
  response.json({
    mensaje: 'Hola, esta es la API C17!!!',
  });
});

//! 5.- Levantar servidor
const PORT = 3006;
app.listen(PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + PORT);
});
