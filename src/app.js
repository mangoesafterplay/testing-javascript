// Requiere módulos necesarios
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');  // Importa las rutas de usuarios

// Crea la aplicación Express
const app = express();

// Configura la carpeta de vistas (donde están los archivos EJS)
app.set('views', path.join(__dirname, 'views'));

// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para procesar los datos del formulario (POST)
app.use(bodyParser.urlencoded({ extended: true }));

// Registra las rutas de usuarios para el manejo de peticiones
app.use('/', userRoutes);

// Exporta la configuración de la aplicación
module.exports = app;
