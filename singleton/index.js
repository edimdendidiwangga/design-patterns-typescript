var Me = /** @class */ (function () {
    function Me() {
        this.firstName = '';
        this.lastName = '';
    }
    Me.prototype.getFullName = function () {
        this.firstName = "firstname";
        this.lastName = "lastname";
        return this.firstName + " " + this.lastName;
    };
    return Me;
}());
var fullName = new Me();
console.log(fullName.getFullName());
var fullName2 = new Me();
console.log(fullName2.getFullName());
