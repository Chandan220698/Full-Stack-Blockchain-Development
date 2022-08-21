class Alien{
    constructor(){
        let age, name;
    }
    // Encapasulation is implemented using getter and setter
    setAge(age){
        this.age = age;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    getName(){
        return this.name;
    }
}

let a = new Alien();
a.setAge(24);
a.setName("Invoker");

console.log(a.getAge());
console.log(a.getName());