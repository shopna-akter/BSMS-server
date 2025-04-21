import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { createServiceZodSchema, markServiceCompleteZodSchema } from './service.validation';

const router = express.Router();

router.post('/', validateRequest(createServiceZodSchema), ServiceController.createService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getSingleService);
router.put('/:id/complete', validateRequest(markServiceCompleteZodSchema), ServiceController.markServiceAsCompleted);
router.get('/status', ServiceController.getPendingOrOverdueServices);

export const ServiceRoutes = router;
