function print(a){
    if(a<10){//checks if its less than 10
        console.log("Already less than 10");
    }
    else{
        do{
            console.log(a)
            a--
        }while(a>=10)//prints untill a is less than 10
    }
}
print(16)