// Importa la aplicación Express configurada y la base de datos
const app = require('./src/app');
const sequelize = require('./src/config/db');

// Sincroniza la base de datos (asegurando que las tablas están creadas)
sequelize.sync().then(() => {
    // Inicia el servidor Express en el puerto 3000
    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
});
