const isPowerOfTwo = (x) => {
    if(x<1){
        return false
    }
    while(x>1){
        if(x%2!==0){
            return false
        }
        x=x/2
    }
    return true
};

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(5))
