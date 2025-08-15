import express from 'express';
import { isAuthenticated } from '@/auth/middlewares';
import { NutritionController } from '@/nutrition/controllers';
import { createCategoryPayload } from '@/nutrition/validators'

const router = express.Router();

// Categories
router.get(
  '/categories', 
  [ isAuthenticated ], 
  NutritionController.getCategories
);

router.post(
  '/categories', 
  [ isAuthenticated, ...createCategoryPayload ], 
  NutritionController.createCategory
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