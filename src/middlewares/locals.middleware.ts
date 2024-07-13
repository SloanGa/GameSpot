import { Request, Response, NextFunction, Express } from "express";
import { IGames } from "../models/IGames";

/**
 * Middleware to create local variables for the application.
 *
 * @param {Express} app - The Express application instance.
 * @param {IGames[]} games - The games data to be stored in locals.
 * @returns {(req: Request, res: Response, next: NextFunction) = void} - The middleware function that sets local variables.
 */

export const createLocals = (app: Express, games: IGames[]) => {
  return (_req: Request, res: Response, next: NextFunction): void => {
    app.locals.status = res.statusCode;
    app.locals.games = games;
    next();
  };
};
