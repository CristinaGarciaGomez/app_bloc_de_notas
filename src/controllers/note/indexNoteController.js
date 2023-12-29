//Módulo de unificacion de archivos Control y consulta de notas

//Importamos los módulos de notas
import createNoteController from './noteFunction/createNoteController.js';
import updateNoteController from './noteFunction/updateNoteController.js';
import deleteNoteController from './noteFunction/updateNoteController.js';

//Importamos los módulos de consultas de notas
import getNoteDetailController from './noteQuery/queryDetailController.js';
import getUserNotesController from './noteQuery/queryTitleController.js';

//exportamos funciones a rutas (entries.routers.js)
export {createNoteController, updateNoteController, deleteNoteController, getNoteDetailController, getUserNotesController };