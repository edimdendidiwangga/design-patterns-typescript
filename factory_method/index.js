var FactorySolution;
(function (FactorySolution) {
    var Truck = /** @class */ (function () {
        function Truck(qty) {
            this.qty = qty;
        }
        Truck.prototype.deliver = function () {
            console.log("Send " + this.qty + " with truck");
        };
        return Truck;
    }());
    var Ship = /** @class */ (function () {
        function Ship(qty) {
            this.qty = qty;
        }
        Ship.prototype.deliver = function () {
            console.log("Send " + this.qty + " with Ship");
        };
        return Ship;
    }());
    var LogisticFactory = /** @class */ (function () {
        function LogisticFactory() {
        }
        LogisticFactory.prototype.create = function (options) {
            if (options.type === 'deliver_by_land') {
                return new Truck(options.qty);
            }
            else if (options.type === 'deliver_by_sea') {
                return new Ship(options.qty);
            }
            throw new Error('class not exist');
        };
        return LogisticFactory;
    }());
    var logistic = new LogisticFactory();
    var byLand = logistic.create({ type: 'deliver_by_land', qty: 20 });
    console.log(byLand.deliver());
})(FactorySolution || (FactorySolution = {}));
