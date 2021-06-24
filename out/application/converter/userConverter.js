"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConverter = void 0;
var user_1 = require("../../domain/Model/user");
var userDTO_1 = require("../dto/userDTO");
var UserConverter = /** @class */ (function () {
    function UserConverter() {
    }
    UserConverter.prototype.toModel = function (dto) {
        return new user_1.User(dto.id, dto.name, dto.mail, dto.password, dto.address, dto.active, dto.rules);
    };
    UserConverter.prototype.toDTO = function (model) {
        return new userDTO_1.UserDTO(model.getId(), model.getName(), model.getMail(), model.getPassword(), model.getAddress(), model.isActive(), model.getRules());
    };
    return UserConverter;
}());
exports.UserConverter = UserConverter;
//# sourceMappingURL=userConverter.js.map