"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, _next) => {
    console.error(err.stack);
    const statusCode = err.status || err.statusCode || 500;
    const errorResponse = {
        success: false,
        status: statusCode,
        message: err.message || 'Internal Server Error',
    };
    if (err.errorDetails) {
        errorResponse.errorDetails = err.errorDetails;
    }
    if (process.env.NODE_ENV === 'development') {
        errorResponse.stack = err.stack;
    }
    res.status(statusCode).json(errorResponse);
};
exports.errorHandler = errorHandler;
