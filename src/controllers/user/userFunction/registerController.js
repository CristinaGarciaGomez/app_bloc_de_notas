//MÓDULO DE FUNCIONAMIENTO DE REGISTRO DE USUARIO

// Importamos las funciones del usuario.
import register from '../../../services/user/indexUserService.js';  // Asegúrate de poner la ruta correcta al archivo userService.js

// Controlador para registrar un nuevo usuario.
const registerController = async (req, res) => {
  const { email, password, userName } = req.body;

  
  // Validamos de datos de entrada.
  if (!email || !password || !userName) {
    return res.status(400).send({
      status: 'error',
      message: 'Todos los campos (email, password, userName) son requeridos.🔴'
    });
  }

  try {
    // Llamamos al servicio de registro.
    const { userId, token } = await register(email, password, userName); // Utilizamos directamente la función `register` importada.
    
    // Respuesta exitosa.
    res.status(201).send({
      status: 'ok',
      message: 'Usuario registrado exitosamente.✅',
      userId,
      token
    });
  } catch (error) {
    // Manejo de errores.
    console.error('Error en el registro:', error);
    res.status(500).send({
      status: 'error',
      message: 'Error interno del servidor al registrar el usuario.🔴'
    });
  }
};

//Exportamos funciones a rutas ( indexUserController.js, ira a user.routers.js)
export default registerController ;


/* EJEMPLO STEFANO
const registerController = (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: 'ok',
    message: 'Usuario creado',
  });
};*/