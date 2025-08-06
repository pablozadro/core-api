import express from 'express';
import { NutritionController } from '@/nutrition/controllers';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.get('/groups', [ isAuthenticated ], NutritionController.getGroups);
router.get('/items', [ isAuthenticated ], NutritionController.getItems);


export default router;