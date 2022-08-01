// "use strict"  // To use js strictly

console.log("Hello World !");

// Variables
num = 3
console.log(num)
num = 7
console.log(num)
num = num + 2
console.log("new num: ", num)

string = 'seven'
console.log(string)

let number = 1111 // Another way mention variable - Good practice

let num1 = 13
let num2 = 5

console.log("13 % 5", num1 % num2)

// type of
console.log(number, typeof(number))
console.log(53.23, "is type of", typeof 52.23)
console.log('hello', typeof 'Hello')

console.log("Post and Pre Increment")
number = 1111 
console.log(number)
console.log(++number)  // first increment the assignment
console.log(number++)  // assign then increment
console.log(number)

// Template literal: ${}
console.log(`The addition of num1: ${num1} and ${num2} is ${num1+num2}`)

