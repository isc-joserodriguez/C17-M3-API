//! 1.- Importar lo necesario
const mongoose = require('mongoose');
const Helado = mongoose.model('Helado');

const crearHelado = async (request, response) => {
  try {
    if (request.user.rol !== 'Administrador')
      return response.status(401).json({
        mensaje: 'Sólo un Administrador puede crear helados',
      });
    const { nombre, sabor, precio } = request.body;

    //! Crea a un helado nuevo
    const helado = new Helado({
      nombre,
      sabor,
      precio,
    });

    const resp = await helado.save();

    response.status(201).json({
      mensaje: 'Helado guardado ',
      data: resp,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'No se pudo guardar el helado',
    });
  }
};

const obtenerTodosLosHelados = async (request, response) => {
  try {
    const helados = await Helado.find();
    if (!helados.length)
      return response.status(404).json({
        mensaje: 'Tienes una colección vacía',
      });
    response.status(200).json({
      mensaje: 'Obtener todos los helados',
      data: helados,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el server',
    });
  }
};

const obtenerHeladoPorId = async (request, response) => {
  try {
    const { id } = request.params;
    const helado = await Helado.findById(id);
    if (!helado)
      return response.status(404).json({
        mensaje: 'Helado no encontrado',
      });
    response.status(200).json({
      mensaje: 'Obtener un helado',
      data: helado,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

const actualizarHelado = async (request, response) => {
  try {
    const { id } = request.params;
    const heladoExists = await Helado.findById(id);
    if (!heladoExists)
      return response.status(404).json({
        mensaje: 'Helado no encontrado',
      });
    const { nombre, sabor, precio } = request.body;
    const heladoActualizado = await Helado.findByIdAndUpdate(
      id,
      { nombre, sabor, precio },
      { new: true }
    );

    response.status(200).json({
      mensaje: 'Helado actualizado',
      data: heladoActualizado,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

const borrarHelado = async (request, response) => {
  try {
    const { id } = request.params;
    const heladoExists = await Helado.findById(id);
    if (!heladoExists)
      return response.status(404).json({
        mensaje: 'Helado no encontrado',
      });
    const resp = await Helado.findByIdAndDelete(id);

    response.status(200).json({
      mensaje: 'Helado eliminado',
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
  crearHelado,
  obtenerTodosLosHelados,
  obtenerHeladoPorId,
  actualizarHelado,
  borrarHelado,
};

//! export default Componente; // Webpack, rollup, browserify, etc.
