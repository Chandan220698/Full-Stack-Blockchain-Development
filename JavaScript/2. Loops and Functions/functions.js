// function are first-class citizens
// DRY - Dont Repeat Yourself
// Hoisting - Because of this concept we can use function calling before function defination also

function doSomething(){  // Function Defination
    let name = "Chandan";
    console.log(name);
}

doSomething();          // Function Calling
doSomething();          // Function Calling

let num1 = 88;
let num2 = 33;

function add(a, b, c=0){  // c is default value
    return a+b+c;
}

console.log(add(num1, num2));