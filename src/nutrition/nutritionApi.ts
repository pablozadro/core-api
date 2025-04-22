import express from 'express';
import { NutritionCategoryController } from '@/nutrition/controllers';
import { 
  createNutritionCategoryValidator, 
  updateNutritionCategoryValidator 
} from '@/nutrition/validators';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.get(
  '/category/:id', 
  [ isAuthenticated ], 
  NutritionCategoryController.getCategoryById
);

router.put(
  '/category/:id', 
  [ isAuthenticated, ...updateNutritionCategoryValidator ], 
  NutritionCategoryController.updateCategoryById
);

router.delete(
  '/category/:id', 
  [ isAuthenticated ], 
  NutritionCategoryController.deleteCategoryById
);

router.post(
  '/category', 
  [ isAuthenticated, ...createNutritionCategoryValidator ], 
  NutritionCategoryController.createCategory
);

router.get(
  '/category', 
  [ isAuthenticated ], 
  NutritionCategoryController.getAllCategories
);



export default router;