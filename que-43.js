/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = function(n) {
    if (n < 2) {
        return 1;
    }
    
    let firstStep = 1;
    
    let secondStep = 1;
    
    let thirdStep = 0;
    
    for (let i = 2; i <= n; i++) {
        
        thirdStep = firstStep + secondStep;
        
        firstStep = secondStep;
        
        secondStep = thirdStep;
    }
    return thirdStep;
};