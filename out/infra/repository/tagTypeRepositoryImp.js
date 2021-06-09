"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTypeRepositoryImp = void 0;
var TagTypeRepositoryImp = /** @class */ (function () {
    function TagTypeRepositoryImp() {
        this.items = [
            {
                id: 1,
                description: "cor",
                visible: true
            }
        ];
    }
    TagTypeRepositoryImp.prototype.findAll = function () {
        return this.items;
    };
    TagTypeRepositoryImp.prototype.findById = function (id) {
        return this.items.filter(function (i) { return i.id == id; })[0];
    };
    TagTypeRepositoryImp.prototype.create = function (item) {
        item.id = this.items.length + 1;
        this.items.push(item);
        return item;
    };
    TagTypeRepositoryImp.prototype.update = function (item) {
        this.items[this.items.findIndex(function (i) { return i.id == item.id; })] = item;
        return item;
    };
    TagTypeRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.items[this.items.findIndex(function (item) { return item.id == id; })];
        return true;
    };
    return TagTypeRepositoryImp;
}());
exports.TagTypeRepositoryImp = TagTypeRepositoryImp;
//# sourceMappingURL=tagTypeRepositoryImp.js.map