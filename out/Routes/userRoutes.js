"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var routes_1 = require("./routes");
var uuid_1 = require("uuid");
var userConverter_1 = require("../application/converter/userConverter");
var userDTO_1 = require("../application/dto/userDTO");
var loginDTO_1 = require("../application/dto/loginDTO");
var UserRoutes = /** @class */ (function (_super) {
    __extends(UserRoutes, _super);
    function UserRoutes(app, userService) {
        var _this = _super.call(this, app, 'users') || this;
        _this.userService = userService;
        _this.userConvert = new userConverter_1.UserConverter();
        return _this;
    }
    UserRoutes.prototype.configureRoutes = function () {
        var _this = this;
        this.app.route("/api/user")
            .get(function (req, res) {
            res.status(200).send(Object.values(_this.userService.findAll()));
        })
            .post(function (req, res) {
            try {
                var user = new userDTO_1.UserDTO(uuid_1.v4(), req.body.name, req.body.mail, req.body.password, req.body.address, req.body.active, req.body.rules);
                _this.userConvert.toDTO(_this.userService.create(_this.userConvert.toModel(user)));
                res.status(200).send(user);
            }
            catch (e) {
                console.error(e);
            }
        });
        this.app.route("/api/user/:id")
            .get(function (req, res) {
            var id = "" + req.params.id;
            var user = _this.userService.findById(id);
            if (user)
                res.status(200).send(_this.userConvert.toDTO(user));
            else
                res.status(404).send('resource not found');
        })
            .put(function (req, res) {
            var user = new userDTO_1.UserDTO(req.body.id, req.body.name, req.body.mail, req.body.password, req.body.address, req.body.active, req.body.rules);
            _this.userConvert.toDTO(_this.userService.update(_this.userConvert.toModel(user)));
            res.status(200).send(user);
        })
            .delete(function (req, res) {
            var id = "" + req.params.id;
            _this.userService.delete(id);
            res.status(200).send("DELETE requested for id " + req.params.id);
        });
        this.app.route("/api/login")
            .post(function (req, res) {
            try {
                var userLogin = new loginDTO_1.LoginDTO(req.body.mail, req.body.password);
                var user = _this.userService.findByEmail(userLogin.mail);
                if (user.getPassword() == userLogin.password) {
                    var token = uuid_1.v4();
                    user.setToken(token);
                    _this.userService.update(user);
                    res.status(200).send({ "token": token });
                }
                else {
                    res.status(403).send("Forbidden");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        return this.app;
    };
    return UserRoutes;
}(routes_1.Routes));
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=userRoutes.js.map