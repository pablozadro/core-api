import express from 'express';
import { AuthUserController } from '@/auth/controllers';
const router = express.Router();


router.get('/users', AuthUserController.getAll);


export default router;