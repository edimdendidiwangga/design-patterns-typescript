"use strict";
exports.__esModule = true;
var OperationService_1 = require("./OperationService");
var calculate1 = function () {
    var num1 = 20;
    var num2 = 30;
    return OperationService_1["default"](num1, num2);
};
var calculate2 = function () {
    var num1 = 10;
    var num2 = 5;
    return OperationService_1["default"](num1, num2);
};
console.log(calculate1());
console.log(calculate2());
