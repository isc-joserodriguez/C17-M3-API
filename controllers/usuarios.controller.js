const users = [];

const crearUsuario = (request, response) => {
  //! Crea a un usuario nuevo
  const { nombre, edad, correo, password, telefono, apellido, otra } =
    request.body;
  users.push({
    nombre,
    edad,
    correo,
    password,
    telefono,
    apellido,
    otra,
  });
  response.json({
    mensaje: 'Usuario guardado ',
    data: users,
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
