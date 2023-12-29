//MÓDULO DE FUNCIONAMIENTO DE MODIFICACION DE NOTAS

//NOTAS//
//Función creamos una nota 
//Importamos las funciones del modelo de notas
import { updateNoteService } from '../../../services/note/indexNoteService.js';

// Controlador para actualizar una nota basada en su ID
const updateNoteController = (req, res) => {
  // Extraemos los datos de la solicitud
  const { id } = req.params;
  const { title, text, categoriaId } = req.body;

  // Verificamos que los parámetros requeridos estén presentes
  if (!id || !title || !text || !categoriaId) {
    return res.status(400).send({
      status: "error",
      message: "Todos los campos (id, title, text, categoriaId) son requeridos.🔴"
    });
  }

  try {
    // Llamamos al servicio para actualizar la nota
    updateNoteService(id, title, text, categoriaId)
      .then(success => {
        if (success) {
          // Si la nota se actualizó con éxito, respondemos con un mensaje positivo
          res.status(200).send({
            status: "ok",
            message: "Nota modificada exitosamente.✅",
            data: {
              id,
              title,
              text,
              categoriaId
            }
          });
        } else {
          // Si no se pudo actualizar la nota, respondemos con un mensaje de error
          res.status(500).send({
            status: "error",
            message: "Error al modificar la nota.🔴"
          });
        }
      })
      .catch(error => {
        // Si hubo un error al actualizar la nota, respondemos con un mensaje de error
        console.error("Error al modificar la nota:", error);
        res.status(500).send({
          status: "error",
          message: "Error interno del servidor al modificar la nota.🔴"
        });
      });
  } catch (error) {
    // Si ocurrió un error inesperado, respondemos con un mensaje de error
    console.error("Error al modificar la nota:", error);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al modificar la nota.🔴"
    });
  }
};

//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default updateNoteController;



 /* EJEMPLO STEFANO
 router.put("/notes", (req, res) => {
    // aqui me connecto al DB
    res.status(200).send({
      status: "ok",
      message: "Nota modificada",
      data: {
        id: "1",
        title: req.body.title,
        text: req.body.text,
        categoriaId: req.body.categoriaId,
      },
    });
  });*/