import express from 'express';
import { isAuthenticated } from '@/auth/middlewares';
import { 
  NutritionGroupController,
  NutritionCategoryController,
  NutritionItemController,
} from '@/nutrition/controllers';
import * as validators from '@/nutrition/validators'
const router = express.Router();

router.get(
  '/categories', 
  [ isAuthenticated ], 
  NutritionCategoryController.getCategories
);

router.post(
  '/categories', 
  [ isAuthenticated, ...validators.createCategory ], 
  NutritionCategoryController.createCategory
);

router.put(
  '/categories/:id', 
  [ isAuthenticated, ...validators.updateCategory ], 
  NutritionCategoryController.updateCategory
);

router.delete(
  '/categories/:id', 
  [ isAuthenticated, ...validators.deleteCategory ], 
  NutritionCategoryController.deleteCategory
);

router.get(
  '/groups', 
  [ isAuthenticated ], 
  NutritionGroupController.getGroups
);

router.post(
  '/groups', 
  [ isAuthenticated, ...validators.createGroup ], 
  NutritionGroupController.createGroup
);

router.put(
  '/groups/:id', 
  [ isAuthenticated, ...validators.updateGroup ], 
  NutritionGroupController.updateGroup
);

router.delete(
  '/groups/:id', 
  [ isAuthenticated, ...validators.deleteGroup ], 
  NutritionGroupController.deleteGroup
);

router.get(
  '/items', 
  [ isAuthenticated, ...validators.getItems ], 
  NutritionItemController.getItems
);

router.post(
  '/items', 
  [ isAuthenticated, ...validators.createItem ], 
  NutritionItemController.createItem
);

router.put(
  '/items/:id', 
  [ isAuthenticated, ...validators.updateItem ], 
  NutritionItemController.updateItem
);

router.delete(
  '/items/:id', 
  [ isAuthenticated, ...validators.deleteItem ], 
  NutritionItemController.deleteItem
);

export default router;