/*

ojek1   ojek2   ojek3   ojek4
            app
    penumpang1  penumpang2

*/
var Mediator;
(function (Mediator) {
    var Product = /** @class */ (function () {
        function Product(name, mediator) {
            this.name = name;
            this.mediator = mediator;
        }
        Product.prototype.sell = function () {
            if (this.mediator.isAvailable()) {
                this.mediator.setAvailableStatus(false);
                console.log("produk " + this.name + " berhasil dijual");
            }
            else {
                console.log('produk ini belum dijual harus didaftarkan terlebih dahulu');
            }
        };
        return Product;
    }());
    var ProductMediator = /** @class */ (function () {
        function ProductMediator() {
            this.status = false;
        }
        ProductMediator.prototype.registeredProduct = function () {
            if (this.status) {
                console.log(this.product);
            }
            else {
                console.log('tidak ada produk yang dijual');
            }
        };
        ProductMediator.prototype.registerProduct = function (product) {
            if (this.status) {
                console.log('tidak bisa mendaftarkan produk, karena masih ada produk yang belum terjual');
            }
            else {
                this.product = product;
                this.status = true;
                console.log('produk berhasil didaftarkan');
            }
        };
        ProductMediator.prototype.setAvailableStatus = function (status) {
            this.status = status;
        };
        ProductMediator.prototype.isAvailable = function () {
            return this.status;
        };
        return ProductMediator;
    }());
    var mediator = new ProductMediator();
    var product1 = new Product('Sabun', mediator);
    var product2 = new Product('Sampoo', mediator);
    mediator.registerProduct(product1);
    mediator.registerProduct(product2);
    product1.sell();
    product2.sell();
    mediator.registeredProduct();
    mediator.registerProduct(product2);
    mediator.registeredProduct();
    product2.sell();
    mediator.registeredProduct();
})(Mediator || (Mediator = {}));
