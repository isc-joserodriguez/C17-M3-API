//! 1.- Importar express
const express = require('express');
const users = [];
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

app.post('/users', (request, response) => {
  const { nombre, edad, correo, password, telefono, apellido, otra } =
    request.body;
  users.push({
    nombre,
    edad,
    correo,
    password,
    telefono,
    apellido,
    otra,
  });
  response.json({
    mensaje: 'Usuario guardado ',
    data: users,
  });
});

app.get('/users', (request, response) => {
  response.json({
    mensaje: 'Obtener todos los usuarios',
    data: users,
  });
});

app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    mensaje: 'Obtener un usuario',
    data: users[Number(id)],
  });
});

//! 5.- Levantar servidor
const PORT = 3006;
app.listen(PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + PORT);
});
