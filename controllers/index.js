const UsuariosControllers = require('./Usuarios.controller');
const HeladosControllers = require('./Helados.controller');

module.exports = {
  ...UsuariosControllers,
  ...HeladosControllers,
};
