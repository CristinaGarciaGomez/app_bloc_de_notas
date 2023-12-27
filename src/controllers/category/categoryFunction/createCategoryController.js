// MÓDULO DE CREACIÓN DE CATEGORIA

// Importamos las funciones del modelo de categorias
import pool from '../../../db/getPool.js'; 

//CATEGORIAS//
//Función creamos la categoria
export const createCategory = async (req, res) => {
    // Extraemos los datos de la solicitud
    const { name } = req.body;


    // Verificamos si el nombre de la categoría ya existe en la base de datos
    const existingCategory = await pool.query('SELECT * FROM categorias WHERE name = ?', [name]);

    if (existingCategory.length > 0) {
        return res.status(400).send({
            status: 'error',
            message: 'La categoría ya existe.'
        });
    }

    // Insertamos la nueva categoría en la base de datos
    try {
        await pool.query('INSERT INTO categorias(name) VALUES (?)', [name]);

        res.status(201).send({
            status: 'ok',
            message: 'Categoría creada exitosamente.'
        });
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        res.status(500).send({
            status: 'error',
            message: 'Error interno del servidor al crear la categoría.'
        });
    }
};

//exportamos funciones a rutas (indexcategoryController.js, ira a entries.routers.js)
export default createCategory;
