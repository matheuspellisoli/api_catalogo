"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService(repository) {
        var _this = this;
        this.findAll = function () {
            return _this.repository.findAll();
        };
        this.findById = function (id) {
            return _this.repository.findById(id);
        };
        this.create = function (user) {
            return _this.repository.create(user);
        };
        this.update = function (user) {
            if (user.getId() == null)
                return null;
            return _this.repository.update(user);
        };
        this.delete = function (id) {
            return _this.repository.delete(id);
        };
        this.repository = repository;
    }
    UserService.prototype.findByEmail = function (mail) {
        return this.repository.findByEmail(mail);
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map