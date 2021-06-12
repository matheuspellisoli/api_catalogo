"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(id, title, description, price, tags, images, active) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.tags = tags;
        this.images = images;
        this.active = active;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getTitle = function () {
        return this.title;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getTags = function () {
        return this.tags;
    };
    Item.prototype.getImages = function () {
        return this.images;
    };
    Item.prototype.isActive = function () {
        return this.active;
    };
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map