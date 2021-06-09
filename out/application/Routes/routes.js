"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var Routes = /** @class */ (function () {
    function Routes(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    Routes.prototype.getName = function () {
        return this.name;
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map