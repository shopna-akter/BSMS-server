import express from 'express';
import { CustomerRoutes } from '../app/modules/customer/customer.routes';
import { BikeRoutes } from '../app/modules/bike/bike.routes';
import { ServiceRoutes } from '../app/modules/service/service.routes';

const router = express.Router();

router.use('/api/customers', CustomerRoutes);
router.use('/api/bikes', BikeRoutes);
router.use('/api/services', ServiceRoutes)

export default router;
