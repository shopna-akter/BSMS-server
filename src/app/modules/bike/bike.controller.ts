import { Request, Response, NextFunction } from 'express';
import { BikeService } from './bike.service';

export const BikeController = {
  createBike: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await BikeService.createBike(req.body);
      res.status(201).json({
        success: true,
        message: 'Bike added successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  getAllBikes: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await BikeService.getAllBikes();
      res.status(200).json({
        success: true,
        message: 'Bikes fetched successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  getSingleBike: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await BikeService.getSingleBike(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Bike fetched successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
