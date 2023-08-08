const crypto = require('crypto');
const salt = 'secret';

const encriptar = (password) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('hex');
};

const passEncriptada = 'e191e66ea2c768a3992a';

if (passEncriptada === encriptar('pass1234')) {
  console.log('contra correcta');
} else {
  console.log('contra incorrecta');
}
