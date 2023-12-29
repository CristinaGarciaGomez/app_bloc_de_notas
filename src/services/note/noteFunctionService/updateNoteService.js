//MÓDULO DE FUNCIONAMIENTO DE SERVICIO DE MODIFICACION DE NOTAS

// Importamos la bd
import pool from '../../../db/getPool.js';

// Función para actualizar una nota en la base de datos
export const updateNoteService = (id, title, text, categoriaId) => {
  return new Promise((resolve, reject) => {
    // Actualizamos la nota en la base de datos
    pool.query(
      'UPDATE notas SET title=?, text=?, categoriaId=? WHERE id=?',
      [title, text, categoriaId, id],
      (error, results) => {
        if (error) {
          // Si hay un error, rechazamos la promesa
          reject(error);
        } else {
          // Si se actualizó la nota correctamente, resolvemos la promesa
          resolve(results.affectedRows > 0);
        }
      }
    );
  });
};
