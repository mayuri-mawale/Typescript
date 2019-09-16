var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.getInfo = function () {
        console.log("ID:: " + this.empid + "\tNAME:: " + this.empname + "\tDESG:: " + this.designation);
    };
    return Demo;
}());
var DemoObj = new Demo();
DemoObj.empid = 1;
DemoObj.empname = "Mangesh";
DemoObj.designation = "CEO";
DemoObj.getInfo();
