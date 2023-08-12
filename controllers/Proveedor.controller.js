//! 1.- Importar lo necesario
const mongoose = require('mongoose');
const Proveedor = mongoose.model('Proveedor');

const crearProveedor = async (request, response) => {
  try {
    const { nombre, telefono } = request.body;

    //! Crea a un proveedor nuevo
    const proveedor = new Proveedor({
      nombre,
      telefono,
    });

    const resp = await proveedor.save();

    response.status(201).json({
      mensaje: 'Proveedor guardado ',
      data: resp,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'No se pudo guardar el proveedor',
    });
  }
};

const obtenerTodosLosProveedores = async (request, response) => {
  try {
    const proveedores = await Proveedor.find();
    if (!proveedores.length)
      return response.status(404).json({
        mensaje: 'Tienes una colección vacía',
      });
    response.status(200).json({
      mensaje: 'Obtener todos los proveedores',
      data: proveedores,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el server',
    });
  }
};

const obtenerProveedorPorId = async (request, response) => {
  try {
    const { id } = request.params;
    const proveedor = await Proveedor.findById(id);
    if (!proveedor)
      return response.status(404).json({
        mensaje: 'Proveedor no encontrado',
      });
    response.status(200).json({
      mensaje: 'Obtener un proveedor',
      data: proveedor,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

const actualizarProveedor = async (request, response) => {
  try {
    const { id } = request.params;
    const proveedorExists = await Proveedor.findById(id);
    if (!proveedorExists)
      return response.status(404).json({
        mensaje: 'Proveedor no encontrado',
      });
    const { nombre, telefono } = request.body;
    const proveedorActualizado = await Proveedor.findByIdAndUpdate(
      id,
      { nombre, telefono },
      { new: true }
    );

    response.status(200).json({
      mensaje: 'Proveedor actualizado',
      data: proveedorActualizado,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

const borrarProveedor = async (request, response) => {
  try {
    const { id } = request.params;
    const proveedorExists = await Proveedor.findById(id);
    if (!proveedorExists)
      return response.status(404).json({
        mensaje: 'Proveedor no encontrado',
      });
    const resp = await Proveedor.findByIdAndDelete(id);

    response.status(200).json({
      mensaje: 'Proveedor eliminado',
      data: resp,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

module.exports = {
  crearProveedor,
  obtenerTodosLosProveedores,
  obtenerProveedorPorId,
  actualizarProveedor,
  borrarProveedor,
};

//! export default Componente; // Webpack, rollup, browserify, etc.
