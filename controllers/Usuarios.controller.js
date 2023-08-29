//! 1.- Importar lo necesario
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const obtenerTodosLosUsuarios = async (request, response) => {
  try {
    const usuarios = await Usuario.find();
    if (!usuarios.length)
      return response.status(404).json({
        mensaje: 'Tienes una colección vacía',
      });
    response.status(200).json({
      mensaje: 'Obtener todos los usuarios',
      data: usuarios,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el server',
    });
  }
};

const obtenerUsuarioPorId = async (request, response) => {
  try {
    const { id } = request.params;
    const usuario = await Usuario.find(id);
    if (!usuario)
      return response.status(404).json({
        mensaje: 'Usuario no encontrado',
      });
    response.status(200).json({
      mensaje: 'Obtener un usuario',
      data: usuario,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

const actualizarUsuario = async (request, response) => {
  try {
    const { id } = request.params;
    const usuarioExists = await Usuario.findById(id);
    if (!usuarioExists)
      return response.status(404).json({
        mensaje: 'Usuario no encontrado',
      });
    const { nombre, apellido, edad } = request.body;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      { nombre, apellido, edad },
      { new: true }
    );

    response.status(200).json({
      mensaje: 'Usuario actualizado',
      data: usuarioActualizado,
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

const borrarUsuario = async (request, response) => {
  try {
    const { id } = request.params;
    const usuarioExists = await Usuario.findById(id);
    if (!usuarioExists)
      return response.status(404).json({
        mensaje: 'Usuario no encontrado',
      });

    //! Eliminado físico
    const resp = await Usuario.findByIdAndDelete(id);

    //! Eliminado lógico
    /* const resp = await Usuario.findByIdAndUpdate(
      id,
      { status: 'inactivo' },
      { new: true }
    ); */

    response.status(200).json({
      mensaje: 'Usuario eliminado',
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
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  borrarUsuario,
};

//! export default Componente; // Webpack, rollup, browserify, etc.
