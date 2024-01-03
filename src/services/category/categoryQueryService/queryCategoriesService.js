//MÚDULO DE FUNCIONAMIENTO DE SERVICIO DE OBTENCION DEL LISTADO DE CATEGORIAS

// Importamos la bd
import getPool from '../../../db/getPool.js'; 
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Token inválido o expirado.🔴');
    }
};

//Funcion para obtener lista de categorias 
const fetchCategories = async () => {
    try {

        let pool = await getPool()

        // Consultamos para obtener categorías 
        const categories = await pool.query('SELECT id, name FROM categorias');
        
        // Verificamos si se encontraron categorías en la bd
        if (categories && categories.length > 0) {
            return categories[0];
        } else {
            throw new Error("No se encontraron categorías.🔴");
        }
    } catch (error) {
        console.error("Error al obtener categorías:", error);
        throw new Error("Error interno del servidor al obtener categorías.🔴");
    }
};

export default fetchCategories