//! Este middleware va a validar el token

const { expressjwt: jwt } = require('express-jwt');

//! Función para el middleware

const getToken = (req) => {
  //! ["Bearer", "asd.fghj.ewrwer"]
  const { authorization } = req.headers;

  if (!authorization) return null;

  const [type, token] = authorization.split(' '); //! Desestructuración de un array

  /* return  type === 'Bearer' || type === 'Token' || type === 'Basic'
    ? token
    : null; */

  return ['Bearer', 'Token', 'Basic'].includes(type) ? token : null;
};

//! Middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'user',
  getToken,
});

module.exports = auth;
