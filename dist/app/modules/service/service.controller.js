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
exports.ServiceController = void 0;
const service_service_1 = require("./service.service");
exports.ServiceController = {
    createService: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service_service_1.ServiceService.createService(req.body);
            res.status(201).json({
                success: true,
                message: 'Service record created successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getAllServices: (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service_service_1.ServiceService.getAllServices();
            res.status(200).json({
                success: true,
                message: 'Service records fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getSingleService: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service_service_1.ServiceService.getSingleService(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Service record fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    markServiceAsCompleted: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const result = yield service_service_1.ServiceService.markServiceAsCompleted(req.params.id, (_a = req.body) === null || _a === void 0 ? void 0 : _a.completionDate);
            res.status(200).json({
                success: true,
                message: 'Service marked as completed',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getPendingOrOverdueServices: (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service_service_1.ServiceService.getPendingOrOverdueServices();
            console.log("Returned services:", result);
            res.status(200).json({
                success: true,
                message: 'Overdue or pending services fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    })
};
