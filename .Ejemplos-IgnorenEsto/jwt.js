const jwt = require('jsonwebtoken');
const secret = 'PalabraSecretaQueNoDebemosExponerYDebeEstarResguardada';
let tokenGenerado = null;

//! 1.- Generar un token
const generarToken = () => {
  tokenGenerado = jwt.sign(
    { idUser: 147, userRole: 'Admin' },
    secret /* , {
    expiresIn: 10000,
  } */
  );
  return tokenGenerado;
};

console.log(generarToken());
//! 2.- Verificar un token
const verificarToken = (token) => {
  return jwt.verify(token, secret);
};

setTimeout(() => {
  console.log(verificarToken(tokenGenerado));
}, 2000);
