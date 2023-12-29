//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE CONSULTA DE NOTA POR DETALLE

// Importamos la bd
import pool from '../../../db/getPool.js';

/**
 * Función para obtener el detalle de una nota por su ID.
 * @param {number} id - ID de la nota.
 * @returns {Promise<Object|null>} - Retorna una promesa con los detalles de la nota o null si no se encuentra.
 */
export const getNoteDetailService = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT notas.*, categorias.name AS categoriaName, users.userName AS userName FROM notas INNER JOIN categorias ON notas.categoriaId = categorias.id INNER JOIN users ON notas.userId = users.id WHERE notas.id = ?',
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        } else if (results && results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null); // No se encontró la nota
        }
      }
    );
  });
};