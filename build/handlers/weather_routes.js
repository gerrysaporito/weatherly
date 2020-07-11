"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Oops! Something went wrong.",
            info: error.info || {},
        },
    });
}
exports.default = errorHandler;
