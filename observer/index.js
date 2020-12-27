var Observer;
(function (Observer) {
    var PromoSubject = /** @class */ (function () {
        function PromoSubject() {
            this.isPromo = false;
            this.observers = [];
        }
        PromoSubject.prototype.attach = function (observer) {
            var isExist = this.observers.indexOf(observer) !== -1;
            if (isExist) {
                return console.log("observer " + observer.name + " sudah ada");
            }
            this.observers.push(observer);
            console.log("observer " + observer.name + " berhasil ditambahkan");
        };
        PromoSubject.prototype.detach = function (observer) {
            var observerIndex = this.observers.indexOf(observer);
            if (observerIndex === -1) {
                return console.log("observer " + observer.name + " tidak ditemukan");
            }
            this.observers.splice(observerIndex, 1);
            console.log("observer " + observer.name + " berhasil dihapus");
        };
        PromoSubject.prototype.notify = function () {
            for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                observer.update(this);
            }
        };
        PromoSubject.prototype.setPromo = function (status) {
            this.isPromo = status;
            this.notify();
        };
        return PromoSubject;
    }());
    var Product = /** @class */ (function () {
        function Product(name) {
            this.name = name;
        }
        Product.prototype.update = function (subject) {
            if (subject instanceof PromoSubject && subject.isPromo) {
                console.log("product " + this.name + " telah ditayangkan ke toko online sebagai product promo");
            }
        };
        return Product;
    }());
    var promo = new PromoSubject();
    var baju = new Product('baju');
    var celana = new Product('celana');
    var topi = new Product('topi');
    promo.attach(baju);
    promo.attach(celana);
    promo.attach(topi);
    promo.setPromo(true);
    promo.detach(topi);
    console.log(promo);
})(Observer || (Observer = {}));
