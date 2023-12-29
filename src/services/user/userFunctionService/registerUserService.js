//MÓDULO DE SERVICIOS DE FUNCIONAMIENTO DE REGISTRO DE USUARIO

// Importamos las funciones del usuario.
import bcrypt from 'bcrypt';
import pool from '../../../db/getPool.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; 



dotenv.config();

// Función para registrar un nuevo usuario.
const register = async (email, password, userName) => { // Extraemos datos del cuerpo de la solicitud.
  return new Promise((resolve, reject) => {
    // Hasheamos la contraseña.
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        reject('Error al hashear la contraseña🔴');
        return;
      }

      // Conectamos a la base de datos y consultamos la inserción.
      pool.query(
        'INSERT INTO users (email, password, userName) VALUES (?, ?, ?)',
        [email, hash, userName],
        (error, results) => {
          if (error) {
            reject('Error al crear el usuario en la base de datos🔴');
            return;
          }

          // Generamos token JWT para el usuario registrado.
          const token = jwt.sign({ userId: results.insertId }, process.env.JWT_SECRET, { expiresIn: '1h' });
          resolve({ userId: results.insertId, token });
        }
      );
    });
  });
};

//Exportamos funciones a controller (indexUserService.js, ira a registerController.js)
export default register
