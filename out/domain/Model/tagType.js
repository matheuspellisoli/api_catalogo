"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagType = void 0;
var TagType = /** @class */ (function () {
    function TagType(id, description, visible, list, listvalues, active) {
        this.id = id;
        this.description = description;
        this.visible = visible;
        this.list = list == null ? false : list;
        this.listvalues = listvalues == null ? "" : listvalues;
        this.active = active;
    }
    TagType.prototype.getId = function () {
        return this.id;
    };
    TagType.prototype.getDescription = function () {
        return this.description;
    };
    TagType.prototype.isVisible = function () {
        return this.visible;
    };
    TagType.prototype.isList = function () {
        return this.list;
    };
    TagType.prototype.getListvalues = function () {
        return this.listvalues;
    };
    TagType.prototype.isActive = function () {
        return this.active;
    };
    return TagType;
}());
exports.TagType = TagType;
//# sourceMappingURL=tagType.js.map