const searchInsert = (nums, target) => {
  let index;
  let i = 0;
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    while (i < nums.length) {
      if (target > nums[i]) {
        index = i + 1;
      }
      i++;
    }
    return index;
  }
};

const arry = [1, 3, 5, 6];
const target = 5;

const k = searchInsert(arry, target);
console.log(k);

const arry1 = [1, 3, 5, 6];
const target1 = 2;

const k1 = searchInsert(arry1, target1);
console.log(k1);
