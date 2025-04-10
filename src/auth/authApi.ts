import express from 'express';
import { AuthUserController } from '@/auth/controllers';
import { registerValidation, loginValidation } from '@/auth/validators';
const router = express.Router();


router.post('/users/register', [...registerValidation], AuthUserController.register);
router.post('/users/login', [...loginValidation], AuthUserController.login);
router.get('/users', AuthUserController.getAll);
router.get('/users/:id', AuthUserController.getUserById);
router.put('/users/:id', AuthUserController.updateUserById);
router.delete('/users/:id', AuthUserController.deleteUserById);


export default router;