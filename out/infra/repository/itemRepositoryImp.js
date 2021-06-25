"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepositoryImp = void 0;
var item_1 = require("../../domain/Model/item");
var tag_1 = require("../../domain/Model/tag");
var tagType_1 = require("../../domain/Model/tagType");
var ItemRepositoryImp = /** @class */ (function () {
    function ItemRepositoryImp() {
        this.tags = [new tag_1.Tag("a6123396-e45b-4f68-96aa-f4ce72e1d933", "Chaves", new tagType_1.TagType("cca10c75-6728-452f-8843-7a4425f3dfc1", "tipo", true, false, "", true), true),];
        this.imgs = ["https://img.lojadomecanico.com.br/IMAGENS/2/301/110860/Jogo-100-pecas-Chaves-de-Fenda-Phillips--fortgpro-fg81931.JPG"];
        this.items = [
            new item_1.Item("18ec39f5-c2c8-4a95-9931-38482dcd48f7", "Jogo 100 Chaves", "O Jogo com 100 de Chaves de Fenda e Phillips FORTG PRO FG8193", 149.99, this.tags, this.imgs, true)
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
    ItemRepositoryImp.prototype.search = function (value) {
        var itemsFilter = [];
        this.items.map(function (item) {
            if (item.getDescription().toLowerCase().includes(value.toLowerCase()))
                itemsFilter.push(item);
            else if (item.getTitle().toLowerCase().includes(value.toLowerCase()))
                itemsFilter.push(item);
            else if (item.getTags().filter(function (tag) { return tag.getvalue().toLowerCase().includes(value.toLowerCase()); }).length > 0)
                itemsFilter.push(item);
        });
        return itemsFilter;
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