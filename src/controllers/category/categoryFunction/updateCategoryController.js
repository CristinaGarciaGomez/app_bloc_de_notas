// MÓDULO DE MODIFICACIÓN DE CATEGORIA

// Importamos las funciones del modelo de categorias
// import getPool from "../../../db/getPool.js";

//NOTAS//
//Función modificamos la categoria
const updateNote = async (req, res) => {
    //Extraemos los datos de la solicitud
    const { id } = req.params; 
    const { title, detail, text, categoriaId } = req.body;
  
    if (!id) {
      return res.status(400).json({
        status: "error",
        message: "ID de nota no proporcionado.",
      });
    }
  
    const pool = await getPool();
  
    try {
      // Intenta actualizar la nota por su ID
      const result = await pool.query(
        "UPDATE notas SET title = ?, detail = ?, text = ?, categoriaId = ? WHERE id = ?",
        [title, detail, text, categoriaId, id]
      );
  
      if (result.affectedRows > 0) {
        return res.status(200).json({
          status: "success",
          message: "Nota modificada correctamente.",
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: "Nota no encontrada o ya modificada.",
        });
      }
    } catch (error) {
      console.error("Error al modificar la nota:", error);
      return res.status(500).json({
        status: "error",
        message: "Error interno del servidor al modificar la nota.",
      });
    }
  };
  
  //exportamos funciones a rutas (indexcategoryController.js, ira a entries.routers.js)
  export default updateNote;





