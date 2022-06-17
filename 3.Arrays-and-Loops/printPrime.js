function isPrime(n){
    for(var i = 2; i < n; i++){
        if(n % i === 0){
            return false;//checks if the number is divisible by numbers other than 1 and itself
        } 
      }
      return true;
}
 
function printPrime(number){
  for(i = 1; i <= number; i++)
  {
      if(isPrime(i)) {
        console.log(i);
      }
}
}
printPrime(20)//print every prime number till 20
