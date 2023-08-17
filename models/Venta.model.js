/**
 * 1.- Importar mongoose
 * 2.- Crear el esquema
 * 3.- Exportar el modelo
 */

//! 1.- Importar paquetes de node
const mongoose = require('mongoose');

//! 2.- Crear el esquema
const VentaSchema = new mongoose.Schema(
  {
    cliente: {
      type: mongoose.ObjectId,
      ref: 'Usuario',
    },
    productos: [
      {
        producto: {
          //! El nombre de esta propiedad no es relevante, lo que importa es su ref
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Helado', //! Esto indica que se hace referencia hacia el modelo de "Helado"
        },
        cantidad: {
          type: Number,
          required: true,
        },
        precioUnitario: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//! 3.- Exportar el modelo
mongoose.model('Venta', VentaSchema, 'venta');
