const isGood = (nums) => {
  nums.sort((a, b) => a - b);
  const maxNumber = Math.max(...nums);
  let value = true;
  if (
    nums.length === maxNumber + 1 &&
    nums[nums.length - 2] === nums[nums.length - 1]
  ) {
    for (let i = 0; i <= nums.length - 2; i++) {
      if (nums[i + 1] - nums[i] === 1) {
        value = true;
      } else {
        value = false;
      }
    }
  } else {
    value = false;
  }
  return value;
};
const nums = [2, 2, 2];

console.log(isGood(nums));
