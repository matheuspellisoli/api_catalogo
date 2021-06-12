"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagConverter = void 0;
var tag_1 = require("../../domain/Model/tag");
var tagDTO_1 = require("../dto/tagDTO");
var tagTypeConverter_1 = require("./tagTypeConverter");
var TagConverter = /** @class */ (function () {
    function TagConverter() {
        this.tagTypeConvert = new tagTypeConverter_1.TagTypeConverter();
    }
    TagConverter.prototype.toModel = function (dto) {
        var tag = new tag_1.Tag(dto.id, dto.value, this.tagTypeConvert.toModel(dto.type), dto.active);
        return tag;
    };
    TagConverter.prototype.toDTO = function (model) {
        var tag = new tagDTO_1.TagDTO(model.getId(), model.getvalue(), this.tagTypeConvert.toDTO(model.getType()), model.isActive());
        return tag;
    };
    return TagConverter;
}());
exports.TagConverter = TagConverter;
//# sourceMappingURL=tagConverter.js.map