let cars = ["Toyota", "BMW", "Ford"]
let carString = cars.join(";")
console.log(carString);//convert the array to a string

let carArray = carString.split(";")//and back to an array
console.log(carArray);