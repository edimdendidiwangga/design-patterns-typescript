/*                                 Store

            Product Type                       Price
Fashion(price)    Electronic(type)        Cheap   Expensive
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cheap = /** @class */ (function () {
    function Cheap() {
        this.name = 'murah';
    }
    Cheap.prototype.sellPrice = function () {
        return "Jual harga " + this.name;
    };
    return Cheap;
}());
var Expensive = /** @class */ (function () {
    function Expensive() {
        this.name = 'mahal';
    }
    Expensive.prototype.sellPrice = function () {
        return "Jual harga " + this.name;
    };
    return Expensive;
}());
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var Fashion = /** @class */ (function (_super) {
    __extends(Fashion, _super);
    function Fashion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fashion.prototype.sell = function () {
        console.log("Jual " + this.name + " dengan harga " + this.price.sellPrice());
    };
    return Fashion;
}(Product));
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Computer.prototype.sell = function () {
        console.log("Jual " + this.name + " dengan harga " + this.price.sellPrice());
    };
    return Computer;
}(Product));
// -------------------------------------
var fashionMurah = new Fashion('kemeja', new Cheap());
console.log(fashionMurah.sell());
var komputerMahal = new Computer('macbook pro', new Expensive());
console.log(komputerMahal.sell());
