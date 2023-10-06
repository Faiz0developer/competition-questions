/*que) ->
You are given an array nums of positive integers and an integer k.

In one operation, you can remove the last element of the array and add it to your collection.

Return the minimum number of operations needed to collect elements 1, 2, ..., k.
*/

const minOperations = (nums, k)  => {
    let newArr = []
    let count=0
    for(let i = nums.length-1; i>=0;i--){
        count++
        if(nums[i] <=k && !newArr.includes(nums[i])){
            newArr.push(nums[i])
        }
        if(newArr.length===k)  return count      
    }
}

const  nums = [3,2,5,3,1]
const k = 3
console.log(minOperations(nums,k))