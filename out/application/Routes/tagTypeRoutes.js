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
exports.TagTypeRoutes = void 0;
var routes_1 = require("./routes");
var tagType_1 = require("../../domain/Model/tagType");
var TagTypeRoutes = /** @class */ (function (_super) {
    __extends(TagTypeRoutes, _super);
    function TagTypeRoutes(app, tagTypeService) {
        var _this = _super.call(this, app, 'tagTypes') || this;
        _this.tagTypeService = tagTypeService;
        return _this;
    }
    TagTypeRoutes.prototype.configureRoutes = function () {
        var _this = this;
        this.app.route("/api/tagtype")
            .get(function (req, res) {
            res.status(200).send(Object.values(_this.tagTypeService.findAll()));
        })
            .post(function (req, res) {
            try {
                var tagType = new tagType_1.TagType(null, req.body.description, req.body.visible);
                tagType = _this.tagTypeService.create(tagType);
                res.status(200).send(tagType);
            }
            catch (e) {
                console.error(e);
            }
        });
        this.app.route("/api/tagtype/:id")
            .all(function (req, res, next) {
            var id = Number("" + req.params.id);
            if (id == NaN)
                res.status(400).send('id required');
            next();
        })
            .get(function (req, res) {
            var id = Number("" + req.params.id);
            var tagType = _this.tagTypeService.findById(id);
            if (tagType)
                res.status(200).send(tagType);
            res.status(404).send('resource not found');
        })
            .put(function (req, res) {
            var tagType = new tagType_1.TagType(req.body.id, req.body.description, req.body.visible);
            tagType = _this.tagTypeService.update(tagType);
            res.status(200).send(tagType);
        })
            .delete(function (req, res) {
            var id = Number("" + req.params.id);
            _this.tagTypeService.delete(id);
            res.status(200).send("DELETE requested for id " + req.params.id);
        });
        return this.app;
    };
    return TagTypeRoutes;
}(routes_1.Routes));
exports.TagTypeRoutes = TagTypeRoutes;
//# sourceMappingURL=tagTypeRoutes.js.map