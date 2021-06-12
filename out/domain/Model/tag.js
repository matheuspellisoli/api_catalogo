"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var Tag = /** @class */ (function () {
    function Tag(id, value, type, active) {
        this.id = id;
        this.value = value;
        this.type = type;
        this.active = active;
    }
    Tag.prototype.getId = function () {
        return this.id;
    };
    Tag.prototype.getvalue = function () {
        return this.value;
    };
    Tag.prototype.getType = function () {
        return this.type;
    };
    Tag.prototype.isActive = function () {
        return this.active;
    };
    return Tag;
}());
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map