"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markServiceCompleteZodSchema = exports.createServiceZodSchema = void 0;
const zod_1 = require("zod");
const statusEnum = zod_1.z.enum(['pending', 'in_progress', 'done'], {
    required_error: 'Status is required',
});
exports.createServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string({ required_error: 'Bike ID is required' }),
        serviceDate: zod_1.z.string({ required_error: 'Service date is required' }).regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use YYYY-MM-DD.'),
        description: zod_1.z.string({ required_error: 'Description is required' }).min(1, 'Description cannot be empty'),
        status: statusEnum,
    }),
});
exports.markServiceCompleteZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string().optional(),
    }),
});
