"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerZodSchema = exports.createCustomerZodSchema = void 0;
const zod_1 = require("zod");
exports.createCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z.string({ required_error: 'Email is required' }).email('Invalid email'),
        phone: zod_1.z.string({ required_error: 'Phone is required' }),
    }),
});
exports.updateCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().optional(),
    }),
});
