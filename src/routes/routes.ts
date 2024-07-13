import express from "express";
const router = express.Router();

import homeRoute from "./home.routes";
import gamesRouter from "./games.routes";

router.use("/", homeRoute);
router.use("/game", gamesRouter);

export default router;
