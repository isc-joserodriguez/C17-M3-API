//! 1.- Importar elementos necesarios (express/controladores)
require('dotenv').config();
require('./models');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
//! 1.1.- Importar ruteo Principal
const routes = require('./routes');
//! 2.- Instanciar express
const app = express();
//! 3.- Funciones ""especiales""" - Middlewares
app.use(cors()); //! Esto sirve para evitar el error de CORS
app.use(express.json()); //! Esto sirve para indicar que vamos a usar JSON (body)
//! 4.- Definir ruteo de la API
app.use('/v1', routes)

//! 5.- Levantar servidor

app.listen(process.env.PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + process.env.PORT);
});

// MERN
// MongoDB
// Express.js
// React
// Node.js
