//! 1.- Configurar env vars
require('dotenv').config();

//! 2.- Importar Modelos
require('./models');

//! 3.- Importar Librerías/Bibliotecas
const express = require('express');
const connectionDB = require('./db/config');
const cors = require('cors');

//! 4.- Importar rutas
const routes = require('./routes');

//! 5.- Instanciar express
const app = express();

//! 6.- Funciones ""especiales""" - Middlewares
app.use(cors()); //! Esto sirve para evitar el error de CORS
app.use(express.json()); //! Esto sirve para indicar que vamos a usar JSON (body)

//! 6.- Conexión a Mongo
connectionDB();

//! 7.- Definir ruteo de la API
app.use('/v1', routes);

//! 8.- Levantar servidor

app.listen(process.env.PORT, () => {
  console.log('Iniciado mi servidor en el puerto ' + process.env.PORT);
});
