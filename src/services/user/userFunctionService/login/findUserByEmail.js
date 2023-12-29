//MÓDULO DE BUSQUEDA DE EMAIL POR ID

// Importamos la bd.
import pool from '../../../../db/getPool.js';

export default function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results && results.length > 0 ? results[0] : null);
      }
    });
  });
}
