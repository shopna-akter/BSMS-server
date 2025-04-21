import { Request, Response, NextFunction } from 'express';
import { ServiceService } from './service.service';

export const ServiceController = {
  createService: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await ServiceService.createService(req.body);
      res.status(201).json({
        success: true,
        message: 'Service record created successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  getAllServices: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await ServiceService.getAllServices();
      res.status(200).json({
        success: true,
        message: 'Service records fetched successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  getSingleService: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await ServiceService.getSingleService(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Service record fetched successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  markServiceAsCompleted: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await ServiceService.markServiceAsCompleted(req.params.id, req.body?.completionDate);
      res.status(200).json({
        success: true,
        message: 'Service marked as completed',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  getPendingOrOverdueServices: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await ServiceService.getPendingOrOverdueServices();
      res.status(200).json({
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
};
