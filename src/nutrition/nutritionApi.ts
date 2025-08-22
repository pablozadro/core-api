import express from 'express';
import { isAuthenticated } from '@/auth/middlewares';
import { NutritionController } from '@/nutrition/controllers';
import * as validators from '@/nutrition/validators'

const router = express.Router();


// Categories
router.get(
  '/categories', 
  [ isAuthenticated ], 
  NutritionController.getCategories
);

router.post(
  '/categories', 
  [ isAuthenticated, ...validators.createCategory ], 
  NutritionController.createCategory
);

router.put(
  '/categories/:id', 
  [ isAuthenticated, ...validators.updateCategory ], 
  NutritionController.updateCategory
);

router.delete(
  '/categories/:id', 
  [ isAuthenticated, ...validators.deleteCategory ], 
  NutritionController.deleteCategory
);


// Groups
router.get(
  '/groups', 
  [ isAuthenticated ], 
  NutritionController.getGroups
);

router.post(
  '/groups', 
  [ isAuthenticated, ...validators.createGroup ], 
  NutritionController.createGroup
);

router.put(
  '/groups/:id', 
  [ isAuthenticated, ...validators.updateGroup ], 
  NutritionController.updateGroup
);

router.delete(
  '/groups/:id', 
  [ isAuthenticated, ...validators.deleteGroup ], 
  NutritionController.deleteGroup
);


// Items
router.get(
  '/items', 
  [ isAuthenticated ], 
  NutritionController.getItems
);

router.post(
  '/items', 
  [ isAuthenticated, ...validators.createItem ], 
  NutritionController.createItem
);

router.put(
  '/items/:id', 
  [ isAuthenticated, ...validators.updateItem ], 
  NutritionController.updateItem
);

router.delete(
  '/items/:id', 
  [ isAuthenticated, ...validators.deleteItem ], 
  NutritionController.deleteItem
);

export default router;