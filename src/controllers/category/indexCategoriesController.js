//Módulo de unificacion de archivos Control y consulta de categorias


// Importamos las funciones de consulta de categorías
import getCategoriesController from './categoryQuery/queryCategoriesController.js';

// Importamos las funciones de manipulación de categorías
import createCategory from './categoryFunction/createCategoryController.js';
import updateCategory from './categoryFunction/updateCategoryController.js';
import deleteCategory from './categoryFunction/deleteCategoryController.js';

// Exportamos funciones para rutas (entries.routers.js)
export {
  getCategoriesController,
  createCategory,
  updateCategory,
  deleteCategory
};