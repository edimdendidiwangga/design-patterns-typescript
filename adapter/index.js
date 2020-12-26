var Adapter;
(function (Adapter) {
    // name    |   brand
    // --------------------
    // mobil   |   DeLorean
    // besi    |   -
    // roda    |   -
    var Product = /** @class */ (function () {
        function Product(name, brand) {
            this.name = name;
            this.brand = brand;
        }
        Product.prototype.getData = function () {
            return {
                name: this.name,
                brand: this.brand
            };
        };
        return Product;
    }());
    var Material = /** @class */ (function () {
        function Material(name, qty) {
            this.name = name;
            this.qty = qty;
        }
        Material.prototype.getData = function () {
            return {
                name: this.name,
                qty: this.qty
            };
        };
        return Material;
    }());
    var list = [];
    var product = new Product('mobil', 'DeLorean');
    list.push(product.getData());
    var material = new Material('besi', 10);
    list.push(material.getData());
    var material2 = new Material('roda', 4);
    list.push(material2.getData());
    console.log(list);
    // cara 1 -------------------------------------
    var MaterialAdapter = /** @class */ (function () {
        function MaterialAdapter(adapter) {
            this.adapter = adapter;
        }
        MaterialAdapter.prototype.getData = function () {
            return {
                name: this.adapter.name,
                brand: ''
            };
        };
        return MaterialAdapter;
    }());
    var list2 = [];
    var product2 = new Product('mobil', 'DeLorean');
    list2.push(product2.getData());
    var material21 = new MaterialAdapter(new Material('besi', 10));
    list2.push(material21.getData());
    var material22 = new MaterialAdapter(new Material('roda', 4));
    list2.push(material22.getData());
    console.log(list2);
    // cara 2 -------------------------------------
    var AdapterType;
    (function (AdapterType) {
        AdapterType[AdapterType["PRODUCT"] = 0] = "PRODUCT";
        AdapterType[AdapterType["MATERIAL"] = 1] = "MATERIAL";
    })(AdapterType || (AdapterType = {}));
    var DataAdapter = /** @class */ (function () {
        function DataAdapter(_a, type) {
            var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? '' : _c, _d = _b.brand, brand = _d === void 0 ? '' : _d, _e = _b.qty, qty = _e === void 0 ? 0 : _e;
            this.name = name;
            this.brand = brand;
            this.qty = qty;
            this.type = type;
        }
        DataAdapter.prototype.getData = function () {
            if (this.type === AdapterType.PRODUCT) {
                var product_1 = new Product(this.name, this.brand);
                return {
                    name: product_1.name,
                    brand: product_1.brand
                };
            }
            else if (this.type === AdapterType.MATERIAL) {
                var material_1 = new Material(this.name, this.qty);
                return {
                    name: material_1.name,
                    brand: ''
                };
            }
            return {
                name: '',
                brand: ''
            };
        };
        return DataAdapter;
    }());
    var list3 = [];
    var data1 = new DataAdapter({ name: 'mobil', brand: 'DeLorean' }, AdapterType.PRODUCT);
    list3.push(data1.getData());
    var data2 = new DataAdapter({ name: 'besi', qty: 10 }, AdapterType.MATERIAL);
    list3.push(data2.getData());
    var data3 = new DataAdapter({ name: 'roda', qty: 4 }, AdapterType.MATERIAL);
    list3.push(data3.getData());
    console.log(list3);
})(Adapter || (Adapter = {}));
