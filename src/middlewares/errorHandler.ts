import { Request, Response, NextFunction } from 'express';

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  stack?: string;
  errorDetails?: unknown;
}

export const errorHandler = (err: any, req: Request, res: Response, _next: NextFunction): void => {
  console.error(err.stack);

  const statusCode = err.status || err.statusCode || 500;

  const errorResponse: ErrorResponse = {
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
