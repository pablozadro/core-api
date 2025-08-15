import express from 'express';
import { isAuthenticated } from '@/auth/middlewares';
import { NutritionController } from '@/nutrition/controllers';
import { createCategory, updateCategory, deleteCategory } from '@/nutrition/validators'

const router = express.Router();

// Categories
router.get(
  '/categories', 
  [ isAuthenticated ], 
  NutritionController.getCategories
);

router.post(
  '/categories', 
  [ isAuthenticated, ...createCategory ], 
  NutritionController.createCategory
);

router.put(
  '/categories/:id', 
  [ isAuthenticated, ...updateCategory ], 
  NutritionController.updateCategory
);

router.delete(
  '/categories/:id', 
  [ isAuthenticated, ...deleteCategory ], 
  NutritionController.deleteCategory
);

// Groups
router.get('/groups', 
  [ isAuthenticated ], 
  NutritionController.getGroups
);

// Items
router.get(
  '/items', 
  [ isAuthenticated ], 
  NutritionController.getItems
);


export default router;