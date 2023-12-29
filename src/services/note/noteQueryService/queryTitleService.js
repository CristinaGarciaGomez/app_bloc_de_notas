//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE CONSULTA DE NOTA POR TITULO

// Importamos la bd
import pool from '../../../db/getPool.js';

/**
 * Función para obtener las notas de un usuario por su ID.
 * @param {number} userId - ID del usuario.
 * @returns {Promise<Array>} - Retorna una promesa con las notas del usuario.
 */
export const getUserNotesService = (userId) => {
  return pool.query(
    'SELECT id, title FROM notas WHERE userId = ?',
    [userId]
  );
};