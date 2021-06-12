"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTypeConverter = void 0;
var tagType_1 = require("../../domain/Model/tagType");
var tagTypeDTO_1 = require("../dto/tagTypeDTO");
var TagTypeConverter = /** @class */ (function () {
    function TagTypeConverter() {
    }
    TagTypeConverter.prototype.toModel = function (dto) {
        var tagType = new tagType_1.TagType(dto.id, dto.description, dto.visible, dto.list, dto.listvalues, dto.active);
        return tagType;
    };
    TagTypeConverter.prototype.toDTO = function (model) {
        var tagType = new tagTypeDTO_1.TagTypeDTO(model.getId(), model.getDescription(), model.isVisible(), model.isList(), model.getListvalues(), model.isActive());
        return tagType;
    };
    return TagTypeConverter;
}());
exports.TagTypeConverter = TagTypeConverter;
//# sourceMappingURL=tagTypeConverter.js.map