var SingletonPattern;
(function (SingletonPattern) {
    var Me = /** @class */ (function () {
        function Me() {
            this.firstName = '';
            this.lastName = '';
        }
        Me.getInstance = function () {
            if (!Me.instance) {
                Me.instance = new Me();
            }
            return Me.instance;
        };
        Me.prototype.getFullName = function () {
            this.firstName = "firstname";
            this.lastName = "lastname";
            return this.firstName + " " + this.lastName;
        };
        return Me;
    }());
    var profile = Me.getInstance();
    console.log(profile.getFullName());
    var profile2 = Me.getInstance();
    console.log(profile2.getFullName());
    console.log(profile === profile2);
    // const fullName = new Me();
    // console.log(fullName.getFullName());
    // const fullName2 = new Me();
    // console.log(fullName2.getFullName());
})(SingletonPattern || (SingletonPattern = {}));
