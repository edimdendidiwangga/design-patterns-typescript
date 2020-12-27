/*
- nama < 20
- harga < 1 jt
- berat < 5 kg
*/
var COOR;
(function (COOR) {
    var Product = /** @class */ (function () {
        function Product(name, price, weight) {
            this.name = name;
            this.price = price;
            this.weight = weight;
        }
        Product.prototype.validate = function () {
            if (this.name.length > 20) {
                return 'nama harus dibawah 20 karakter';
            }
            if (this.price > 1000000) {
                return 'harga harus dibawah 1 jt';
            }
            if (this.weight > 5) {
                return 'berat harus dibawah 5 kg';
            }
            return this;
        };
        return Product;
    }());
    var product = new Product('Sabun', 250000, 7);
    console.log(product.validate());
})(COOR || (COOR = {}));
