"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEachGame = void 0;
const games_json_1 = __importDefault(require("../models/games.json"));
const getEachGame = (req, res, next) => {
    const game = games_json_1.default.find((game) => game.name === req.params.nomDuJeu);
    if (game) {
        return res.render(`${game.name}`, { game: game });
    }
    next();
};
exports.getEachGame = getEachGame;
//# sourceMappingURL=game.controller.js.map