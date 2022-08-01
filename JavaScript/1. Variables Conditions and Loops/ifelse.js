// Even and odd

let num = 5

if(num%2 === 0)   // === as it will check data type too, unlike == which check only value
    console.log("Even")
else
    console.log("Odd")


if(num%2 === 0){   // === as it will check data type too, unlike == which check only value
    console.log("Even")
    console.log('curly bracket for multiple lines in if-else')
}else{
    console.log("Odd")
}

result = num%2===0 ? "Even":"Odd"
console.log("Ternary result: ", result)