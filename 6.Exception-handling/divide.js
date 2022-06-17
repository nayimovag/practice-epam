//js doesnt have division by zero error, so i artificially check if the divisor iz equal to zero
let a = 1
let b = 0
try{
   if(b == 0){
      throw("cannot be divided by zero");
   } else{
      console.log(c = a/b);
   }
}
catch(e){
   console.log(("Error: " + e ))
}