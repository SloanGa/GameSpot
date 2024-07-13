import { Request, Response, Express } from "express";

/**
 * Middleware to handle 404 errors by setting the status and rendering a 404 page.
 *
 * @param {Express} app - The Express application instance.
 * @returns {(req: Request, res: Response) => void} - The middleware function that sets the status to 404 and renders the 404 page.
 */

export const createManageErrors = (app: Express) => {
  return (_req: Request, res: Response) => {
    app.locals.status = 404;
    res.status(404).render("404", { game: "" });
  };
};
