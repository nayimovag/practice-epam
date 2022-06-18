//js doesnt have division by zero error, so i artificially check if the divisor iz equal to zero
let a = 1
let b = 0
try{
   c = a/b
   if(b === 0){
      throw new Error("cannot be divided by zero")
   } else{
      console.log(c = a/b);
   }
}
catch(e){
   console.error(e.name + ': ' + e.message)
}