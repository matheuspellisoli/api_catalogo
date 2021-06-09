"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRoutes = void 0;
var routes_1 = require("./routes");
var item_1 = require("../../domain/Model/item");
var ItemRoutes = /** @class */ (function (_super) {
    __extends(ItemRoutes, _super);
    function ItemRoutes(app, itemService) {
        var _this = _super.call(this, app, 'items') || this;
        _this.itemService = itemService;
        return _this;
    }
    ItemRoutes.prototype.configureRoutes = function () {
        var _this = this;
        this.app.route("/api/item")
            .get(function (req, res) {
            res.status(200).send(Object.values(_this.itemService.findAll()));
        })
            .post(function (req, res) {
            try {
                var item = new item_1.Item(null, req.body.title, req.body.description, req.body.price, req.body.tags, req.body.images, req.body.active);
                item = _this.itemService.create(item);
                res.status(200).send(item);
            }
            catch (e) {
                console.error(e);
            }
        });
        this.app.route("/api/item/:itemID")
            .all(function (req, res, next) {
            var id = Number("" + req.params.itemID);
            if (id == NaN)
                res.status(400).send('id required');
            next();
        })
            .get(function (req, res) {
            var id = Number("" + req.params.itemID);
            var item = _this.itemService.findById(id);
            if (item)
                res.status(200).send(item);
            res.status(404).send('resource not found');
        })
            .put(function (req, res) {
            var item = new item_1.Item(req.body.id, req.body.title, req.body.description, req.body.price, req.body.tags, req.body.images, req.body.active);
            item = _this.itemService.update(item);
            res.status(200).send(item);
        })
            .delete(function (req, res) {
            var id = Number("" + req.params.itemID);
            _this.itemService.delete(id);
            res.status(200).send("DELETE requested for id " + req.params.itemID);
        });
        return this.app;
    };
    return ItemRoutes;
}(routes_1.Routes));
exports.ItemRoutes = ItemRoutes;
//# sourceMappingURL=itemRoutes.js.map