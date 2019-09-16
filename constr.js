var Student = /** @class */ (function () {
    function Student(Rollno, Name, Address, age) {
        this.Rollno = Rollno;
        this.Name = Name;
        this.Address = Address;
        this.age = age;
    }
    Student.prototype.getInfo = function () {
        console.log("ID:: " + this.Rollno + "\tNAME:: " + this.Name + "\tDESG:: " + this.Address + "\tAge::" + this.age);
    };
    return Student;
}());
var std = new Student(2, "Mayuri", "Ahmednagar", 23);
std.getInfo();
var std = new Student(2, "Mayuri", "Ahmednagar");
std.getInfo();
var std = new Student(2, "Mayuri");
std.getInfo();
