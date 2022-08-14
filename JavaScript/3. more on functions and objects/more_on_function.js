// functional programming - functions are first class citizen

function add(n1, n2){
    return n1+n2;
}

console.log(add(5,6));

let sum = add;      // assigning add function to sum - internally sum become function
console.log(sum(1,110));

// we can do these on function: defination, pass, return and assign
// functional programming is used for handling huge data

let sub = function(){       // Assigning function
    // This is anomanous function - we dont have name for this function
    // In order to use this function we can use "variable sub"
    console.log("In sub function")
}

console.log(sub());

console.log("****************************************************")

// Another way to write anonomous function - Arrow function
let display = (n1, n2) =>{      // Arrow function
    console.log(n1, n2);
}
display(12, 21)

