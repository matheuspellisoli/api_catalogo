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
exports.TagRoutes = void 0;
var routes_1 = require("./routes");
var tagDTO_1 = require("../application/dto/tagDTO");
var tagConverter_1 = require("../application/converter/tagConverter");
var uuid_1 = require("uuid");
var TagRoutes = /** @class */ (function (_super) {
    __extends(TagRoutes, _super);
    function TagRoutes(app, tagService) {
        var _this = _super.call(this, app, 'tags') || this;
        _this.tagService = tagService;
        _this.tagCoverter = new tagConverter_1.TagConverter();
        return _this;
    }
    TagRoutes.prototype.configureRoutes = function () {
        var _this = this;
        this.app.route("/api/tag")
            .get(function (req, res) {
            res.status(200).send(Object.values(_this.tagService.findAll()));
        })
            .post(function (req, res) {
            try {
                var tag = new tagDTO_1.TagDTO(uuid_1.v4(), req.body.value, req.body.type, req.body.active);
                tag = _this.tagCoverter.toDTO(_this.tagService.create(_this.tagCoverter.toModel(tag)));
                res.status(200).send(tag);
            }
            catch (e) {
                console.error(e);
            }
        });
        this.app.route("/api/tag/:id")
            .all(function (req, res, next) {
            next();
        })
            .get(function (req, res) {
            var id = "" + req.params.id;
            var item = _this.tagService.findById(id);
            if (item)
                res.status(200).send(item);
            res.status(404).send('resource not found');
        })
            .put(function (req, res) {
            var tag = new tagDTO_1.TagDTO(req.body.id, req.body.value, req.body.type, req.body.active);
            tag = _this.tagCoverter.toDTO(_this.tagService.update(_this.tagCoverter.toModel(tag)));
            res.status(200).send(tag);
        })
            .delete(function (req, res) {
            var id = "" + req.params.id;
            _this.tagService.delete(id);
            res.status(200).send("DELETE requested for id " + req.params.id);
        });
        return this.app;
    };
    return TagRoutes;
}(routes_1.Routes));
exports.TagRoutes = TagRoutes;
//# sourceMappingURL=tagRoutes.js.map