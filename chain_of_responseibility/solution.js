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
var CORSolution;
(function (CORSolution) {
    var Product = /** @class */ (function () {
        function Product(name, price, weight) {
            this.name = name;
            this.price = price;
            this.weight = weight;
        }
        return Product;
    }());
    var AbstractProductHandler = /** @class */ (function () {
        function AbstractProductHandler() {
            this.nextHandler = null;
        }
        AbstractProductHandler.prototype.setNext = function (handler) {
            this.nextHandler = handler;
            return handler;
        };
        AbstractProductHandler.prototype.handle = function (request) {
            if (this.nextHandler) {
                return this.nextHandler.handle(request);
            }
            return request;
        };
        return AbstractProductHandler;
    }());
    var ProductNameHandler = /** @class */ (function (_super) {
        __extends(ProductNameHandler, _super);
        function ProductNameHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProductNameHandler.prototype.handle = function (request) {
            if (request.name.length > 20) {
                return 'nama harus dibawah 20 karakter';
            }
            return _super.prototype.handle.call(this, request);
        };
        return ProductNameHandler;
    }(AbstractProductHandler));
    var ProductPriceHandler = /** @class */ (function (_super) {
        __extends(ProductPriceHandler, _super);
        function ProductPriceHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProductPriceHandler.prototype.handle = function (request) {
            if (request.price > 1000000) {
                return 'harga harus dibawah 1 jt';
            }
            return _super.prototype.handle.call(this, request);
        };
        return ProductPriceHandler;
    }(AbstractProductHandler));
    var ProductWeightHandler = /** @class */ (function (_super) {
        __extends(ProductWeightHandler, _super);
        function ProductWeightHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ProductWeightHandler.prototype.handle = function (request) {
            if (request.weight > 5) {
                return 'berat harus dibawah 5 kg';
            }
            return _super.prototype.handle.call(this, request);
        };
        return ProductWeightHandler;
    }(AbstractProductHandler));
    var product1 = new Product('A', 300000, 7);
    var product2 = new Product('B', 1200000, 2);
    var product3 = new Product('C', 250000, 4);
    var nameHandler = new ProductNameHandler();
    var priceHandler = new ProductPriceHandler();
    var weightHandler = new ProductWeightHandler();
    nameHandler.setNext(priceHandler).setNext(weightHandler);
    console.log(nameHandler.handle(product1));
    console.log(nameHandler.handle(product2));
    console.log(nameHandler.handle(product3));
})(CORSolution || (CORSolution = {}));
