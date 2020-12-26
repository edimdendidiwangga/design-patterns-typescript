"use strict";
exports.__esModule = true;
var Keyboard = require("./Keyboard");
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, withNumeric, withTouchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }
    BaseLaptop.prototype.a = function () {
        return Keyboard.a();
    };
    BaseLaptop.prototype.b = function () {
        return Keyboard.b();
    };
    return BaseLaptop;
}());
exports["default"] = BaseLaptop;
