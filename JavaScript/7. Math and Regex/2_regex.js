
// Regex - Searching pattern

var a = "IN0171";

var var_regex = /IN/;

if(var_regex.test(a)){
    console.log("true");
}else{
    console.log("false");
}

// Another example
var string = "AiNeuron";

var var_regex = /[A-Y a-y]iNeuron/;

if(var_regex.test(string)){
    console.log("true");
}else{
    console.log("false");
}

// Number check at beginning
var string = "9iNeuron";

var var_regex = /[A-Y a-y 0-9]iNeuron/;

if(var_regex.test(string)){
    console.log("true");
}else{
    console.log("false");
}

// Starting value must not be 0-9
var string = "7iNeuron";

var var_regex = /[^0-8]iNeuron/;

if(var_regex.test(string)){
    console.log("true");
}else{
    console.log("false");
}

// Mobile number check
var phno = "9876543210";

// var var_regex = /[6-9][0-9][0-9][0-9][0-9]...[0-9]/; // [] -> 9times
var var_regex = /[6-9][0-9]{9}/; 

if(var_regex.test(phno)){
    console.log("phone number is valid");
}else{
    console.log("not valid");
}

// Mobile number check
var phno = "ababbc9876543210wqeqweqw";      // Still will be valid

// var var_regex = /[6-9][0-9][0-9][0-9][0-9]...[0-9]/; // [] -> 9times
var var_regex = /[6-9][0-9]{9}/; 

if(var_regex.test(phno)){
    console.log("phone number is valid");
}else{
    console.log("not valid");
}

// Mobile number check - issue at beginning
var phno = "ababbc9876543210wqeqweqw";      // Still will be valid

// ^ within [] means not operator
// ^ at start means 
// var var_regex = /[6-9][0-9][0-9][0-9][0-9]...[0-9]/; // [] -> 9times
var var_regex = /^[6-9][0-9]{9}/; 

if(var_regex.test(phno)){
    console.log("phone number is valid");
}else{
    console.log("not valid");
}

// Mobile number check - Issue at the end
var phno = "9876543210wqeqweqw";      // Still will be valid

// ^ within [] means not operator
// ^ at start means 
// var var_regex = /[6-9][0-9][0-9][0-9][0-9]...[0-9]/; // [] -> 9times
var var_regex = /^[6-9][0-9]{9}/; 

if(var_regex.test(phno)){
    console.log("phone number is valid");
}else{
    console.log("not valid");
}

// Mobile number check - Issue at the end - Fix
var phno = "9876543210wqeqweqw";      // Still will be valid

// ^ within [] means not operator
// ^ at start means 
// var var_regex = /[6-9][0-9][0-9][0-9][0-9]...[0-9]/; // [] -> 9times
var var_regex = /^[6-9][0-9]{9}^/; 

if(var_regex.test(phno)){
    console.log("phone number is valid");
}else{
    console.log("not valid");
}

// Mobile number check - Final Code
var phno = "9876543210";      // Still will be valid

// ^ within [] means not operator
// ^ at start used to match at beginning
// $ at start used to match at end

var var_regex = /^[6-9][0-9]{9}$/; 

if(var_regex.test(phno)){
    console.log("phone number is valid");
}else{
    console.log("not valid");
}