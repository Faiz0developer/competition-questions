/*que->
Write a function which accepts an array 'num' as arguement. This functions manipulate the array such that all
elements having value '0' comes in the end of array without changing the order of non-zeroes elements.
*/

const movingZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0) {
        nums[i] = nums[j];
        nums[j] = 0;
      }
    }
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
const myZeroesfromArray = movingZeroes(nums);
console.log(myZeroesfromArray);
