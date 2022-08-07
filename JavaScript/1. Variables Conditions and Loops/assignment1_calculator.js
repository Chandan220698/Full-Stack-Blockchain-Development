console.log("Enter your choice: ");
console.log("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");

let choice;
while(choice != 'x'){
    var ch = prompt();
    choice = ch;

    if(choice != 'x'){
        var x = prompt("Enter the number 1: ");
        var y = prompt("Enter the number 2: ");
        console.log("Result: " , x+y);
    }
}