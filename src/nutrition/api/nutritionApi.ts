import express from 'express';

import { isAuthenticated } from '@/auth/middlewares';
import { id, userId } from '@/core/validators';

import { 
  NutritionGroupController,
  NutritionCategoryController,
  NutritionItemController,
  NutritionProfileController
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
  // [ isAuthenticated, ...validators.getItems ], 
  [ ...validators.getItems ], 
  NutritionItemController.getItems
);

router.post(
  '/items', 
  [ isAuthenticated, ...validators.createItem ], 
  NutritionItemController.createItem
);

router.get(
  '/items/:id', 
  // [ isAuthenticated, ...id ], 
  [ ...id ], 
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


/**
 * Profile
 */

router.post(
  '/profiles', 
  [isAuthenticated, ...validators.createProfile], 
  NutritionProfileController.createProfile
);

router.get(
  '/profiles', 
  [isAuthenticated ], 
  NutritionProfileController.getAllProfiles
);

router.get(
  '/profiles/:userId', 
  [ isAuthenticated, ...userId ], 
  NutritionProfileController.getProfile
);

router.put(
  '/profiles/:userId', 
  [ isAuthenticated, ...userId, ...validators.updateProfile ], 
  NutritionProfileController.updateProfile
);

router.delete(
  '/profiles/:userId', 
  [ isAuthenticated, ...userId ], 
  NutritionProfileController.deleteProfile
);

router.get(
  '/profiles/:userId', 
  [ isAuthenticated, ...userId ], 
  NutritionProfileController.getProfile
);


export default router;