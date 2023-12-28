//MÓDULO DE ENDPOINTS DE NOTAS 

//Importamos módulos de funciones 
import express from 'express';
import {  createCategory, updateCategory, deleteCategory, getCategoriesController } from '../../controllers/category/indexCategoriesController.js';
import { createNote, updateNote, deleteNoteForUser, getNoteDetail, getUserNotes } from '../../controllers/note/indexNoteController.js';

const router = express.Router()

//Endpoint de los archivos(indexCategoryController.js y indexNoteController.js)

//Categorias
router.post('/categories', createCategory);                                                                            //Crear nota
router.put('/categories/:id', updateCategory);                                                                         //Modificar nota
router.delete('/notes/:id', deleteCategory);                                                               //Eliminar nota


router.get('/categories', getCategoriesController);                                                           //Obtener listado categorias


//Notas
router.post('/notes', createNote);                                                                            //Crear nota
router.put('/notes/:id', updateNote);                                                                         //Modificar nota
router.delete('/notes/:id', deleteNoteForUser);                                                               //Eliminar nota

router.get('/notes/:id', getNoteDetail);                                                                      //Obterner nota por detalle
router.get('/notes/:title', getUserNotes)                                                                     //Obtener notas por título

//Exportamos rutas (index.routes.js)
export default router
