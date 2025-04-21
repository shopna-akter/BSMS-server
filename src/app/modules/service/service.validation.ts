import { z } from 'zod';

export const createServiceZodSchema = z.object({
  body: z.object({
    bikeId: z.string({ required_error: 'Bike ID is required' }),
    serviceDate: z.string({ required_error: 'Service date is required' }),
    description: z.string({ required_error: 'Description is required' }),
    status: z.enum(['pending', 'done'], { required_error: 'Status is required' }),
  }),
});

export const markServiceCompleteZodSchema = z.object({
  body: z.object({
    completionDate: z.string().optional(),
  }),
});
