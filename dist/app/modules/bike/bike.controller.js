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
exports.BikeController = void 0;
const bike_service_1 = require("./bike.service");
exports.BikeController = {
    createBike: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield bike_service_1.BikeService.createBike(req.body);
            res.status(201).json({
                success: true,
                message: 'Bike added successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getAllBikes: (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield bike_service_1.BikeService.getAllBikes();
            res.status(200).json({
                success: true,
                message: 'Bikes fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getSingleBike: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield bike_service_1.BikeService.getSingleBike(req.params.id);
            res.status(200).json({
                success: true,
                message: 'Bike fetched successfully',
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }),
};
