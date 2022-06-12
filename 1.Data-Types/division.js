//declaring two variables with number values
let value1 = 7;
let value2 = 3;

// number/number division and result display
result = value1 / value2;
console.log('The result of ' + value1 + ' divided by ' + value2 + ' is: ' + result);

console.log(`The result of ${value1} divided by ${true} is: ${result=value1/true}`);//number/boolean
console.log(`The result of ${value1} divided by ${"4"} is: ${result=value1/"4"}`);//number/string

//initializing two strings
value1 = "hello"
value2 = "world"

// string/string division and result display
result = value1 / value2;
console.log('The result of ' + value1 + ' divided by ' + value2 + ' is: ' + result);

console.log(`The result of ${value1} divided by ${true} is: ${result=value1/true}`);//string/boolean
console.log(`The result of ${value1} divided by ${4} is: ${result=value1/4}`);//string/number

//initializing two booleans
value1 = true
value2 = false

// boolean/boolean division and result display
result = value1 / value2;
console.log('The result of ' + value1 + ' divided by ' + value2 + ' is: ' + result);

console.log(`The result of ${value1} divided by ${9} is: ${result=value1/9}`);//boolean/number
console.log(`The result of ${value1} divided by ${"string"} is: ${result=value1/"string"}`);//boolean/string