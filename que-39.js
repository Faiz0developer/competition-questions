/*
fabonacci series using Big 0 complexity
*/

const fabonacci= (n) =>{
    const fabo = [0,1]
    for(i=2;i<n;i++){
        fabo[i] = fabo[i-1]+fabo[i-2]
    }
    return fabo

}

console.log(fabonacci(2))
console.log(fabonacci(4))
console.log(fabonacci(7))