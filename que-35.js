/* que)->
 Find the maximum sum of a pair of numbers from nums such that the maximum digit in both numbers are equal.
Return the maximum sum or -1 if no such pair exists.

*/

const maxSum = (nums) => {
  let maxSum = -1;
  for (let j = 0; j < nums.length; j++) {
    for (let i = j + 1; i < nums.length; i++) {
      const num1 = nums[j];
      const num2 = nums[i];
      const maxDigitOfNum1 = Math.max(...num1.toString().split("").map(Number));
      const maxDigitOfNum2 = Math.max(...num2.toString().split("").map(Number));
      if (maxDigitOfNum1 === maxDigitOfNum2) {
        const pairSum = num1 + num2;
        maxSum = Math.max(maxSum, pairSum);
      }
    }
  }
  return maxSum === -1 ? -1 : maxSum;
};

const nums = [1,2,3,4];

console.log(maxSum(nums));
