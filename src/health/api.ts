import express from 'express';
import { HealthController } from '@/health/controllers';
const router = express.Router();


router.get('', HealthController.getHealthCheck);


export default router;