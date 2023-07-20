const UsuariosControllers = require('./usuarios.controller');
const HeladosControllers = require('./helados.controller');

module.exports = {
  ...UsuariosControllers,
  ...HeladosControllers,
};
