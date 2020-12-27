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
var CompositeSolutionPattern;
(function (CompositeSolutionPattern) {
    var Category = /** @class */ (function () {
        function Category(name) {
            this.name = name;
            this.children = [];
        }
        Category.prototype.setParent = function (parent) {
            this.parent = parent;
        };
        Category.prototype.getParent = function () {
            return this.parent;
        };
        Category.prototype.isComposite = function () {
            return false;
        };
        return Category;
    }());
    var Product = /** @class */ (function (_super) {
        __extends(Product, _super);
        function Product() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Product.prototype.getName = function () {
            return this.name;
        };
        return Product;
    }(Category));
    var CategoryComposite = /** @class */ (function (_super) {
        __extends(CategoryComposite, _super);
        function CategoryComposite(name) {
            return _super.call(this, name) || this;
        }
        CategoryComposite.prototype.add = function (category) {
            this.children.push(category);
            category.setParent(category);
        };
        CategoryComposite.prototype.remove = function (category) {
            var categoryIndex = this.children.indexOf(category);
            this.children.splice(categoryIndex, 1);
            category.setParent(null);
        };
        CategoryComposite.prototype.isComposite = function () {
            return true;
        };
        CategoryComposite.prototype.getName = function () {
            return this.name;
        };
        return CategoryComposite;
    }(Category));
    var category = new CategoryComposite('Category');
    var computer = new CategoryComposite('Computer');
    var fashion = new CategoryComposite('Fashion');
    var pc = new CategoryComposite('PC');
    var laptop = new CategoryComposite('Laptop');
    var casing = new CategoryComposite('Case');
    var motherboard = new CategoryComposite('Motherboard');
    var peripheral = new CategoryComposite('Peripheral');
    var hdd = new CategoryComposite('HDD');
    category.add(computer);
    category.add(fashion);
    computer.add(pc);
    computer.add(laptop);
    computer.add(peripheral);
    pc.add(casing);
    pc.add(motherboard);
    peripheral.add(hdd);
    var print = function (composite) {
        console.log('category : ' + composite.getName());
        composite.children.forEach(function (element) {
            if (element.isComposite() && element.children.length) {
                print(element);
            }
            else {
                console.log('product : ' + element.getName());
            }
        });
    };
    print(category);
})(CompositeSolutionPattern || (CompositeSolutionPattern = {}));
