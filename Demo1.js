//var message = "Hello typescript";
//console.log(message);
//var emp = {id : 1, name : "Amol" };
//console.log(emp.name);
var date1 = /** @class */ (function () {
    function date1(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    date1.prototype.Print = function () {
        console.log(this.day + "/" + this.month + "/" + this.year);
    };
    return date1;
}());
var d = new date1(23, "Nov", 2023);
d.Print();
