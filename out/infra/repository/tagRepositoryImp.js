"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRepositoryImp = void 0;
var tag_1 = require("../../domain/Model/tag");
var tagType_1 = require("../../domain/Model/tagType");
var TagRepositoryImp = /** @class */ (function () {
    function TagRepositoryImp() {
        this.items = [new tag_1.Tag("a6123396-e45b-4f68-96aa-f4ce72e1d933", "Azul", new tagType_1.TagType("cca10c75-6728-452f-8843-7a4425f3dfc1", "Cor", true, false, "", true), true),
            new tag_1.Tag("76805e39-f653-4f7b-9fa5-0ff795cac5fe", "G", new tagType_1.TagType("bf97d25a-36b9-40d7-83f1-809469de3ce4", "Tamanho", true, true, "P,M,G,GG", true), true)];
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