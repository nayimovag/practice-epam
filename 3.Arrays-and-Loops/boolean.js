let numeric = [1, 1, 1, 0, 1, 0, 0, 1]
let boolean = []
for(i=0; i<numeric.length; i++){//iterating through each element
    boolean[i] = Boolean(numeric[i])
}
console.log(boolean)