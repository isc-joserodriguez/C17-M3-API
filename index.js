//! 1.- Importar express
const express = require('express');
const users = [];
const helados = [
  {
    sabor: 'Melocotón',
    marca: 'Holanda',
    precio: 2,
    contenido: 0.5,
  },
];
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

app.get('/helados', (req, res) => {
  res.json({
    mensaje: 'Obtener todos los helados',
    data: helados,
  });
});

app.post('/helados', (req, res) => {
  const { sabor, marca, precio, contenido } = req.body;
  helados.push({ sabor, marca, precio, contenido });
  res.json({
    mensaje: 'Creaste un nuevo helado',
    data: helados,
  });
});

//! 5.- Levantar servidor
const PORT = 3006;
app.listen(PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + PORT);
});


// MERN
// MongoDB
// Express.js
// React
// Node.js