//number
let value = 67
console.log("Before conversion: " + value + " with a type " + typeof value);//before
let value1 = Boolean(value);//first explicit conversion
console.log("After conversion: " + value1 + " with a type " + typeof value1);//reveal after the conversion 1
let value2 = String(value);//second explicit conversion
console.log("After conversion: " + value2 + " with a type " + typeof value2);//reveal after the conversion 2

//string
value = "123"
console.log("Before conversion: " + value + " with a type " + typeof value);//before
value1 = Number(value);//first explicit conversion
console.log("After conversion: " + value1 + " with a type " + typeof value1);//reveal after the conversion 1
value2 = Boolean(value);//second explicit conversion
console.log("After conversion: " + value2 + " with a type " + typeof value2);//reveal after the conversion 2

//boolean
value = true
console.log("Before conversion: " + value + " with a type " + typeof value);//before
value1 = Number(value);//first explicit conversion
console.log("After conversion: " + value1 + " with a type " + typeof value1);//reveal after the conversion 1
value2 = String(value);//second explicit conversion
console.log("After conversion: " + value2 + " with a type " + typeof value2);//reveal after the conversion 2
