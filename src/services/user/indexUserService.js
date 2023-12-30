// MÓDULO PRINCIPAL DE SERVICIOS DE USUARIO

// Importamos todas las funciones  con el servicio de usuario
import findUserByEmail from './userFunctionService/login/findUserByEmail.js';
import comparePasswords from './userFunctionService/login/comparePasswords.js';
import register from './userFunctionService/registerUserService.js';

//exportamos funciones a controllers (registerController.js y loginController.js
export default {
  findUserByEmail,
  comparePasswords,
  register
}




