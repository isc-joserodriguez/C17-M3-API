const UsuariosControllers = require('./Usuarios.controller');
const HeladosControllers = require('./Helados.controller');
const AuthControllers = require('./Auth.controller');
const ProveedorControllers = require('./Proveedor.controller');

module.exports = {
  ...UsuariosControllers,
  ...HeladosControllers,
  ...AuthControllers,
  ...ProveedorControllers,
};
