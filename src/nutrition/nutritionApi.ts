import express from 'express';
import { 
  CategoryController,
  ItemController
 } from '@/nutrition/controllers';
import { isAuthenticated } from '@/auth/middlewares';
import { 
  createCategoryBodyValidator, 
  updateCategoryBodyValidator,
  createItemBodyValidator, 
  updateItemBodyValidator 
} from '@/nutrition/validators';

const router = express.Router();


router.get(
  '/categories/:id', 
  [ isAuthenticated ], 
  CategoryController.getCategoryById
);

router.put(
  '/categories/:id', 
  [ isAuthenticated, ...updateCategoryBodyValidator ], 
  CategoryController.updateCategoryById
);

router.delete(
  '/categories/:id', 
  [ isAuthenticated ], 
  CategoryController.deleteCategoryById
);

router.post(
  '/categories', 
  [ isAuthenticated, ...createCategoryBodyValidator ], 
  CategoryController.createCategory
);

router.get(
  '/categories', 
  [ isAuthenticated ], 
  CategoryController.getAllCategories
);

router.get(
  '/items/:id', 
  [ isAuthenticated ], 
  ItemController.getItemById
);

router.put(
  '/items/:id', 
  [ isAuthenticated, ...updateItemBodyValidator ], 
  ItemController.updateItemById
);

router.delete(
  '/items/:id', 
  [ isAuthenticated ], 
  ItemController.deleteItemById
);

router.post(
  '/items', 
  [ isAuthenticated, ...createItemBodyValidator ], 
  ItemController.createItem
);

router.get(
  '/items', 
  [ isAuthenticated ], 
  ItemController.getAllItems
);


export default router;