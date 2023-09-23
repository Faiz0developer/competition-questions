/* que->
Find the third distinct maximum number from an array. If array length is less than 3 then find max number
*/


const thirdMax = (nums) =>{
    const distinctArr = [...new Set(nums)]
    distinctArr.sort((a,b) => b-a)
    if(distinctArr.length<3){
        return distinctArr[0]
    }
    return distinctArr[2]
}

const nums = [6,3,2,2,4,5,2]
// const nums = [6,3]
const thirdMaxNum=thirdMax(nums)
console.log(thirdMaxNum)