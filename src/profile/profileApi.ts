

import express from 'express';
import { ProfileController } from '@/profile/controllers';
import { userIdValitator } from '@/core/validators';
import { createBodyValidation, updateBodyValidation } from '@/profile/validators';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.post(
  '', 
  [isAuthenticated, ...createBodyValidation], 
  ProfileController.createProfile
);

router.get(
  '/:userId', 
  [ isAuthenticated, ...userIdValitator ], 
  ProfileController.getProfile
);

router.put(
  '/:userId', 
  [ isAuthenticated, ...userIdValitator, ...updateBodyValidation ], 
  ProfileController.updateProfile
);

router.delete(
  '/:userId', 
  [ isAuthenticated, ...userIdValitator ], 
  ProfileController.deleteProfile
);

router.get(
  '/:userId', 
  [ isAuthenticated, ...userIdValitator ], 
  ProfileController.getProfile
);


export default router;
