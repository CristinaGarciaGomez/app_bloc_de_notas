//MÚDULO DE FUNCIONAMIENTO DE SERVICIO DE OBTENCION DEL LISTADO DE CATEGORIAS

// Importamos la bd
import pool from '../../../db/getPool.js'; 

/**
 * Función para obtener el listado de categorías desde la base de datos.
 * @returns {Promise<Array|string>} - Retorna una promesa con el listado de categorías o un mensaje de error.
 */
const fetchCategories = async () => {
    try {
        // Consultamos para obtener categorías 
        const categories = await pool.query('SELECT name FROM categorias');
        
        // Verificamos si se encontraron categorías en la bd
        if (categories && categories.length > 0) {
            // Extraemos solo los nombres de las categorías de los resultados
            const categoryNames = categories.map(category => category.name);
            return categoryNames;
        } else {
            return "No se encontraron categorías.";
        }
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        throw new Error("Error interno del servidor al obtener categorías.");
    }
};

export default fetchCategories