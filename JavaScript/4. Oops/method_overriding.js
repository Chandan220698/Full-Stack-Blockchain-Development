
// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(this.name);
//     }
// }

// class Student extends Person{
//     constructor(name){  
//         super(name);
//         console.log("This is child class");
//     }
// }

// let student1 = new Student("Chandan");
// student1.greet();

class Person{
    constructor(name){
        this.name = name;
        this.occupation = "Data Scientist";
    }
    greet(){
        console.log(`Hello ${this.name} and ${this.occupation}`);
    }
}

class Student extends Person{
    constructor(name){
        super(name); // take the parameters from person class   
        this.occupation = "Blockchain Developer";   // Attribute overriding
        
    }
    greet(){
        console.log(`Hello ${this.name} and ${this.occupation}`);
    }
}

let obj1 = new Person("Chandan");
console.log(obj1.greet());
let obj2 = new Student("Chandan");
console.log(obj2.greet());