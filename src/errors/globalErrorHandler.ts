// src/middleware/globalErrorHandler.ts

import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export function globalErrorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(" Error:", err); // Optional: log stack trace here

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    // Fallback for unexpected errors
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
