"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImp = void 0;
var user_1 = require("../../domain/Model/user");
var UserRepositoryImp = /** @class */ (function () {
    function UserRepositoryImp() {
        this.users = [new user_1.User("a5fad476-a451-4c64-9331-ef50117fb9bb", "fulano de tal", "fulano@gmail.com", "a", "Alameda Tucumã, Brasil Novo - Macapá  AP | 68909-335", true, null),
            new user_1.User("ea50b0ab-084e-4bcc-ba61-8e735d395bc4", "fulano de tal 2", "fulano2@gmail.com", "a", "Alameda Tucumã, Brasil Novo - Macapá  AP | 68909-335", true, null)];
    }
    UserRepositoryImp.prototype.findAll = function () {
        return this.users;
    };
    UserRepositoryImp.prototype.findById = function (id) {
        return this.users.filter(function (u) { return u.getId() == id; })[0];
    };
    UserRepositoryImp.prototype.findByEmail = function (mail) {
        return this.users.filter(function (u) { return u.getMail() == mail; })[0];
    };
    UserRepositoryImp.prototype.create = function (user) {
        this.users.push(user);
        return user;
    };
    UserRepositoryImp.prototype.update = function (user) {
        return this.users[this.users.findIndex(function (u) { return u.getId() == user.getId(); })] = user;
        return user;
    };
    UserRepositoryImp.prototype.delete = function (id) {
        var item = this.findById(id);
        if (!item) {
            return false;
        }
        delete this.users[this.users.findIndex(function (u) { return u.getId() == id; })];
        return true;
    };
    return UserRepositoryImp;
}());
exports.UserRepositoryImp = UserRepositoryImp;
//# sourceMappingURL=userRepositoryImp.js.map