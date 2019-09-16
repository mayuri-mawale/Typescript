interface Student
{
    rollno:number,
    name:string,
    address:string
}
var Studobj = (std : Student) => {
    console.log("ROLL NO=" + std.rollno + "\n NAME=" + std.name + "\n ADDRESS=" + std.address);
}

Studobj({
    name: "Mayuri",
    rollno: 33,
    address: "Shrirampur"
});