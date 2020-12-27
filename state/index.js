var State;
(function (State) {
    var FeaturedProduct = /** @class */ (function () {
        function FeaturedProduct(state) {
            this.state = state;
        }
        FeaturedProduct.prototype.setFeaturedProduct = function (state) {
            this.state = state;
        };
        FeaturedProduct.prototype.getFeaturedProduct = function () {
            console.log(this.state);
        };
        FeaturedProduct.prototype.publish = function () {
            this.state.saveAsFeaturedProduct();
        };
        return FeaturedProduct;
    }());
    var FashionProduct = /** @class */ (function () {
        function FashionProduct(name) {
            this.name = name;
        }
        FashionProduct.prototype.saveAsFeaturedProduct = function () {
            console.log("set produk " + this.name + " sebagai product unggulan");
        };
        return FashionProduct;
    }());
    var baju = new FashionProduct('baju');
    var celana = new FashionProduct('celana');
    var keyboard = new FashionProduct('keyboard');
    var featuredProduct = new FeaturedProduct(baju);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct();
    featuredProduct.setFeaturedProduct(keyboard);
    featuredProduct.publish();
    featuredProduct.getFeaturedProduct();
})(State || (State = {}));
