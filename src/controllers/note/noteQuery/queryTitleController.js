//MÓDULO DE FINCIONAMIENTO DE CONSULTA DE NOTA POR TÍTULO

//CONSULTAS//
//Función para obtener nota por título
// Importamos el servicio para obtener las notas de un usuario
import { getUserNotesService } from '../../../services/note/indexNoteService.js';  

/**
 * Controlador para obtener las notas de un usuario.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
const getUserNotesController = async (req, res) => {
  const userId = req.user.id; // Suponemos que ya tienes un middleware de autenticación que establece el usuario en req.user

  try {
    const notes = await getUserNotesService(userId);
    if (notes.length === 0) {
      res.status(404).send({
        status: 'error',
        message: 'No se encontraron notas para este usuario.🔴'
      });
    } else {
      res.status(200).send({
        status: 'ok',
        message: "Nota obtenida por título exitosamente.✅",
        data: notes
      });
    }
  } catch (error) {
    console.error('Error al obtener las notas del usuario:', error);
    res.status(500).send({
      status: 'error',
      message: 'Error interno del servidor al obtener las notas del usuario.🔴'
    });
  }
};

export default getUserNotesController