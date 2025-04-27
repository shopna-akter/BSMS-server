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
exports.ServiceService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.ServiceService = {
    createService: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const bikeExists = yield prisma.bike.findUnique({
            where: { bikeId: payload.bikeId }
        });
        if (!bikeExists) {
            throw new Error('Bike with the provided bikeId does not exist.');
        }
        const serviceDate = new Date(payload.serviceDate);
        serviceDate.setHours(0, 0, 0, 0);
        return yield prisma.service.create({
            data: Object.assign(Object.assign({}, payload), { serviceDate })
        });
    }),
    getAllServices: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.service.findMany();
    }),
    getSingleService: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const service = yield prisma.service.findUnique({ where: { serviceId: id } });
        if (!service) {
            const error = new Error('Service not found');
            error.status = 404;
            throw error;
        }
        return service;
    }),
    markServiceAsCompleted: (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
        const existing = yield prisma.service.findUnique({ where: { serviceId: id } });
        if (!existing) {
            const error = new Error('Service not found');
            error.status = 404;
            throw error;
        }
        if (existing.status === 'done') {
            const error = new Error('Service is already marked as completed.');
            error.status = 400;
            throw error;
        }
        return yield prisma.service.update({
            where: { serviceId: id },
            data: {
                status: 'done',
                completionDate: completionDate ? new Date(completionDate) : new Date(),
            },
        });
    }),
    getPendingOrOverdueServices: () => __awaiter(void 0, void 0, void 0, function* () {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        console.log("Seven days ago:", sevenDaysAgo);
        const services = yield prisma.service.findMany({
            where: {
                OR: [
                    { status: 'pending' },
                    { status: 'in_progress' },
                ],
                serviceDate: {
                    lt: sevenDaysAgo,
                },
            },
        });
        console.log("Fetched services:", services);
        return services;
    })
};
