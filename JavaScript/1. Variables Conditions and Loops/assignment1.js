// Q1. create a calculator
// Q2. print all even number from 1 to 100
// Q3. find a given number is prime or not

// Solution Q2:
num = 1
while(num <= 100){
    if(num % 2 == 0)
        console.log(num)
    num++;
}

// Solution Q3:
console.log("------------------ Solution 3 ------------------");

let number = 1237;

console.log("The number: ", number, " is", isPrime(number));
function isPrime(number){
    let i = 2;
    if((number == 0) || (number == 1)){
        return "Neither Prime nor Composite";
    }
    while(i*i < number){
        if(number % i == 0){
            return "Not Prime";
        }
        i++;
    }
    return "Prime"
}