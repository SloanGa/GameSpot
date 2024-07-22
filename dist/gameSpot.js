"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const locals_middleware_1 = require("./middlewares/locals.middleware");
const errors_middleware_1 = require("./middlewares/errors.middleware");
const games_json_1 = __importDefault(require("./models/games.json"));
const routes_1 = __importDefault(require("./routes/routes"));
app.set("views", (0, path_1.join)(__dirname, "..", "views"));
app.set("view engine", "ejs");
app.use(express_1.default.static((0, path_1.join)(__dirname, "..", "public")));
const locals = (0, locals_middleware_1.createLocals)(app, games_json_1.default);
app.use(locals);
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const manageErrors = (0, errors_middleware_1.createManageErrors)(app);
app.use(manageErrors);
//# sourceMappingURL=gameSpot.js.map