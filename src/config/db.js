// Importamos Sequelize, una biblioteca ORM (Object-Relational Mapping) para interactuar con bases de datos relacionales.
const { Sequelize } = require('sequelize');

// Creamos una instancia de Sequelize para configurar la conexión a la base de datos.
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Nombre de la base de datos, obtenido de las variables de entorno (e.g., "test_db").
  process.env.DB_USER,       // Usuario de la base de datos, obtenido de las variables de entorno (e.g., "admin").
  process.env.DB_PASSWORD,   // Contraseña del usuario, obtenida de las variables de entorno (e.g., "admin").
  {
    host: process.env.DB_HOST, // Dirección del host de la base de datos, obtenido de las variables de entorno (e.g., "localhost" o "db").
    dialect: 'postgres',       // Dialecto de la base de datos. En este caso, usamos PostgreSQL.
  }
);

// Exportamos la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación.
// Esto permitirá que otros archivos interactúen con la base de datos utilizando esta configuración.
module.exports = sequelize;
