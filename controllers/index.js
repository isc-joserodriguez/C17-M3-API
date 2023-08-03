const {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
} = require('./Usuarios.controller');
const {
  crearHelado,
  obtenerTodosLosHelados,
  obtenerHeladoPorId,
} = require('./Helados.controller');

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
};
