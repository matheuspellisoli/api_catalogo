"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRepositoryImp = void 0;
var TagRepositoryImp = /** @class */ (function () {
    function TagRepositoryImp() {
        this.items = [
            {
                id: 1,
                description: "Azul",
                type: {
                    id: 1,
                    description: "cor",
                    visible: true
                },
                active: true
            }
        ];
    }
    TagRepositoryImp.prototype.findAll = function () {
        return this.items;
    };
    TagRepositoryImp.prototype.findById = function (id) {
        return this.items.filter(function (i) { return i.id == id; })[0];
    };
    TagRepositoryImp.prototype.create = function (item) {
        item.id = this.items.length + 1;
        this.items.push(item);
        return item;
    };
    TagRepositoryImp.prototype.update = function (item) {
        this.items[this.items.findIndex(function (i) { return i.id == item.id; })] = item;
        return item;
    };
    TagRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.items[this.items.findIndex(function (item) { return item.id == id; })];
        return true;
    };
    return TagRepositoryImp;
}());
exports.TagRepositoryImp = TagRepositoryImp;
//# sourceMappingURL=tagRepositoryImp.js.map