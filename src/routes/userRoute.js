// Importa las funciones del controlador de usuarios
const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');

// Crea el enrutador de Express
const router = express.Router();

// Ruta GET para obtener todos los usuarios y renderizar la vista
router.get('/', getUsers);

// Ruta POST para crear un nuevo usuario
router.post('/users', createUser);

// Exporta las rutas para que sean usadas en app.js
module.exports = router;
