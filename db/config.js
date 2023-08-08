const mongoose = require('mongoose');

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a la base exitosa!!');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectionDB;
