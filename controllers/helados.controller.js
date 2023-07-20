const helados = [
  {
    sabor: 'Melocotón',
    marca: 'Holanda',
    precio: 2,
    contenido: 0.5,
  },
];

const crearHelado = (req, res) => {
  const { sabor, marca, precio, contenido } = req.body;
  helados.push({ sabor, marca, precio, contenido });
  res.json({
    mensaje: 'Creaste un nuevo helado',
    data: helados,
  });
};

const obtenerTodosLosHelados = (req, res) => {
  res.json({
    mensaje: 'Obtener todos los helados',
    data: helados,
  });
};

const obtenerHeladoPorId = (req, res) => {
  const { id } = req.params.id;
  res.json({
    mensaje: 'Creaste un nuevo helado',
    data: helados[Number(id)],
  });
};

module.exports = {
  crearHelado,
  obtenerTodosLosHelados,
  obtenerHeladoPorId,
};
