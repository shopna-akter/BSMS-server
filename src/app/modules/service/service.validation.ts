import { z } from 'zod';

const statusEnum = z.enum(['pending', 'in_progress', 'done'], {
  required_error: 'Status is required',
});

export const createServiceZodSchema = z.object({
  body: z.object({
    bikeId: z.string({ required_error: 'Bike ID is required' }),
    serviceDate: z.string({ required_error: 'Service date is required' }).regex(
      /^\d{4}-\d{2}-\d{2}$/,
      'Invalid date format. Use YYYY-MM-DD.'
    ),
    description: z.string({ required_error: 'Description is required' }),
    status: statusEnum,
  }),
});

export const markServiceCompleteZodSchema = z.object({
  body: z.object({
    completionDate: z.string().optional(),
  }),
});
