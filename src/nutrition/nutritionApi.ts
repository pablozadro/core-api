import express from 'express';
import { isAuthenticated } from '@/auth/middlewares';
import { id } from '@/core/validators';
import { 
  NutritionGroupController,
  NutritionCategoryController,
  NutritionItemController,
} from '@/nutrition/controllers';
import * as validators from '@/nutrition/validators'
const router = express.Router();

/**
 * Categories
 */

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
  [ isAuthenticated, ...id, ...validators.updateCategory ], 
  NutritionCategoryController.updateCategoryById
);

router.delete(
  '/categories/:id', 
  [ isAuthenticated, ...id, ...validators.deleteCategory ], 
  NutritionCategoryController.deleteCategoryById
);


/**
 * Groups
 */

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
  NutritionGroupController.updateGroupById
);

router.delete(
  '/groups/:id', 
  [ isAuthenticated, ...id, ...validators.deleteGroup ], 
  NutritionGroupController.deleteGroupById
);


/**
 * Items
 */

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

router.get(
  '/items/:id', 
  [ isAuthenticated, ...id ], 
  NutritionItemController.getItemById
);

router.put(
  '/items/:id', 
  [ isAuthenticated, ...id, ...validators.updateItem ], 
  NutritionItemController.updateItemById
);

router.delete(
  '/items/:id', 
  [ isAuthenticated, ...id, ...validators.deleteItem ], 
  NutritionItemController.deleteItemById
);

export default router;