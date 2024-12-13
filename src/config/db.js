// Importa Sequelize para interactuar con la base de datos
const { Sequelize } = require('sequelize');

// Crea la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('test_db', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',  // Usamos PostgreSQL
});

// Exporta la instancia de Sequelize para que se pueda usar en otros archivos
module.exports = sequelize;
