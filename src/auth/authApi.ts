import express from 'express';
import { AuthUserController } from '@/auth/controllers';
import { registerValidation, loginValidation } from '@/auth/validators';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.post('/users/register', [...registerValidation], AuthUserController.register);
router.post('/users/login', [...loginValidation], AuthUserController.login);
router.get('/users', [ isAuthenticated ], AuthUserController.getAll);
router.get('/users/:id', [ isAuthenticated ], AuthUserController.getUserById);
router.put('/users/:id', [ isAuthenticated ], AuthUserController.updateUserById);
router.delete('/users/:id', [ isAuthenticated ], AuthUserController.deleteUserById);


export default router;