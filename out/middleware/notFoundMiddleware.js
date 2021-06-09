"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
var notFoundHandler = function (request, response, next) {
    var message = "Resource not found";
    response.status(404).send(message);
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=notFoundMiddleware.js.map