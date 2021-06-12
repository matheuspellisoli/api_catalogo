"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepositoryImp = void 0;
var item_1 = require("../../domain/Model/item");
var tag_1 = require("../../domain/Model/tag");
var tagType_1 = require("../../domain/Model/tagType");
var ItemRepositoryImp = /** @class */ (function () {
    function ItemRepositoryImp() {
        this.tags = [new tag_1.Tag(1, "Azul", new tagType_1.TagType(1, "Cor", true, false, "", true), true),
            new tag_1.Tag(2, "G", new tagType_1.TagType(2, "Tamanho", true, true, "P,M,G,GG", true), true)];
        this.imgs = ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"];
        this.items = [
            new item_1.Item(1, "casaco", "um belo casaco", 149.99, this.tags, this.imgs, true)
        ];
    }
    ItemRepositoryImp.prototype.findAll = function () {
        return this.items;
    };
    ItemRepositoryImp.prototype.findById = function (id) {
        return this.items.filter(function (i) { return i.getId() == id; })[0];
    };
    ItemRepositoryImp.prototype.create = function (item) {
        this.items.push(item);
        return item;
    };
    ItemRepositoryImp.prototype.update = function (item) {
        this.items[this.items.findIndex(function (i) { return i.getId() == item.getId(); })] = item;
        return item;
    };
    ItemRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.items[this.items.findIndex(function (item) { return item.getId() == id; })];
        return true;
    };
    return ItemRepositoryImp;
}());
exports.ItemRepositoryImp = ItemRepositoryImp;
//# sourceMappingURL=itemRepositoryImp.js.map