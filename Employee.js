var Employee1 = /** @class */ (function () {
    function Employee1(Id, Name, Basic_Sal) {
        this.Id = Id;
        this.Name = Name;
        this.Basic_Sal = Basic_Sal;
    }
    Employee1.prototype.calculateGrossSal = function () {
        var hra = this.Basic_Sal * 0.10;
        var da = this.Basic_Sal * .20;
        var ta = this.Basic_Sal * 0.30;
        var gross_sal = this.Basic_Sal + hra + da + ta;
        return gross_sal;
    };
    Employee1.prototype.print = function () {
        var gross_sal = this.calculateGrossSal();
        var hra = this.Basic_Sal * 0.1;
        var da = this.Basic_Sal * 0.2;
        var ta = this.Basic_Sal * 0.15;
        console.log("Employee ID: ".concat(this.Id));
        console.log("Employee Name: ".concat(this.Name));
        console.log("Basic Salary: ".concat(this.Basic_Sal));
        console.log("HRA: ".concat(hra));
        console.log("DA: ".concat(da));
        console.log("TA: ".concat(ta));
        console.log("Gross Salary: ".concat(gross_sal));
    };
    return Employee1;
}());
var e = new Employee1(1, "John Doe", 50000);
e.print();
