"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_routes_1 = require("../app/modules/customer/customer.routes");
const bike_routes_1 = require("../app/modules/bike/bike.routes");
const service_routes_1 = require("../app/modules/service/service.routes");
const router = express_1.default.Router();
router.use('/api/customers', customer_routes_1.CustomerRoutes);
router.use('/api/bikes', bike_routes_1.BikeRoutes);
router.use('/api/services', service_routes_1.ServiceRoutes);
exports.default = router;
