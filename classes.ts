class Demo
{
    empid : number;
    empname : string;
    designation : string;

     getInfo()
    {
    console.log("ID:: "+this.empid+"\tNAME:: "+this.empname+"\tDESG:: "+this.designation);
    }
}
let DemoObj = new Demo();
DemoObj.empid = 1;
DemoObj.empname = "Mayuri";
DemoObj.designation = "CEO";
DemoObj.getInfo();