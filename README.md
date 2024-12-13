## Flujo de la Aplicación

El flujo de la aplicación sigue los siguientes pasos:

1. **Inicio del Servidor (`index.js`)**
   - Se importa la configuración de la base de datos (`sequelize`) y la aplicación Express (`app`).
   - La función `sequelize.sync()` sincroniza el modelo de datos con la base de datos, creando las tablas necesarias si aún no existen.
   - Luego, el servidor Express se inicia en el puerto `3000`.

2. **Configuración de Express (`src/app.js`)**
   - **Motor de Vistas EJS:** Se configura EJS como motor de plantillas para renderizar vistas dinámicas.
   - **Directorio de Vistas:** Se configura la ruta de las vistas para que Express pueda localizar el archivo `index.ejs` que renderiza la lista de usuarios.
   - **Middleware `body-parser`:** Se configura un middleware para procesar datos del formulario en las solicitudes POST.
   - **Rutas:** Se incluyen las rutas definidas en `userRoute.js`.

3. **Rutas (`src/routes/userRoute.js`)**
   - **GET `/`:** Llama al controlador `getUsers` para mostrar la lista de usuarios.
   - **POST `/users`:** Llama al controlador `createUser` para agregar un nuevo usuario a la base de datos.

4. **Controlador de Usuarios (`src/controllers/userController.js`)**
   - **`getUsers`:** Obtiene todos los usuarios de la base de datos y los pasa a la vista `index.ejs`.
   - **`createUser`:** Recibe los datos del formulario (nombre y correo electrónico), los guarda en la base de datos y redirige a la página de inicio (`/`).

5. **Modelo de Usuario (`src/models/user.js`)**
   - Define la estructura de la tabla `users` con los campos `name` y `email` usando Sequelize.

6. **Vista (`src/views/index.ejs`)**
   - Muestra el formulario para agregar un usuario y una lista con todos los usuarios existentes en la base de datos.
   - La vista se renderiza con los usuarios obtenidos desde la base de datos.

---

### **Proceso de Creación de la Tabla `users`**

1. **Sequelize Sync:** Cuando se ejecuta el comando `sequelize.sync()` en `index.js`, Sequelize sincroniza el modelo `User` con la base de datos PostgreSQL. Si la tabla `users` no existe, Sequelize la crea automáticamente.
2. **Modelo `User`:** En `src/models/user.js`, el modelo `User` se define con los campos `name` (cadena de texto) y `email` (cadena de texto, único, no nulo).
3. **Base de Datos:** La base de datos PostgreSQL se configura en `src/config/db.js` con las credenciales de conexión.
   - El modelo y la base de datos se sincronizan al iniciar el servidor, y Sequelize crea la tabla `users` con los campos definidos en el modelo.

---

## Estructura de Archivos

- `index.js`: Punto de entrada principal donde se inicializa el servidor y se sincroniza la base de datos.
- `src/app.js`: Configuración de Express, incluyendo el motor de vistas y las rutas.
- `src/views/index.ejs`: Vista que muestra el formulario de usuarios y la lista de usuarios.
- `src/config/db.js`: Configuración de la base de datos PostgreSQL usando Sequelize.
- `src/controllers/userController.js`: Controladores que manejan la lógica para obtener y crear usuarios.
- `src/models/user.js`: Modelo de la tabla `users` en la base de datos.
- `src/routes/userRoute.js`: Define las rutas GET y POST para manejar la interacción con los usuarios.
