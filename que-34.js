/* que) ->
Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) 
where 0 <= i < j < n and nums[i] + nums[j] < target.
*/

const countPairs = (nums,target) => {
    nums.sort((a,b) => a-b)
    let count = 0
    
    for(let i=0;i<nums.length;i++){
        let j = i+1
        while(j<nums.length){
            if(nums[i]+nums[j]< target){
                count++
            }
            j++
        }
    }
    return count
}

const nums = [-6,2,5,-2,-7,-1,3];
const target= -2
console.log(countPairs(nums,target))