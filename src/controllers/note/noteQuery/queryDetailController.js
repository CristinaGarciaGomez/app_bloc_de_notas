//MÓDULO DE FUNCIONAMIENTO DE CONSULTA DE NOTA POR DETALLE

//CONSULTAS//
//Función para obtener nota por detalle
import { getNoteDetailService } from '../../../services/note/indexNoteService.js'; 

/**
 * Controlador para obtener el detalle de una nota.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 */
const getNoteDetailController = async (req, res) => {
  // Extraemos el ID de la nota de los parámetros de la ruta
  const { id } = req.params;

  try {
    const noteDetail = await getNoteDetailService(id);
    if (noteDetail) {
      res.status(200).send({
        status: "ok",
        message: "Detalle de la nota obtenido exitosamente.✅",
        data: noteDetail
      });
    } else {
      res.status(404).send({
        status: "error",
        message: "No se encontró la nota con el ID proporcionado.🔴"
      });
    }
  } catch (error) {
    console.error("Error al obtener el detalle de la nota:", error);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al obtener el detalle de la nota.🔴"
    });
  }
};

export default getNoteDetailController 
 

  //Función detalle de nota
  /*router.get("/notes/:id", (req, res) => {
    // aqui me connecto al DB
    res.status(200).send({
      status: "ok",
      message: "Detalle nota",
      data: {
        id: req.params.id,
      },
    });
  });*/