"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const logging_middleware_1 = require("./middlewares/logging.middleware");
const locals_middleware_1 = require("./middlewares/locals.middleware");
const errors_middleware_1 = require("./middlewares/errors.middleware");
const games_json_1 = __importDefault(require("./models/games.json"));
const routes_1 = __importDefault(require("./routes/routes"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express_1.default.static("public"));
app.use(logging_middleware_1.logging);
const locals = (0, locals_middleware_1.createLocals)(app, games_json_1.default);
app.use(locals);
app.use(routes_1.default);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const manageErrors = (0, errors_middleware_1.createManageErrors)(app);
app.use(manageErrors);
//# sourceMappingURL=gameHub.js.map