//! 1.- Importar lo necesario
const mongoose = require('mongoose');
const Venta = mongoose.model('Venta');

const crearVenta = async (request, response) => {
  try {
    if (request.user.rol !== 'Administrador')
      return response.status(401).json({
        mensaje: 'Sólo un Administrador puede crear ventas',
      });

    //! Crea una venta nuevo
    const venta = new Venta(request.body);

    const resp = await venta.save();

    response.status(201).json({
      mensaje: 'Venta guardada',
      data: await resp.populate('productos.producto').populate('cliente'),
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'No se pudo guardar el venta',
    });
  }
};

const obtenerTodasLasVentas = async (request, response) => {
  try {
    const ventas = await Venta.find()
      .populate('productos.producto')
      .populate('cliente');
    if (!ventas.length)
      return response.status(404).json({
        mensaje: 'Tienes una colección vacía',
      });
    response.status(200).json({
      mensaje: 'Obtener todas las ventas',
      data: ventas,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el server',
    });
  }
};

const obtenerVentaPorId = async (request, response) => {
  try {
    const { id } = request.params;
    const venta = await Venta.findById(id)
      .populate('productos.producto')
      .populate('cliente');
    if (!venta)
      return response.status(404).json({
        mensaje: 'Venta no encontrada',
      });
    response.status(200).json({
      mensaje: 'Obtener una venta',
      data: venta,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

module.exports = {
  crearVenta,
  obtenerTodasLasVentas,
  obtenerVentaPorId,
};
