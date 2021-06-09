"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTypeService = void 0;
var TagTypeService = /** @class */ (function () {
    function TagTypeService(repository) {
        var _this = this;
        this.findAll = function () {
            return _this.repository.findAll();
        };
        this.findById = function (id) {
            return _this.repository.findById(id);
        };
        this.create = function (tagType) {
            return _this.repository.create(tagType);
        };
        this.update = function (tagType) {
            if (tagType.id == null)
                return null;
            return _this.repository.update(tagType);
        };
        this.delete = function (id) {
            return _this.repository.delete(id);
        };
        this.repository = repository;
    }
    return TagTypeService;
}());
exports.TagTypeService = TagTypeService;
//# sourceMappingURL=tagTypeService.js.map