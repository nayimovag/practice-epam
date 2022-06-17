function checkPrime(number){
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {//checks if the number is divisible by numbers other than 1 and itself
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}
checkPrime(16);