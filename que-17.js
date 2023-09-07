/*
Create a function that accepts an array nums, which removes the duplicate element from the array and return 
number of unique elements
*/

const removeDuplicate = (nums) => {
    let i = 0
      for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
          i++;
          nums[i] = nums[j]
        }
      }
      return i+1

};

const arr = [12, 13, 13,4,4,2,5];

const k = removeDuplicate(arr);
console.log(k);
