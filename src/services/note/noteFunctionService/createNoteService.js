//MÓDULO DE FUNCIONAMIENTO DE SERVICIO CREACIÓN DE NOTAS

//Importamos la bd
import getPool from '../../../db/getPool.js';
import dotenv from 'dotenv';

dotenv.config();

// Función crear una nueva nota 
export const createNoteService = async (title, text, categoriaId, userId) => {
  
  try {

    // Obtenemos una instancia del pool de conexiones
     let pool = await getPool();

    // Utilizamos await para esperar la resolución de la promesa devuelta por pool.query
    const results = await pool.query('INSERT INTO notas (title, text, categoriaId, userId) VALUES (?, ?, ?, ?, ?)', [title, text, categoriaId, userId]);
    // Devolvemos el ID de la nota insertada
    return results.userId;

  } catch (error) {
    // En caso de error, lanzamos una excepción para manejarla en el código que llame a esta función
    console.error("Error al crear la nota:", error);
        throw new Error("Error interno del servidor al crear la nota.🔴");
  }
};

