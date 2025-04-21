import { Request, Response, NextFunction } from 'express';

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  stack?: string;
}

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);

  const errorResponse: ErrorResponse = {
    success: false,
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  };

  res.status(errorResponse.status).json(errorResponse);
};
