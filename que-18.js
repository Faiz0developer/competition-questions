const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i,1);
      i--
    } 
}
return nums.length;
};

const arr = [3, 2, 2, 3];
const val = 3;
const k = removeElement(arr, val);
console.log(k)

const arr1 = [0, 1, 2, 2, 3, 0, 4, 2];
const val1 = 2;
const k1 = removeElement(arr1, val1);
console.log(k1);
