import express from 'express';
import { BikeController } from './bike.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { createBikeZodSchema } from './bike.validation';

const router = express.Router();

router.post('/', validateRequest(createBikeZodSchema), BikeController.createBike);
router.get('/', BikeController.getAllBikes);
router.get('/:id', BikeController.getSingleBike);

export const BikeRoutes = router;
