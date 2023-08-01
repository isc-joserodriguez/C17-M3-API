//! 1.- Importar Mongoose
const mongoose = require('mongoose');

//! 2.- Conectarse a la base de datos
mongoose.connect('mongodb+srv://testMongo:testMongo@cluster0.h81et.mongodb.net/Ejemplo');

//! ODM - Para NoSQL - Mongoose - Este es el que usaremos para Mongo
//! ORM - Para SQL - Prisma/Sequelize/TypeORM - Estos se utilizan para SQL Server/MySQL/PostgreSQL...
//! 3.- Crear el modelo de la colección (db.users)
const Persona = mongoose.model('Persona', {
    nombre: String,
    edad: Number,
});

//! 4.- Usamos el modelo (Todos los métodos son promesas)
const crearUsuario = () => {
    const persona1 = new Persona({
        nombre: "María",
        edad: 15,
    });
    persona1.save().then((persona) => {
        console.log('Usuario creado', persona);
    });
}

crearUsuario();

/* 
Persona.find();
Persona.updateOne();
Persona.findByIdAndDelete();
 */
