"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = void 0;
const logging = (req, _res, next) => {
    const dateISO = new Date().toISOString();
    const ip = req.ip;
    const path = `${req.hostname}${req.path}`;
    console.log(`[${dateISO} ${ip}] ${path}`);
    next();
};
exports.logging = logging;
//# sourceMappingURL=logging.middleware.js.map