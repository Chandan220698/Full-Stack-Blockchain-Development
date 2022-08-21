
// function A - Object1 in parameter
// function B - working with object1 or working with some properties of function A

// Animal is base function
function Animal(value){
    var obj = {};      // Create an empty object
    obj.name = value.name;  // Assign a new attribute to object obj called name
    return obj;
};
// Dpg is the derived function
function Dog(value){
    var obj = Animal(value);
    obj.greet = function(){
        return `Hello ${obj.name}`;     // obj.name -> inheritance attribute
    }
    return obj;
}

var myCuteDog = Dog({name: "SnoopDog"});
console.log(myCuteDog.greet());

