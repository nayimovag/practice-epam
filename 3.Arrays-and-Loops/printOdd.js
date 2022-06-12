function printOdd(number){
    for(i = 1; i <= number; i++){
        if(i % 2 == 1){//checks for a remainder, odd number will have a remainder 1 if divided by 2
            console.log(i);
        }
    }
}
printOdd(20)//print every odd number till 20