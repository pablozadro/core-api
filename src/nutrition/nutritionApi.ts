import express from 'express';
import { 
  NutritionCategoryController,
  NutritionItemController
 } from '@/nutrition/controllers';
import { isAuthenticated } from '@/auth/middlewares';
import { 
  createNutritionCategoryValidator, 
  updateNutritionCategoryValidator,
  createNutritionItemValidator, 
  updateNutritionItemValidator 
} from '@/nutrition/validators';

const router = express.Router();


router.get(
  '/categories/:id', 
  [ isAuthenticated ], 
  NutritionCategoryController.getCategoryById
);

router.put(
  '/categories/:id', 
  [ isAuthenticated, ...updateNutritionCategoryValidator ], 
  NutritionCategoryController.updateCategoryById
);

router.delete(
  '/categories/:id', 
  [ isAuthenticated ], 
  NutritionCategoryController.deleteCategoryById
);

router.post(
  '/categories', 
  [ isAuthenticated, ...createNutritionCategoryValidator ], 
  NutritionCategoryController.createCategory
);

router.get(
  '/categories', 
  [ isAuthenticated ], 
  NutritionCategoryController.getAllCategories
);

router.get(
  '/items/:id', 
  [ isAuthenticated ], 
  NutritionItemController.getItemById
);

router.put(
  '/items/:id', 
  [ isAuthenticated, ...updateNutritionItemValidator ], 
  NutritionItemController.updateItemById
);

router.delete(
  '/items/:id', 
  [ isAuthenticated ], 
  NutritionItemController.deleteItemById
);

router.post(
  '/items', 
  [ isAuthenticated, ...createNutritionItemValidator ], 
  NutritionItemController.createItem
);

router.get(
  '/items', 
  [ isAuthenticated ], 
  NutritionItemController.getAllItems
);


export default router;