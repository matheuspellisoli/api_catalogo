"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemConverter = void 0;
var item_1 = require("../../domain/Model/item");
var itemDTO_1 = require("../dto/itemDTO");
var tagConverter_1 = require("./tagConverter");
var itemConverter = /** @class */ (function () {
    function itemConverter() {
        this.tagConverter = new tagConverter_1.TagConverter();
    }
    itemConverter.prototype.toModel = function (dto) {
        var _this = this;
        var tags = [];
        dto.tags.forEach(function (tag) {
            tags.push(_this.tagConverter.toModel(tag));
        });
        var item = new item_1.Item(dto.id, dto.title, dto.description, dto.price, tags, dto.images, dto.active);
        return item;
    };
    itemConverter.prototype.toDTO = function (model) {
        var _this = this;
        var tags = [];
        model.getTags().forEach(function (tag) {
            tags.push(_this.tagConverter.toDTO(tag));
        });
        var item = new itemDTO_1.ItemDTO(model.getId(), model.getTitle(), model.getDescription(), model.getPrice(), tags, model.getImages(), model.isActive());
        return item;
    };
    return itemConverter;
}());
exports.itemConverter = itemConverter;
//# sourceMappingURL=itemConverter.js.map