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
const ProveedorSchema = new mongoose.Schema({
  nombre: String,
  telefono: String,
});

//! 3.- Exportar el modelo
//! Parametro 1: Nombre de mi esquema
//! Parametro 2: Esquema
//! Parametro 3: Nombre de la coleccion
mongoose.model('Proveedor', ProveedorSchema, 'proveedor');
