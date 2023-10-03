/*que)->
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the 
range that is missing from the array.
*/

const missingNumberFunction = (nums) => {
    nums.sort((a,b) => a-b)
    for(let i=0; i < nums.length;i++){
        if(nums[i+1] - nums[i] > 1){
            return nums[i] +1
        }
    }
    if(nums[nums.length-1] < nums.length){
        return nums[nums.length-1]+1
    }
    if(nums[0] !=0){
        return 0
    }
}

const nums = [3,0,1]
const missingNumber= missingNumberFunction(nums)
console.log(missingNumber)