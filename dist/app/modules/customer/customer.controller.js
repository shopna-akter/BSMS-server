"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const customer_service_1 = require("./customer.service");
exports.CustomerController = {
    createCustomer: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield customer_service_1.CustomerService.createCustomer(req.body);
            res.status(201).json({
                success: true,
                message: 'Customer created successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getAllCustomers: (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield customer_service_1.CustomerService.getAllCustomers();
            res.status(200).json({
                success: true,
                message: 'Customers fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getSingleCustomer: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield customer_service_1.CustomerService.getSingleCustomer(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Customer fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    updateCustomer: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield customer_service_1.CustomerService.updateCustomer(req.params.id, req.body);
            res.status(200).json({
                success: true,
                message: 'Customer updated successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    deleteCustomer: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield customer_service_1.CustomerService.deleteCustomer(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Customer deleted successfully',
            });
        }
        catch (error) {
            next(error);
        }
    }),
};
