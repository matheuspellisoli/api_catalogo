"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagTypeRepositoryImp = void 0;
var tagType_1 = require("../../domain/Model/tagType");
var TagTypeRepositoryImp = /** @class */ (function () {
    function TagTypeRepositoryImp() {
        this.items = [
            new tagType_1.TagType(1, "Cor", true, false, "", true),
            new tagType_1.TagType(2, "Tamanho", true, true, "P,M,G,GG", true)
        ];
    }
    TagTypeRepositoryImp.prototype.findAll = function () {
        return this.items;
    };
    TagTypeRepositoryImp.prototype.findById = function (id) {
        return this.items.filter(function (i) { return i.getId() == id; })[0];
    };
    TagTypeRepositoryImp.prototype.create = function (item) {
        this.items.push(item);
        return item;
    };
    TagTypeRepositoryImp.prototype.update = function (item) {
        this.items[this.items.findIndex(function (i) { return i.getId() == item.getId(); })] = item;
        return item;
    };
    TagTypeRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.items[this.items.findIndex(function (item) { return item.getId() == id; })];
        return true;
    };
    return TagTypeRepositoryImp;
}());
exports.TagTypeRepositoryImp = TagTypeRepositoryImp;
//# sourceMappingURL=tagTypeRepositoryImp.js.map