const mySqrt = function(x) {
    let low = 0
    let high = x

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        let val = mid*mid
        if(val<=x){
            low = mid+1
            
        }else{
            high = mid-1
        }
    }
    return high
};

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(16))
console.log(mySqrt(20))
console.log(mySqrt(64))