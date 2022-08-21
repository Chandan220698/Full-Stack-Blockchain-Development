
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    // Static method
    static CreateGender(gender){
        let name = gender == "Male" ? "Chandan": "Anya";
        return new Person(name);
    }
}

let name_gender = Person.CreateGender("Male");
console.log(name_gender);