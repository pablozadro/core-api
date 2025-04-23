import express from 'express';
import { NutritionCategoryController } from '@/nutrition/controllers';
import { isAuthenticated } from '@/auth/middlewares';
import { 
  createNutritionCategoryValidator, 
  updateNutritionCategoryValidator 
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


export default router;