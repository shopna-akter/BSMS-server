import express from 'express';
import { CustomerRoutes } from '../app/modules/customer/customer.routes';
import { BikeRoutes } from '../app/modules/bike/bike.routes';

const router = express.Router();

router.use('/api/customers', CustomerRoutes);
router.use('/api/bikes', BikeRoutes);

export default router;
