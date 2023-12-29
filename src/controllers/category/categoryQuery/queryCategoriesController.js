//Módulo de funcionamiento de consulta de listado categorias completo

// Importamos las funciones del modelo consultas de notas
import pool from '../../../db/getPool.js'; 

//BUSQUEDA CATEGORIAS//
//Función obtenemos listado de gategorias
const getCategoriesController = async (req, res) => {
    try {
      // Consultamos para obtener categorías 
      const categories = await pool.query('SELECT name FROM categorias');
      
      // Verificarmos si se encontraron categorías en la bd
      if (categories && categories.length > 0) {
        // Extraemos solo los nombres de las categorías de los resultados
        const categoryNames = categories.map(category => category.name);
        
        // Enviamos respuesta con el listado de categorías
        res.status(200).send({
          status: "ok",
          message: "Listado categorías. ✅",
          data: categoryNames//Revisarlo
        });
      } else {
        // Si no se encontraron, enviarmos error 
        res.status(404).send({
          status: "error",
          message: "No se encontraron categorías.🔴"
        });
      }
    } catch (error) {
      // Manejamos error que ocurra 
      console.error("Error al obtener categorías:", error);
      
      // Enviamos un error 500 en caso de error interno del servidor
      res.status(500).send({
        status: "error",
        message: "Error interno del servidor al obtener categorías🔴"
      });
    }
  }
 
  //exportamos funciones a rutas (entries.routes.js)
  export default getCategoriesController


   /*EJEMPLO STEFANO
   router.get("/notes", (req, res) => {
    // aqui me connecto al DB
    console.log(req.query);
    res.status(200).send({
      status: "ok",
      message: "Listado notas",
      data: [],
    });
  });*/
