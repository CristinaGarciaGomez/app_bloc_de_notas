//MÓDULO DE FUNCIONAMIENTO DE CREACIÓN DE NOTAS

//NOTAS//
//Función creamos una nota 
// Importamos las funciones del modelo de notas
import { createNoteService } from '../../../services/note/indexNoteService.js';  

//NOTAS//
//Función creamos la nota
const createNoteController = (req, res) => {
  // Extraemos los datos de la solicitud
  const { title, text, categoriaId, userId } = req.body;

  // Validamos que nos proporciono todos los campos necesarios
  if (!title || !text || !categoriaId || !userId) {
    return res.status(400).send({
      status: "error",
      message: "Todos los campos (title, text, categoriaId, userId) son requeridos.🔴"
    });
  }

  try {
    createNoteService(title, text, categoriaId, userId)
      .then(noteId => {
        res.status(201).send({
          status: "ok",
          message: "Nota creada exitosamente.✅",
          data: {
            id: noteId,
            title,
            text,
            categoriaId,
            userId
          }
        });
      })
      .catch(error => {
        console.error("Error al crear la nota:", error);
        res.status(500).send({
          status: "error",
          message: "Error interno del servidor al crear la nota.🔴"
        });
      });
  } catch (error) {
    console.error("Error al crear la nota:", error);
    res.status(500).send({
      status: "error",
      message: "Error interno del servidor al crear la nota.🔴"
    });
  }
};

//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
export default createNoteController;

/* EJEMPLO STEFANO
router.post("/notes", (req, res) => {
  // aqui me connecto al DB
  res.status(201).send({
    status: "ok",
    message: "Nota creada",
    data: {
      id: "1",
      title: req.body.title,
      text: req.body.text,
      categoriaId: req.body.categoriaId,
    },
  });
});*/