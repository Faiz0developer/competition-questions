const findDisappearedNumbers = (nums)=> {
    const arrayOfDisappearedNumber = []
    nums.sort((a,b) => a-b)
    let diference = 0
    // let diff1 =nums.length - nums[nums.length-1]
    for(let i=0;i<nums.length;i++){
        diference = nums[i+1] - nums[i]
        let j=1
        if(diference > 1){
            while(j<diference){
                let ele = nums[i]+j
                arrayOfDisappearedNumber.push(ele)
                j++
            }
        }
    }
    for(diff1 =nums.length - nums[nums.length-1];diff1 >=1;diff1--){
        let ele = nums[nums.length-1] + diff1
        arrayOfDisappearedNumber.push(ele)
        
    }
    return arrayOfDisappearedNumber
}

const nums = [4,3,2,7,8,2,3,1]

const disappearedNumbersArray = findDisappearedNumbers(nums)
console.log(disappearedNumbersArray)