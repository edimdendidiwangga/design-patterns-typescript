var BuilderSolution;
(function (BuilderSolution) {
    // cara 1
    var User = /** @class */ (function () {
        function User() {
            this.name = '';
            this.username = '';
            this.password = '';
            this.email = '';
            this.phone = '';
        }
        User.prototype.getDetails = function () {
            return this.name + " username = " + this.username;
        };
        return User;
    }());
    var UserBuilder = /** @class */ (function () {
        function UserBuilder() {
            this.user = new User();
        }
        UserBuilder.prototype.setName = function (value) {
            this.user.name = value;
            return this;
        };
        UserBuilder.prototype.setUsername = function (value) {
            this.user.username = value;
            return this;
        };
        UserBuilder.prototype.setPassword = function (value) {
            this.user.password = value;
            return this;
        };
        UserBuilder.prototype.setEmail = function (value) {
            this.user.email = value;
            return this;
        };
        UserBuilder.prototype.setPhone = function (value) {
            this.user.phone = value;
            return this;
        };
        UserBuilder.prototype.build = function () {
            return this.user;
        };
        return UserBuilder;
    }());
    var user1 = new UserBuilder()
        .setName('Edim')
        .setUsername('edimdend')
        .build();
    var user2 = new UserBuilder()
        .setName('Edim')
        .setUsername('edimdend')
        .setPhone('08988888')
        .build();
    console.log(user1);
    console.log(user2);
    // cara 2
    var User2 = /** @class */ (function () {
        function User2(_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? '' : _c, _d = _b.username, username = _d === void 0 ? '' : _d, _e = _b.password, password = _e === void 0 ? '' : _e, _f = _b.email, email = _f === void 0 ? '' : _f, _g = _b.phone, phone = _g === void 0 ? '' : _g;
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
        }
        User2.prototype.getDetails = function () {
            return this.name + " username = " + this.username;
        };
        return User2;
    }());
    var user3 = new User2({ name: 'Budi', username: 'budi123' });
    console.log(user3);
})(BuilderSolution || (BuilderSolution = {}));
