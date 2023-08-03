//! 1.- Importar lo necesario
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const users = [];

const crearUsuario = async (request, response) => {
  //! Crea a un usuario nuevo
  const { nombre, edad, telefono, apellido, avatar } = request.body;

  const usuario = new Usuario({
    nombre,
    edad,
    telefono,
    apellido,
    avatar,
  });

  const resp = await usuario.save();

  response.json({
    mensaje: 'Usuario guardado ',
    data: resp,
  });
};

const obtenerTodosLosUsuarios = (request, response) => {
  response.json({
    mensaje: 'Obtener todos los usuarios',
    data: users,
  });
};

const obtenerUsuarioPorId = (request, response) => {
  const { id } = request.params;
  response.json({
    mensaje: 'Obtener un usuario',
    data: users[Number(id)],
  });
};

const actualizarUsuario = (request, response) => {
  const { id } = request.params;
  const { nombre, edad, correo, password, telefono, apellido, otra } =
    request.body;
  users[Number(id)] = {
    nombre,
    edad,
    correo,
    password,
    telefono,
    apellido,
    otra,
  };
  response.json({
    mensaje: 'Usuario actualizado',
    data: users,
  });
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
};

//! export default Componente; // Webpack, rollup, browserify, etc.
