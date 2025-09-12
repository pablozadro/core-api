

import express from 'express';
import { ProfileController } from '@/profile/controllers';
import { userId } from '@/core/validators';
import { createBody, updateBody } from '@/profile/validators';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.post(
  '', 
  [isAuthenticated, ...createBody], 
  ProfileController.createProfile
);

router.get(
  '', 
  [isAuthenticated ], 
  ProfileController.getAllProfiles
);

router.get(
  '/:userId', 
  [ isAuthenticated, ...userId ], 
  ProfileController.getProfile
);

router.put(
  '/:userId', 
  [ isAuthenticated, ...userId, ...updateBody ], 
  ProfileController.updateProfile
);

router.delete(
  '/:userId', 
  [ isAuthenticated, ...userId ], 
  ProfileController.deleteProfile
);

router.get(
  '/:userId', 
  [ isAuthenticated, ...userId ], 
  ProfileController.getProfile
);


export default router;
