var PrototypePattern;
(function (PrototypePattern) {
    var User = /** @class */ (function () {
        function User(name, username, password, email, phone) {
            this.name = name;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
        }
        User.prototype.clone = function () {
            var clone = Object.assign({}, this);
            return clone;
        };
        return User;
    }());
    var user1 = new User('Edim', 'edimdend', 'edim4321', 'edim@mail.cm', '08512345');
    var user2 = user1.clone();
    user2.name = 'dudek';
    console.log(user2);
})(PrototypePattern || (PrototypePattern = {}));
