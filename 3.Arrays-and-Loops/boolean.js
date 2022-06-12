let numeric = [1, 1, 1, 0, 1, 0, 0, 1]
let boolean = []
for(i=0; i<numeric.length; i++){//iterating through each element
    if(numeric[i]==1){//convert to true if 1, and to false if 0
        boolean[i] = true;
    }else{
        boolean[i] = false;
    }
}
console.log(boolean)