// Some inbuilt function

let value = Number("987")  //Inbuilt function Number: Convert string number to number
console.log(value, typeof value)


let value2 = Number("987 String")  // Number function unable to conver this string value here so NaN
console.log(value2, typeof value2)

let value3 = parseInt("987 String")
console.log(value3)

let value4 = parseFloat("987.123 String")
console.log(value4)