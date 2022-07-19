class Calculator{
    add(first, second){
        if(isNaN(first) || isNaN(second)){
            throw new Error("Please enter numbers only")
        }
        else{
            let result = first + second
            return result
        }
    }
    multiply(first, second){
        if(isNaN(first) || isNaN(second)){
            throw new Error("Please enter numbers only")
        }
        else{
            let result = first * second
            return result
        }
    }
}
let example = new Calculator
module.exports = example;