import { Request, Response } from 'express';
import { CustomerService } from './customer.service';

export const CustomerController = {
  createCustomer: async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomer(req.body);
    res.status(201).json({
      success: true,
      message: 'Customer created successfully',
      data: result,
    });
  },

  getAllCustomers: async (_req: Request, res: Response) => {
    const result = await CustomerService.getAllCustomers();
    res.status(200).json({
      success: true,
      message: 'Customers fetched successfully',
      data: result,
    });
  },

  getSingleCustomer: async (req: Request, res: Response) => {
    const result = await CustomerService.getSingleCustomer(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Customer fetched successfully',
      data: result,
    });
  },

  updateCustomer: async (req: Request, res: Response) => {
    const result = await CustomerService.updateCustomer(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Customer updated successfully',
      data: result,
    });
  },

  deleteCustomer: async (req: Request, res: Response) => {
    await CustomerService.deleteCustomer(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Customer deleted successfully',
    });
  },
};
