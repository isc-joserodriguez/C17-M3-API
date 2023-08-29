/**
 * 1.- Importar mongoose
 * 2.- Crear el esquema
 * 3.- Exportar el modelo
 */

//! 1.- Importar paquetes de node
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

//! 2.- Crear el esquema
//! ESTO FUNCIONA COMO UNA PLANTILLA
//! VALIDA DATOS
//! PERMITE MOSTRAR MENSAJES DE ERROR.
const UsuarioSchema = new mongoose.Schema(
  {
    nombre: String,
    apellido: String,
    edad: {
      type: Number,
      min: [20, 'Debe tener mínimo 20 años.'],
    },
    correo: {
      type: String,
      required: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email inválido'],
      unique: true,
    },
    rol: {
      type: String,
      enum: ['cliente', 'Administrador', 'Vendedor'],
      default: 'cliente',
    },
    password: String,
    salt: String,
  },
  {
    timestamps: true,
  }
);

UsuarioSchema.plugin(uniqueValidator, { message: 'El correo ya existe' });

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

UsuarioSchema.methods.generateJWT = function () {
  return jwt.sign({ idUser: this._id, rol: this.rol }, process.env.JWT_SECRET, {
    expiresIn: 30 * 24 * 60 * 60 * 1000,
  });
};

//! 3.- Exportar el modelo
//! Parametro 1: Nombre de mi esquema
//! Parametro 2: Esquema
//! Parametro 3: Nombre de la coleccion
mongoose.model('Usuario', UsuarioSchema, 'usuario');
