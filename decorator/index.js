var AddObjectProblem;
(function (AddObjectProblem) {
    var Product = /** @class */ (function () {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }
        Product.prototype.getProduct = function () {
            return {
                name: this.name,
                price: this.price
            };
        };
        return Product;
    }());
    var productA = new Product('product A', 5000);
    console.log(productA.getProduct());
    var productAFromImport = Object.assign(productA.getProduct(), { tax: 10000 });
    productAFromImport.price += 20000;
    console.log(productAFromImport);
    var productAFromExport = Object.assign(productA.getProduct(), { tax: 20000 });
    productAFromExport.price += 40000;
    console.log(productAFromExport);
})(AddObjectProblem || (AddObjectProblem = {}));
