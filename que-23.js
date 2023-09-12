const singleNumber = (nums) => {
  const sortedArr =  nums.sort((a,b) => a-b)
  for(let i=0;i<sortedArr.length;i+=2){
    if(sortedArr[i]!==sortedArr[i+1]){
        return sortedArr[i]
    }
  }
};

// const nums = [2, 2, 1];
// const nums = [4,1,2,1,2];
// const nums = [1];
const nums = [1, 3, 1, -1, 3];  
const getSingleNumber = singleNumber(nums);
console.log(getSingleNumber);
