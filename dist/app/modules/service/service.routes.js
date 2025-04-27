"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(service_validation_1.createServiceZodSchema), service_controller_1.ServiceController.createService);
router.get('/', service_controller_1.ServiceController.getAllServices);
router.get('/status', service_controller_1.ServiceController.getPendingOrOverdueServices);
router.get('/:id', service_controller_1.ServiceController.getSingleService);
router.put('/:id/complete', (0, validateRequest_1.default)(service_validation_1.markServiceCompleteZodSchema), service_controller_1.ServiceController.markServiceAsCompleted);
exports.ServiceRoutes = router;
