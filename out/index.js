"use strict";
///https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
// import { itemsRouter } from "./domain/items/routes";
var errorMiddleware_1 = require("./middleware/errorMiddleware");
var notFoundMiddleware_1 = require("./middleware/notFoundMiddleware");
var itemRoutes_1 = require("./application/Routes/itemRoutes");
var tagRoutes_1 = require("./application/Routes/tagRoutes");
var tagTypeRoutes_1 = require("./application/Routes/tagTypeRoutes");
var itemRepositoryImp_1 = require("./infra/repository/itemRepositoryImp");
var ItemService_1 = require("./domain/Service/ItemService");
var tagRepositoryImp_1 = require("./infra/repository/tagRepositoryImp");
var tagService_1 = require("./domain/Service/tagService");
var tagTypeRepositoryImp_1 = require("./infra/repository/tagTypeRepositoryImp");
var tagTypeService_1 = require("./domain/Service/tagTypeService");
dotenv.config();
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = express_1.default();
var routes = [];
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
routes.push(new itemRoutes_1.ItemRoutes(app, new ItemService_1.ItemService(new itemRepositoryImp_1.ItemRepositoryImp())));
routes.push(new tagRoutes_1.TagRoutes(app, new tagService_1.TagService(new tagRepositoryImp_1.TagRepositoryImp())));
routes.push(new tagTypeRoutes_1.TagTypeRoutes(app, new tagTypeService_1.TagTypeService(new tagTypeRepositoryImp_1.TagTypeRepositoryImp())));
app.use(errorMiddleware_1.errorHandler);
app.use(notFoundMiddleware_1.notFoundHandler);
app.use(routes.map(function (x) { return x.configureRoutes; }));
app.listen(PORT, function () {
    routes.forEach(function (route) {
        console.log("Routes configured for " + route.getName());
    });
    console.log("Listening on port " + PORT);
});
//# sourceMappingURL=index.js.map