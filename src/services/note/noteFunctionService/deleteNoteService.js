//MÓDULO DE FUNCIONAMIENTO DE SERVICIO BORRADO DE NOTAS

// Importamos la bd
import pool from '../../../db/getPool.js';

// Función para eliminar una nota basada en su ID y el ID del usuario
export const deleteNoteService = (id, userId) => {
  return new Promise((resolve, reject) => {
    // Intentamos eliminar la nota de la base de datos
    pool.query(
      'DELETE FROM notas WHERE id = ? AND userId = ?',
      [id, userId],
      (error, results) => {
        if (error) {
          // Si hay un error, rechazamos la promesa
          reject(error);
        } else if (results.affectedRows > 0) {
          // Si se afectaron filas en la base de datos, la nota se eliminó con éxito
          resolve(true);
        } else {
          // Si no se afectaron filas, la nota no se eliminó (o el usuario no tiene permiso)
          resolve(false);
        }
      }
    );
  });
};