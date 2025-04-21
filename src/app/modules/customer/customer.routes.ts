import express from 'express';
import { CustomerController } from './customer.controller';
import validateRequest from '../../middlewares/validateRequest';
import {
  createCustomerZodSchema,
  updateCustomerZodSchema,
} from './customer.validation';

const router = express.Router();

router.post('/', validateRequest(createCustomerZodSchema), CustomerController.createCustomer);
router.get('/', CustomerController.getAllCustomers);
router.get('/:id', CustomerController.getSingleCustomer);
router.put('/:id', validateRequest(updateCustomerZodSchema), CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);

export const CustomerRoutes = router;
