//MÓDULO DE FUNCIONAMIENTO DE BORRADO DE NOTAS

//NOTAS//
//Función borrarmos una nota 
// Importamos las funciones del modelo de notas 
import { deleteNoteService } from '../../../services/note/indexNoteService.js';

// Controlador para eliminar una nota basada en su ID
const deleteNoteController = (req, res) => {
  // Extraemos el ID de la nota y el ID del usuario desde la solicitud
  const { id } = req.params;
  const userId = req.body.userId;

  // Verificamos que los parámetros requeridos estén presentes
  if (!id || !userId) {
    return res.status(400).send({
      status: "error",
      message: "Los parámetros 'id' y 'userId' son requeridos.🔴"
    });
  }

  try {
    // Llamamos al servicio para eliminar la nota
    deleteNoteService(id, userId)
      .then(success => {
        if (success) {
          // Si la nota se eliminó con éxito, respondemos con un mensaje positivo
          res.status(200).send({
            status: "ok",
            message: "Nota eliminada exitosamente.✅"
          });
        } else {
          // Si no se pudo eliminar la nota, respondemos con un error de permisos
          res.status(403).send({
            status: "error",
            message: "No tienes permiso para eliminar esta nota o la nota no existe.🔴"
          });
        }
      })
      .catch(error => {
        // Si hubo un error al eliminar la nota, respondemos con un mensaje de error
        console.error("Error al eliminar la nota:", error);
        res.status(500).send({
          status: "error",
          message: "Error interno del servidor al eliminar la nota.🔴"
        });
      });
  } catch (error) {
    // Si ocurrió un error inesperado, respondemos con un mensaje de error
    console.error("Error al eliminar la nota:", error);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al eliminar la nota.🔴"
    });
  }
};

//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default deleteNoteController;















