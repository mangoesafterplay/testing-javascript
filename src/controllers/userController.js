// Importa el modelo de Usuario para interactuar con la base de datos
const User = require('../models/user');

// Controlador para obtener todos los usuarios
const getUsers = async (req, res) => {
    // Obtiene todos los usuarios desde la base de datos
    const users = await User.findAll();
    // Renderiza la vista index.ejs y pasa los usuarios obtenidos
    res.render('index', { users });
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        // Obtiene los datos del formulario
        const { name, email } = req.body;
        // Crea un nuevo usuario en la base de datos
        await User.create({ name, email });
        // Redirige al usuario a la página principal después de crear el usuario
        res.redirect('/');
    } catch (error) {
        // Si hay un error, muestra el mensaje de error
        res.send('Error al agregar usuario: ' + error.message);
    }
};

// Exporta los controladores para que puedan ser usados en las rutas
module.exports = { getUsers, createUser };
