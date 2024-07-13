import { Request, Response, NextFunction } from "express";

/**
 * Middleware for logging requests.
 *
 * @param {Request} req - The Express request object.
 * @param {Response} _res - The Express response object (not used in this middleware).
 * @param {NextFunction} next - The callback function to pass control to the next middleware.
 */

export const logging = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const dateISO = new Date().toISOString();
  const ip = req.ip;
  const path = `${req.hostname}${req.path}`;
  console.log(`[${dateISO} ${ip}] ${path}`);
  next();
};
