
let student = new Object();

student.name = "Chandan";
student.qualification = "B.Tech";
student.age = 24;
student.rollno = 90;
student.graduation_year = 2020;
student.subjects = ["physics", "chemistry"];
student.marks = [70, 80];

console.log(student);

// Some modification
student.marks = [90, 95];
console.log(student);

console.log("*********** Constructor ******************")

// Constructor
// why js is functional programming - because we can create constructor using function also

function Student(name, age, graduation_year, qualification, dob){   // Creating constructor
    this.name = name;                           // this keyword points to the object of class
    this.age = age;
    this.graduation_year = graduation_year;
    this.qualification = qualification;
    this.dob = dob;
}

let student1 = new Student();   // Creating empty student1 object of Student class
console.log(student1);

let student2 = new Student("Chandan Kumar", 24, 2020, "B.Tech", 1998);
console.log(student2);
console.log(student2.__proto__);    // This will work in browser