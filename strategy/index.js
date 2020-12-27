var Strategy;
(function (Strategy) {
    var NumberConvertion = /** @class */ (function () {
        function NumberConvertion(strategy) {
            this.strategy = strategy;
        }
        NumberConvertion.prototype.execute = function (num) {
            this.strategy.convertNumber(num);
        };
        return NumberConvertion;
    }());
    var NumberToCurrency = /** @class */ (function () {
        function NumberToCurrency() {
        }
        NumberToCurrency.prototype.convertNumber = function (num) {
            console.log(num.toLocaleString('id-ID', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'IDR'
            }));
        };
        return NumberToCurrency;
    }());
    var NumberToDecimalSeparator = /** @class */ (function () {
        function NumberToDecimalSeparator() {
        }
        NumberToDecimalSeparator.prototype.convertNumber = function (num) {
            console.log(num.toLocaleString('id-ID', {
                minimumFractionDigits: 2
            }));
        };
        return NumberToDecimalSeparator;
    }());
    var NumberToDate = /** @class */ (function () {
        function NumberToDate() {
        }
        NumberToDate.prototype.convertNumber = function (num) {
            console.log(new Date(num * 1000).toUTCString());
        };
        return NumberToDate;
    }());
    var mataUang = new NumberConvertion(new NumberToCurrency);
    mataUang.execute(1000000);
    var decimal = new NumberConvertion(new NumberToDecimalSeparator);
    decimal.execute(500000000);
    var date = new NumberConvertion(new NumberToDate);
    date.execute(2000000);
})(Strategy || (Strategy = {}));
