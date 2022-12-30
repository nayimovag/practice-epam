//declaring two variables with number values
let value1 = 7;
let value2 = 3;

// number+number addition and result display
product = value1 * value2;
console.log('The product of ' + value1 + ' and ' + value2 + ' is: ' + product);

console.log(`The product of ${value1} and ${true} is: ${product=value1*true}`);//number*boolean
console.log(`The product of ${value1} and ${"4"} is: ${product=value1*"4"}`);//number*string

//initializing two strings
value1 = "hello"
value2 = "world"

//string+string addition and result display
product = value1 * value2;
console.log('The product of ' + value1 + ' and ' + value2 + ' is: ' + product);

console.log(`The product of ${value1} and ${true} is: ${product=value1*true}`);//string*boolean
console.log(`The product of ${value1} and ${4} is: ${product=value1*4}`);//string*number

//initializing two booleans
value1 = true
value2 = false

//boolean+boolean addition and result display
product= value1 * value2;
console.log('The product of ' + value1 + ' and ' + value2 + ' is: ' + product);

console.log(`The product of ${value1} and ${9} is: ${product=value1*9}`);//boolean*number
console.log(`The product of ${value1} and ${"string"} is: ${product=value1*"string"}`);//boolean*string