/**
 * 1.- Importar mongoose
 * 2.- Crear el esquema
 * 3.- Exportar el modelo
 */

//! 1.- Importar mongoose
const mongoose = require('mongoose');

//! 2.- Crear el esquema
//! ESTO FUNCIONA COMO UNA PLANTILLA
//! VALIDA DATOS
//! PERMITE MOSTRAR MENSAJES DE ERROR.
const HeladoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Mensaje custom'],
    },
    sabor: String,
    precio: Number,
    proveedor: {
      type: mongoose.ObjectId,
      ref: 'Proveedor',
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

//! 3.- Exportar el modelo
//! Parametro 1: Nombre de mi esquema
//! Parametro 2: Esquema
//! Parametro 3: Nombre de la coleccion
mongoose.model('Helado', HeladoSchema, 'helado');
