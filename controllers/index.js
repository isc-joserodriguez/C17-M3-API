const UsuariosControllers = require('./Usuarios.controller');
const HeladosControllers = require('./Helados.controller');
const AuthControllers = require('./Auth.controller');
const ProveedorControllers = require('./Proveedor.controller');
const VentasControllers = require('./Ventas.controller');

module.exports = {
  ...UsuariosControllers,
  ...HeladosControllers,
  ...AuthControllers,
  ...ProveedorControllers,
  ...VentasControllers,
};
