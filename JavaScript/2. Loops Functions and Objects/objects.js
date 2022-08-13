// Everything in js are directly or indirectly is objects

// Mutable - Any attribute which can be modified 
// Immutable - Cannot be modified

// let a = 5;
// let s1 = "Hello";
// let s2 = "World";

let empty = {}; // object with no property
console.log(empty);

let point = {
    x: 0,
    y: 0
};
let p2 = {
    x: point.x,
    y: point.y+1
};
console.log(point)
console.log(p2)

let book = {
    "title": "javascript",
    "author": "John",
    "year": 2018,
    "num_copies": 1000
};

console.log(book);
console.log(book.title, book.author);

let book2 = {
    "title": "javascript",
    "author": {
        "first_name": "John",
        "last_name": "Doe"
    },
    "year": 2018,
    "num_copies": 1000
};
console.log(book2);
console.log(book2.author.first_name)

console.log("******** using new ***********")

let book3 = new Object();
book3.title = "js_book";
book3.author = "john doe";
book3.pages = 400;
book3.year = 2018;

console.log(book3);
book3.author = "Chandan Kumar";
book3["year"] = 2019;
console.log(book3);

console.log("******** using create function *******")

let obj1 = Object.create({x:1, y:2});
let o2 = obj1.x + obj1.y;
console.log(o2);
console.log(obj1);