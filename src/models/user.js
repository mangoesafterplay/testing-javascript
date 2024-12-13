// Importa DataTypes de Sequelize para definir los tipos de datos de las columnas
const { DataTypes } = require('sequelize');
// Importa la configuración de la base de datos
const sequelize = require('../config/db');

// Define el modelo de Usuario (Tabla 'users')
const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,   // Tipo de datos: STRING
    allowNull: false,         // No puede ser nulo
  },
  email: {
    type: DataTypes.STRING,   // Tipo de datos: STRING
    allowNull: false,         // No puede ser nulo
    unique: true,             // El correo electrónico debe ser único
  },
});

// Exporta el modelo de Usuario para usarlo en otras partes de la aplicación
module.exports = User;
