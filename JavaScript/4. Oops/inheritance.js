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

class Student extends Person{
    constructor(name, age, high_qualification, desig, city, xyz){
        // constructor overloading
        // super points to the constractor of parent class
        super(name, age, high_qualification, desig, city); // Without super it will throw error
        // using super -> derived class mimics the behaviour of parent class

        this.name = name;
        this.age = age;
        this.high_qualification = high_qualification;
        this.desig = desig;
        this.city = city;
        this.xyz = xyz;
    }
    greet_student(){
        console.log(this.name, this.age, this.high_qualification, this.desig, this.city, this.xyz);
    }
}

let student1 = new Student("Chandan", 24, "B.Tech", "Data Scientist", "New Delhi", "xyz");
console.log(student1.greet_student());