const myCar = new Object();
myCar.company = "BMW";
myCar.model = "X5";
myCar.year = 2019;
myCar.color = "Black";
myCar.engine = "V8";
myCar.price = 20000;
myCar.transmission = "automatic";
myCar.millage = 10;
myCar.condition = "new";
myCar.fuel = "petrol";

console.log(myCar);

myCar.model = "X6";
myCar.transmission = "manual";
myCar.fuel = "diesel";
console.log(myCar)