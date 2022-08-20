
// Class is used to define the object behaviour 

// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello ${this.name} :)`);
//     }
// }

// let person1 = new Person("Chanda Kumar");
// person1.greet();


class Person{
    // Class can have only one constractor
    // You need to define all the attribute of class in the body of the constructor
    constructor(name, age, high_qualification, desig, city, gender, salary){
        // "this" keyword is used to point to the current object of the class
        this.name = name;
        this.age = age;
        this.high_qualification = high_qualification;
        this.desig = desig;
        this.city = city;
        this.gender = gender;
        this.salary = salary;
    }
    greet(){
        console.log(`Hello ${this.name} :)`);
        console.log(this.age);
        console.log(this.high_qualification);
        console.log(this.desig);
        console.log(this.city);
        console.log(this.gender);
        console.log(this.salary);
    }
}

let person1 = new Person("Chanda Kumar", 24, "B.Tech", "Data Scientist", "New Delhi", "Male", 72312);
person1.greet();

class Student extends Person{      // Inheritance

}

// Inheritance
// Parent class - Person
// Child class - Student
let student1 = new Student("CK", 22, "B.Tech", "Blockchain", "NCR", "M", 123000);
student1.greet()