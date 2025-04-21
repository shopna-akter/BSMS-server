import { z } from 'zod';

export const createCustomerZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }).email('Invalid email'),
    phone: z.string({ required_error: 'Phone is required' }),
  }),
});

export const updateCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
  }),
});
