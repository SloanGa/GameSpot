"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManageErrors = void 0;
const createManageErrors = (app) => {
    return (_req, res) => {
        app.locals.status = 404;
        res.status(404).render("404", { game: "" });
    };
};
exports.createManageErrors = createManageErrors;
//# sourceMappingURL=errors.middleware.js.map