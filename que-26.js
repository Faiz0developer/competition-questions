/*
Create a function which accepts an array nums as arguements. This function return true if any value of array comes
 atleast twice else return false if every element is distinct

*/

const contiansDuplicate = (nums) => {
  nums.sort((a, b) => a - b);
  let double = 0
  let isDuplicate =false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      double=0
    } else {
      double++
    }
    if(double>0){
        return isDuplicate=true
    }
}
return isDuplicate
};

const nums = [1,2,3,1];

const isContainsDuplicateElement = contiansDuplicate(nums);
console.log(isContainsDuplicateElement);
