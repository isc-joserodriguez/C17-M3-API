//! 1.- Importar lo necesario
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

const registro = async (request, response) => {
  try {
    const { password } = request.body;
    delete request.body.password;
    //! Crea a un usuario nuevo
    const usuario = new Usuario(request.body);

    usuario.hashPassword(password);

    await usuario.save();

    response.status(201).json({
      mensaje: 'Usuario guardado',
      data: {
        token: usuario.generateJWT(),
        info: {
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          rol: usuario.rol,
        },
      },
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'No se pudo guardar el usuario',
    });
  }
};

const iniciarSesion = async (request, response) => {
  try {
    const { correo, password } = request.body;
    const usuario = await Usuario.findOne({ correo });
    if (!usuario)
      return response.status(404).json({
        mensaje: 'Usuario no encontrado',
      });
    if (!usuario.verifyPassword(password))
      return response.status(401).json({
        mensaje: 'Contraseña inválida',
      });
    if (!usuario.status)
      return response.status(403).json({
        mensaje: 'El usuario está desactivado',
      });

    response.status(200).json({
      mensaje: 'Login correcto',
      data: {
        token: usuario.generateJWT(),
        info: {
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          rol: usuario.rol,
        },
      },
    });
  } catch (err) {
    console.error(err);
    response.status(400).json({
      mensaje: 'Error en el servidor',
    });
  }
};

module.exports = {
  registro,
  iniciarSesion,
};

//! export default Componente; // Webpack, rollup, browserify, etc.
