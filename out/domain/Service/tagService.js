"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagService = void 0;
var TagService = /** @class */ (function () {
    function TagService(repository) {
        var _this = this;
        this.findAll = function () {
            return _this.repository.findAll();
        };
        this.findById = function (id) {
            return _this.repository.findById(id);
        };
        this.create = function (tag) {
            return _this.repository.create(tag);
        };
        this.update = function (tag) {
            if (tag.getId() == null)
                return null;
            return _this.repository.update(tag);
        };
        this.delete = function (id) {
            return _this.repository.delete(id);
        };
        this.repository = repository;
    }
    return TagService;
}());
exports.TagService = TagService;
//# sourceMappingURL=tagService.js.map