"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
var ItemService = /** @class */ (function () {
    function ItemService(repository) {
        var _this = this;
        this.findAll = function () {
            return _this.repository.findAll();
        };
        this.findById = function (id) {
            return _this.repository.findById(id);
        };
        this.create = function (item) {
            return _this.repository.create(item);
        };
        this.update = function (item) {
            if (item.getId() == null)
                return null;
            return _this.repository.update(item);
        };
        this.delete = function (id) {
            return _this.repository.delete(id);
        };
        this.repository = repository;
    }
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=ItemService.js.map