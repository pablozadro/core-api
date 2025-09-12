import express from 'express';
import { idValitator } from '@/core/validators';
import { AuthUserController } from '@/auth/controllers';
import { registerBodyValidation, loginBodyValidation } from '@/auth/validators';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.post('/register', [...registerBodyValidation], AuthUserController.register);
router.post('/login', [...loginBodyValidation], AuthUserController.login);
router.get('/users/:id', [ isAuthenticated, ...idValitator ], AuthUserController.getUserById);
router.put('/users/:id', [ isAuthenticated, ...idValitator ], AuthUserController.updateUserById);
router.delete('/users/:id', [ isAuthenticated, ...idValitator ], AuthUserController.deleteUserById);
router.get('/users', [ isAuthenticated ], AuthUserController.getAllUsers);


export default router;