//MÓDULO DE ENDPOINTS DE NOTAS 

//Importamos módulos de funciones 
import express from 'express';
import {  createCategory, updateCategory, deleteCategory, getCategoriesController } from '../../controllers/category/indexCategoriesController.js';
import { createNote, updateNote, deleteNoteForUser, getNoteDetail, getUserNotes } from '../../controllers/note/indexNoteController.js';
import validateAuth from '../../middleware/validateAuth.js'; //Validación de Token

const router = express.Router()

//Endpoint de los archivos(indexCategoryController.js y indexNoteController.js)

//Categorias
router.post('/categories', validateAuth, createCategory);                                                                   //Crear categoria
router.put('/categories/:id', validateAuth, updateCategory);                                                                //Modificar categoria
router.delete('/notes/:id', validateAuth, deleteCategory);                                                                  //Eliminar categoria

router.get('/categories',validateAuth, getCategoriesController);                                                            //Obtener listado categorias


//Notas
router.post('/notes', validateAuth, createNote);                                                                            //Crear nota
router.put('/notes/:id', validateAuth, updateNote);                                                                         //Modificar nota
router.delete('/notes/:id', validateAuth, deleteNoteForUser);                                                               //Eliminar nota

router.get('/notes/:id', validateAuth, getNoteDetail);                                                                      //Obterner nota por detalle
router.get('/notes/:title', validateAuth, getUserNotes);                                                                    //Obtener nota por título

//Exportamos rutas (index.routes.js)
export default router
