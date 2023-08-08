/**
 * 1.- Importar mongoose
 * 2.- Crear el esquema
 * 3.- Exportar el modelo
 */

//! 1.- Importar mongoose
const mongoose = require('mongoose');
const crypto = require('crypto');

//! 2.- Crear el esquema
//! ESTO FUNCIONA COMO UNA PLANTILLA
//! VALIDA DATOS
//! PERMITE MOSTRAR MENSAJES DE ERROR.
const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  correo: String,
  telefono: String,
  avatar: String,
  password: String,
  salt: String,
});

UsuarioSchema.methods.encrypt = function (password, salt) {
  return crypto
    .pbkdf2Sync(password, salt, 10000, 512, 'sha512')
    .toString('hex');
};

UsuarioSchema.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = this.encrypt(password, this.salt);
};

UsuarioSchema.methods.verifyPassword = function (password) {
  return this.password === this.encrypt(password, this.salt);
};

//! 3.- Exportar el modelo
//! Parametro 1: Nombre de mi esquema
//! Parametro 2: Esquema
//! Parametro 3: Nombre de la coleccion
mongoose.model('Usuario', UsuarioSchema, 'usuario');
