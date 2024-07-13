import { NextFunction, Request, Response } from "express";
import games from "../models/games.json";
import { IGames } from "../models/IGames";

export const getEachGame = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const game = games.find((game: IGames) => game.name === req.params.nomDuJeu);

  if (game) {
    return res.render(`${game.name}`, { game: game });
  }
  next();
};
