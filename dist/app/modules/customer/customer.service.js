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
exports.CustomerService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.CustomerService = {
    createCustomer: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.customer.create({ data: payload });
    }),
    getAllCustomers: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.customer.findMany();
    }),
    getSingleCustomer: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.customer.findUnique({ where: { customerId: id } });
    }),
    updateCustomer: (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.customer.update({
            where: { customerId: id },
            data: payload,
        });
    }),
    deleteCustomer: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.customer.delete({ where: { customerId: id } });
    }),
};
