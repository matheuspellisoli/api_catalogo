"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepositoryImp = void 0;
var ItemRepositoryImp = /** @class */ (function () {
    function ItemRepositoryImp() {
        this.items = [
            {
                id: 1,
                title: "item 1",
                description: "um belo item",
                price: 10.7,
                tags: [
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
                ],
                images: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
                active: true
            }
        ];
    }
    ItemRepositoryImp.prototype.findAll = function () {
        return this.items;
    };
    ItemRepositoryImp.prototype.findById = function (id) {
        return this.items.filter(function (i) { return i.id == id; })[0];
    };
    ItemRepositoryImp.prototype.create = function (item) {
        item.id = this.items.length + 1;
        this.items.push(item);
        return item;
    };
    ItemRepositoryImp.prototype.update = function (item) {
        this.items[this.items.findIndex(function (i) { return i.id == item.id; })] = item;
        return item;
    };
    ItemRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.items[this.items.findIndex(function (item) { return item.id == id; })];
        return true;
    };
    return ItemRepositoryImp;
}());
exports.ItemRepositoryImp = ItemRepositoryImp;
//# sourceMappingURL=itemRepositoryImp.js.map