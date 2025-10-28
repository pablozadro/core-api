import express from 'express';
import { id } from '@/core/validators';
import { AuthUserController } from '@/auth/controllers';
import { registerBody, loginBody } from '@/auth/validators';
import { isAuthenticated } from '@/auth/middlewares';
const router = express.Router();


router.post('/register', [...registerBody], AuthUserController.register);
router.post('/login', [...loginBody], AuthUserController.login);
router.get('/users/:id', [ isAuthenticated, ...id ], AuthUserController.getUserById);
router.put('/users/:id', [ isAuthenticated, ...id ], AuthUserController.updateUserById);
router.delete('/users/:id', [ isAuthenticated, ...id ], AuthUserController.deleteUserById);
router.get('/users', [ isAuthenticated ], AuthUserController.getAllUsers);


export default router;