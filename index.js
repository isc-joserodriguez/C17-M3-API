//! 1.- Configurar env vars
require('dotenv').config();
//! 2.- Importar Modelos
require('./models');
//! 3.- Importar Librerías/Bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
//! 4.- Conexión a Mongo

//! 1.1.- Importar ruteo Principal
//! 2.- Instanciar express
//! 3.- Funciones ""especiales""" - Middlewares
app.use(cors()); //! Esto sirve para evitar el error de CORS
app.use(express.json()); //! Esto sirve para indicar que vamos a usar JSON (body)

mongoose.connect(process.env.MONGO_URI);

//! 4.- Definir ruteo de la API
app.use('/v1', routes);

//! 5.- Levantar servidor

app.listen(process.env.PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + process.env.PORT);
});

// MERN
// MongoDB
// Express.js
// React
// Node.js
