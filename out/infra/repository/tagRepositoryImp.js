"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRepositoryImp = void 0;
var tag_1 = require("../../domain/Model/tag");
var tagType_1 = require("../../domain/Model/tagType");
var TagRepositoryImp = /** @class */ (function () {
    function TagRepositoryImp() {
        this.items = [
            new tag_1.Tag(1, "Azul", new tagType_1.TagType(1, "Cor", true, false, "", true), true),
            new tag_1.Tag(2, "G", new tagType_1.TagType(2, "Tamanho", true, true, "P,M,G,GG", true), true)
        ];
    }
    TagRepositoryImp.prototype.findAll = function () {
        return this.items;
    };
    TagRepositoryImp.prototype.findById = function (id) {
        return this.items.filter(function (i) { return i.getId() == id; })[0];
    };
    TagRepositoryImp.prototype.create = function (item) {
        this.items.push(item);
        return item;
    };
    TagRepositoryImp.prototype.update = function (item) {
        this.items[this.items.findIndex(function (i) { return i.getId() == item.getId(); })] = item;
        return item;
    };
    TagRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.items[this.items.findIndex(function (item) { return item.getId() == id; })];
        return true;
    };
    return TagRepositoryImp;
}());
exports.TagRepositoryImp = TagRepositoryImp;
//# sourceMappingURL=tagRepositoryImp.js.map