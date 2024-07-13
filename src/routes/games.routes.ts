import express from "express";
import { getEachGame } from "../controllers/game.controller";

const router = express.Router();

router.get("/:nomDuJeu", getEachGame);

export default router;
