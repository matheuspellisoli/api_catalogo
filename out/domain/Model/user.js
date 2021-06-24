"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, mail, password, address, active, rules) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.address = address;
        this.active = active;
        this.rules = rules;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getMail = function () {
        return this.mail;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.getRules = function () {
        return this.rules;
    };
    User.prototype.isActive = function () {
        return this.active;
    };
    User.prototype.getToken = function () {
        return this.token;
    };
    User.prototype.setToken = function (token) {
        this.token = token;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map