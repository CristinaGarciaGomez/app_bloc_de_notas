//MÓDULO DE FUNCIONAMIENTO DE SERVICIO CREACIÓN DE NOTAS

//Importamos la bd
import pool from '../../../db/getPool.js';

export const createNoteService = (title, text, categoriaId, userId) => {
  return new Promise((resolve, reject) => {
    // Creamos una nueva nota en la base de datos
    pool.query(
      'INSERT INTO notas (title, text, categoriaId, userId) VALUES (?, ?, ?, ?)',
      [title, text, categoriaId, userId],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      }
    );
  });
};