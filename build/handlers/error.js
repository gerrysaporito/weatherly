"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @description: Handler to display errors without shutting down the server.
 *
 * @param: error (Exception Object)
 * @param: request (Object)
 * @param: response (Object)
 * @param: next (Function)
 * @return Object
 */
function errorHandler(err, req, res, next) {
    return res.status(err.status || 500).json({
        error: {
            message: err.message || "Oops! Something went wrong.",
            info: err.info || { request: req },
        },
    });
}
exports.default = errorHandler;
