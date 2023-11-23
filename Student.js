var Student1 = /** @class */ (function () {
    function Student1(rollno, name, s1, s2, s3) {
        this.rollno = rollno;
        this.name = name;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
    Student1.prototype.calculate = function () {
        var totalmarks = this.s1 + this.s2 + this.s3;
        var percentage = totalmarks / 3;
    };
    Student1.prototype.print = function () {
        var cal = this.calculate();
        var totalmarks = this.s1 + this.s2 + this.s3;
        var percentage = totalmarks / 3;
        console.log("TotalMarks : ".concat(totalmarks));
        console.log("Per : ".concat(percentage));
    };
    return Student1;
}());
var s1 = new Student1(1, "Tanu", 45, 46, 47);
s1.print();
