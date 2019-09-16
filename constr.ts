class Student
{
    Rollno : number;
    Name : string;
    Address : string;
    age : number;

  constructor(Rollno: number, Name: string, Address?: string, age?: number)
  {
      this.Rollno = Rollno;
      this.Name = Name;
      this.Address = Address;
      this.age = age;
  }
 getInfo()
  {
  console.log("ID:: "+this.Rollno+"\tNAME:: "+this.Name+"\tDESG:: "+this.Address+"\tAge::"+this.age);
  }

}
var std = new Student(2,"Mayuri","Ahmednagar",23);
std.getInfo();

var std = new Student(2,"Mayuri","Ahmednagar");
std.getInfo();

var std = new Student(2,"Mayuri");
std.getInfo();