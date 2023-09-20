/*que-25)->
Create a function which accepts an array 'nums' and return that number which comes more than half of length of that 
nums array

*/

const majorityElement= (nums) => {
     nums.sort((a,b)=>a-b )
     let count = 0
     for(let j=0;j<nums.length;j++){
        if(nums[j]!==nums[j+1]){
            count=0
        }else{
            count++
        }
        if(count>=Math.floor(nums.length/2)){
            return nums[j]
        }
     }
     return nums
}

const nums = [3,2,3]
const majorElement = majorityElement(nums)

console.log(majorElement)