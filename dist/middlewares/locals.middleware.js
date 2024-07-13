"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocals = void 0;
const createLocals = (app, games) => {
    return (_req, res, next) => {
        app.locals.status = res.statusCode;
        app.locals.games = games;
        next();
    };
};
exports.createLocals = createLocals;
//# sourceMappingURL=locals.middleware.js.map