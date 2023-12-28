// MÓDULO DE BORRADO DE CATEGORIA

// Importamos las funciones del modelo de categorias
// import getPool from "../../../db/getPool.js";

//NOTAS//
//Función borramos la categoria
const deleteCategory = async (req, res) => {
  //Extraemos los datos de la solicitud
  const { id } = req.params; 

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "ID de categoría no proporcionado.",
    });
  }

  const pool = await getPool();

  try {
    // Intentamos eliminar la categoría por su ID
    const result = await pool.query("DELETE FROM categorias WHERE id = ?", [id]);

    if (result.affectedRows > 0) {
      return res.status(200).json({
        status: "success",
        message: "Categoría eliminada correctamente.",
      });
    } else {
      return res.status(404).json({
        status: "error",
        message: "Categoría no encontrada o ya eliminada.",
      });
    }
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    return res.status(500).json({
      status: "error",
      message: "Error interno del servidor al eliminar la categoría.",
    });
  }
};

//exportamos funciones a rutas (indexcategoryController.js, ira a entries.routers.js)
export default deleteCategory;




